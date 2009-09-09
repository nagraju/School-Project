require 'machinist'
require 'machinist/active_record'
# require 'machinist/object' # for non-active_record models.
require 'sham'
require 'forgery'

Dir.glob(Rails.root.join('lib', 'machinist', '*.rb')).uniq.each do |file|
  require file
end

# == USAGE:
#    Post.make                                    # save with generated values
#    Post.make(:title => "An explicit title")     # save with explicit value
#    Post.make_unvalidated                        # save without validations
#    Post.make_unsaved                            # don't save
#

# Setup fake data generators.
Sham.login                  { Forgery(:internet).user_name }
Sham.email                  { Forgery(:internet).email_address }
Sham.password               { '123456' }
Sham.ip                     { (1..4).collect { |x| rand(256) }.join('.') }
# ---
Sham.language               { Forgery(:personal).language } # TODO: "locale"-forgery
Sham.time_zone              { 'UTC' }                       # TODO: "time_zone"-forgery
# ---
Sham.name                   { Forgery(:name).full_name }
Sham.gender(:unique => false) { Forgery(:personal).abbreviated_gender }
Sham.website                { Forgery(:internet).domain_name }
# ---
Sham.street_address         { Forgery(:address).street_address }
Sham.city                   { Forgery(:address).city }
Sham.postal_code            { Forgery(:address).zip }
Sham.country                { Forgery(:address).country }   # TODO: "country_abbrev"-forgery
Sham.phone                  { Forgery(:address).phone }
# ---
Sham.title(:unique => false)  { Forgery(:lorem_ipsum).sentence }
Sham.description(:unique => false)  { Forgery(:lorem_ipsum).sentences(2) }
Sham.body(:unique => false) { Forgery(:lorem_ipsum).paragraphs(rand(8) + 1) }
Sham.comment(:unique => false) { Forgery(:lorem_ipsum).paragraphs(rand(4) + 1) }
# --- 
Sham.date                   { Forgery(:basic).number(:at_most => 1000).days.from_now }
Sham.created_at             { Sham.date }
Sham.updated_at             { Sham.date }
# ---

# Load model blueprints.
Dir.glob(Rails.root.join('test', 'blueprints', '**', '*.rb')).uniq.each do |blueprint|
  require blueprint
end
