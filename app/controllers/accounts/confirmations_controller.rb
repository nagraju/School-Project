class Accounts::ConfirmationsController < AuthHelpers::Controller::Confirmable
  has_confirmable Account
end
