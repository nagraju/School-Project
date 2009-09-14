Bootstrapper.for :development do |b|
  b.run :all
  
  50.times { 
    begin
      Account.make_unvalidated
    rescue
    end
  } # FIXME: Get this to work without make_unvalidated?
  b.run :cleanup_confirmations
end