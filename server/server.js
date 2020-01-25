const expressStarter = require('express-starter')
const expressGraphql = require('express-graphql')
const { schema } = require('./graphqlSchema')
const port = process.env.PORT || 3000

expressStarter.start(port,
  (express, app, io) => {
    app.use((req, res, next) => {
      console.log(`Request @ ${req.originalUrl}`);
      next();
    });
    app.use(expressGraphql({
      schema,
      graphiql: true
    }))
    app.use(express.static('public'));
  },
  (express, app, io) => {
    // postload
    // could catch unhandled requests here
    app.use((req, res, next) => {
      if(res.responsePromise instanceof Promise) {
        res.responsePromise
          .then((response) => res.send(response))
          .catch((error) => res.status(500).send(error));
      } else {
        next();
      }
    })
  });