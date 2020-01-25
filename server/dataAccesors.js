const dbReady = require('./dbUtils').dbReady

setTimeout(() => {
  dbReady().then(db => {
    console.log('db ready')
  })
}, 500)

const testData = {
  users: [
    {
      id: 1,
      email: 'some.user@gmail.com'
    },
    {
      id: 2,
      email: 'that.user@gmail.com'
    }
  ],
  customers: [
    {
      id: 1,
      name: 'Guy Dude',
      email: 'some.customer@gmail.com'
    },
    {
      id: 2,
      name: 'Person McPersonface',
      email: 'that.customer@gmail.com'
    }
  ],
  deliveries: [
    {
      id: 1,
      address: '123 that street',
      customerId: '1',
      deliveryTime: '2019-05-05 09:00',
      description: 'dem gud flowers',
      userId: '1',
      createdTime: '2019-05-04 08:00',
      recievedTime: '',
      status: 'ready for delivery',
    },
    {
      id: 2,
      address: '321 the other place',
      customerId: '2',
      deliveryTime: '2019-05-05 09:00',
      description: 'the best flowers',
      creatorId: '2',
      createdTime: '2019-05-04 08:00',
      recievedTime: '',
      status: 'ready for delivery',
    },
    {
      id: 3,
      address: '456 that road',
      customerId: '2',
      deliveryTime: '2019-05-05 09:00',
      description: 'the worst flowers',
      creatorId: '2',
      createdTime: '2019-05-04 08:00',
      recievedTime: '',
      status: 'ready for delivery',
    }
  ],
  routes: [
    {
      id: 1,
      deliveries: [1, 2],
      creatorId: 1,
      driverId: 2,
      createdTime: '2019-05-04 08:00',
      status: 'ready for delivery',
    },
    {
      id: 2,
      deliveries: [3],
      creatorId: 2,
      driverId: 1,
      createdTime: '2019-05-04 08:00',
      status: 'ready for delivery',
    }
  ]
}

function getUser(id) {
  return testData.users.find(user => user.id.toString() === id)
}

function createCustomer(customerData) {
  const currentLength = testData.customers.length
  testData.customers[currentLength] = {
    id: currentLength+1,
    ...customerData
  }
  return testData.customers[currentLength]
}

function getCustomer(id) {
  return testData.customers.find(customer => customer.id.toString() === id)
}

function getCustomersByName(name) {
  return testData.customers.filter(customer => customer.name.indexOf(name) > -1)
}

function createDelivery(deliveryData) {
  const currentLength = testData.deliveries.length
  testData.deliveries[currentLength] = {
    id: currentLength+1,
    createdTime: new Date().toISOString(),
    ...deliveryData
  }
}

function getDelivery(id) {
  return testData.deliveries.find(delivery => delivery.id.toString() === id)
}

function getDeliveriesByRoute(route) {
  return route.deliveries.map(id => getDelivery(id.toString()))
}

function createRoute(routeData) {
  const currentLength = testData.routes.length
  testData.routes[currentLength] = {
    id: currentLength+1,
    createdTime: new Date().toISOString(),
    ...routeData
  }
}

function getRoute(id) {
  return testData.routes.find(route => route.id.toString() === id)
}


module.exports = {
  getUser,
  createCustomer,
  getCustomer,
  getCustomersByName,
  createDelivery,
  getDelivery,
  getDeliveriesByRoute,
  createRoute,
  getRoute
}