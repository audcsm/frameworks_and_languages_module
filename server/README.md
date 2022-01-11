Server
======

If port connection is blocked:

    Copy the link (should look like config.hosts << "url here") and paste into config/environment.rb, adding "Rails.application." at the beginning, similar to the other links found there

Useful commands:

Run server:
    bin/rails server

View items:
    curl http://localhost:3000/item

======

Requests:

GET:
    curl http://localhost:8000/item
    curl http://localhost:8000/item/id

POST:
    curl -d '{"user_id":"xyz","keywords":"xyz","description":"xyz","lat":x,"lon":x}' -H 'Content-Type: application/json' http://localhost:8000/item

DELETE
    curl -v --request DELETE http://localhost:8000/item/id