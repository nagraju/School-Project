require 'net/dns/resolver'

# Custom Domain
#
#   Require net-dns gem
#
#   A Rack middleware to to resolve the custom domain to original subdomain 
#   for your multi telent application.
#
#   It's all transperant to your application, it performs cname lookup and 
#   overwrite HTTP_HOST if needed
# 
#   www.example.org  =>  example.myapp.com
#
#   Credit: Inspired by http://codetunes.com/2009/04/17/dynamic-cookie-domains-with-racks-middleware/
#
class CustomDomain
  @@cache = {}
  
  def initialize(app, default_domain)
    @app = app
    @default_domain = default_domain
  end
  
  def call(env)
    host, port = env['HTTP_HOST'].split(':')
    
    # modify Environment variable HTTP_HOST if custom domain is found
    if custom_domain?(host)
      domain = cname_lookup(host)
      env['HTTP_X_FORWARDED_HOST'] = [host, domain].join(', ')
      
      logger.info("CustomDomain: mapped #{host} => #{domain}")
    end
    
    @app.call(env)
  end
  
  def custom_domain?(host)
    host !~ /#{@default_domain.sub(/^\./, '')}/i
  end
  
  def cname_lookup(host)
    unless @@cache[host]
      Net::DNS::Resolver.new.query(host).each_cname do |cname| 
        @@cache[host] = cname if cname.include?(@default_domain)
      end
    end
    
    @@cache[host]
  end
  
  private
    def logger
      RAILS_DEFAULT_LOGGER || Logger.new(STDOUT)
    end
end