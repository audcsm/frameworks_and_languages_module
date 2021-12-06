FROM ruby:2.7.4

#RUN apt-get update ?

WORKDIR /rails_api

COPY ./rails_api/Gemfile ./
COPY ./rails_api/Gemfile.lock ./

RUN gem install bundler
RUN bundle install

COPY ./rails_api/ ./

CMD ["rails", "s", "-b", "0.0.0.0", "-p", "8000"]

