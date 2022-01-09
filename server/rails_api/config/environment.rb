# Load the Rails application.
require_relative "application"

Rails.application.config.hosts << "8000-copper-slug-6fjpzrxa.ws-us23.gitpod.io"
Rails.application.config.hosts << "8000-copper-slug-6fjpzrxa.ws-us25.gitpod.io"

# Initialize the Rails application.
Rails.application.initialize!
