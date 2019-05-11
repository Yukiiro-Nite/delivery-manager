const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const {
  getUser,
  getCustomer,
  getCustomersByName,
  getDelivery,
  getDeliveriesByRoute,
  getRoute
} = require('./dataAccesors')

const customerType = new GraphQLObjectType({
  name: 'Customer',
  description: 'Represents a customer',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the customer'
    },
    name: {
      type: GraphQLString,
      description: 'The name of the customer'
    },
    phoneNumber: {
      type: GraphQLString,
      description: 'The phone number of the customer'
    },
    email: {
      type: GraphQLString,
      description: 'The email of the customer'
    },
    address: {
      type: GraphQLString,
      description: 'The address of the customer'
    },
  })
})

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'Represents a user of the website',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the user'
    },
    email: {
      type: GraphQLString,
      description: 'The email of the user'
    },
  })
})

const deliveryType = new GraphQLObjectType({
  name: 'Delivery',
  description: 'Represents a delivery',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the delivery'
    },
    address: {
      type: GraphQLString,
      description: 'The address to deliver to'
    },
    customerId: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the customer to deliver to'
    },
    customer: {
      type: customerType,
      description: 'The customer to deliver to',
      resolve: delivery => getCustomer(delivery.customerId)
    },
    deliveryTime: {
      type: GraphQLString,
      description: 'The desired delivery time'
    },
    description: {
      type: GraphQLString,
      description: 'Description of the thing to be delivered'
    },
    creatorId: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the user who created the delivery'
    },
    creator: {
      type: userType,
      description: 'The user who created the delivery',
      resolve: delivery => getUser(delivery.creatorId)
    },
    createdTime: {
      type: GraphQLString,
      description: 'The time that the order was created'
    },
    receivedTime: {
      type: GraphQLString,
      description: 'The time that the delivery was received by the customer'
    },
    status: {
      type: GraphQLString,
      description: 'The current status of the delivery'
    }
  })
})

const routeType = new GraphQLObjectType({
  name: 'Route',
  description: 'Represents a set of deliveries to be delivered',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the route'
    },
    deliveries: {
      type: GraphQLList(deliveryType),
      description: 'The set of deliveries for this route',
      resolve: route => getDeliveriesByRoute(route)
    },
    creatorId: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the user who created the route'
    },
    creator: {
      type: userType,
      description: 'The user who created the route',
      resolve: route => getUser(route.creatorId)
    },
    driverId: {
      type: GraphQLNonNull(GraphQLString),
      description: 'The id of the user who is driving the route'
    },
    driver: {
      type: userType,
      description: 'The user who is driving the route',
      resolve: route => getUser(route.driverId)
    },
    createdTime: {
      type: GraphQLString,
      description: 'The time that the route was created'
    },
    startTime: {
      type: GraphQLString,
      description: 'The time that the route was started'
    },
    endTime: {
      type: GraphQLString,
      description: 'The time that the route was finished'
    },
    status: {
      type: GraphQLString,
      description: 'The current status of the route'
    }
  })
})

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    user: {
      type: userType,
      args: {
        id: {
          type: GraphQLString,
          description: 'The id of the user to find'
        }
      },
      resolve: (root, {id}) => getUser(id)
    },
    customer: {
      type: customerType,
      args: {
        id: {
          type: GraphQLString,
          description: 'The id of the customer to find'
        }
      },
      resolve: (root, {id}) => getCustomer(id)
    },
    customersByName: {
      type: GraphQLList(customerType),
      args: {
        name: {
          type: GraphQLString,
          description: 'The name of the customer(s) to search for'
        }
      },
      resolve: (root, {name}) => getCustomersByName(name)
    },
    delivery: {
      type: deliveryType,
      args: {
        id: {
          type: GraphQLString,
          description: 'The id of the delivery to find'
        }
      },
      resolve: (root, {id}) => getDelivery(id)
    },
    route: {
      type: routeType,
      args: {
        id: {
          type: GraphQLString,
          description: 'The id of the route to find'
        }
      },
      resolve: (root, {id}) => getRoute(id)
    }
  })
})

module.exports =  new GraphQLSchema({
  query: queryType,
  types: [
    deliveryType,
    routeType,
    customerType,
    userType
  ]
})