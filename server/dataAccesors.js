const testData = {
  users: [

  ],
  customers: [

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
      userId: '2',
      createdTime: '2019-05-04 08:00',
      recievedTime: '',
      status: 'ready for delivery',
    }
  ],
  routes: [
    
  ]
}

function getUser(id) {
  return testData.users.find(user => user.id === id)
}

function getCustomer(id) {
  return testData.customers.find(customer => customer.id === id)
}

function getCustomersByName(name) {
  return testData.customers.filter(customer => customer.name.indexOf(name) > -1)
}

function getDelivery(id) {
  return testData.deliveries.find(delivery => delivery.id === id)
}

function getDeliveriesByRoute(route) {
  return route.deliveries.map(id => getDelivery(id))
}

function getRoute(id) {
  return testData.routes.find(route => route.id === id)
}


module.exports = {
  getUser,
  getCustomer,
  getCustomersByName,
  getDelivery,
  getDeliveriesByRoute,
  getRoute
}