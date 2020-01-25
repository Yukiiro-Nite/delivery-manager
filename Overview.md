# Route Builder
looks like this is more of a delivery manager

## A user should be able to do the following:
- Add ~~locations~~ delivery [x]
- View deliveries in list [x]
- View ~~locations~~ delivery locations on the ma
- Remove ~~locations~~ [x]
- Edit ~~location~~ delivery details [x]
- Create ordered lists of ~~locations~~ deliveries
- Share navigate to google map directions for a route

### Stretch goal
- Users who are driving a route should be able indicate they have finished a ~~location~~ delivery
  - Maybe they can leave comments about a ~~location~~ delivery?

## User Roles
- route manager
- driver

## Data structures
- delivery (maybe there are technically two things? delivery and order?)
  - id (automatic)
  - address (where should the delivery be delivered to)
    - maybe this should be stored as a google maps address?
  - customer id (who wants the delivery)
  - delivery time (when does the customer want the delivery)
  - description (what is the delivery)
  - user id (who created the delivery)
  - created time (when was the delivery created)
  - recieved time (when was the delivery recieved)
  - status (what status is the delivery in)
- route
  - id
  - deliveries (list of deliveries)
  - creator id (who created the route)
  - driver id (who is driving the route)
  - created time (when was the route created)
  - start time (when was the route started)
  - end time (when was the route finished)
  - status (what is the status of the route)
- customer
  - id
  - name
  - phone number
  - email
  - address
- user
  - id
  - email
  - password (unless using oauth)

## User flows
- create delivery
  - customer calls / requests to have a delivery
  - user enters data for the delivery
    - customer (create customer if new customer)
    - address (can be filled in if same as customer, verify that it is correct)
    - delivery time
    - description
  - other data is automatically entered (created date, user id, ect)

- create customer
  - customer is a new user
  - user enters data for customer
    - name
    - address
    - phone number
    - email

- create route
  - given a list of deliveries, a user should be able to create a route
  - valid deliveries should be displayed on a map
  - clicking on a delivery should add it to a route
  - when the user is finished creating a route, they should be able to save it

- start route
  - a user should be provided a list of routes to pick from
    - picking the route sets them as the driver
    - user is given a link to a google map for the route they need to drive
      - if the map is in the app, it should allow the user to update deliveries as they go.

- update delivery
  - should update status and end time if applicable

- edit customer
  - used for updating contact information on a customer
  - should be available during delivery creation after a user has been selected