const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('deliveryManagerData.sqlite')

function getTables() {
  return new Promise((resolve, reject) => {
    db.all(
      `
      SELECT name
      FROM sqlite_master 
      WHERE type ='table' AND name NOT LIKE 'sqlite_%';`,
      (err, rows) => {
        if(err) {
          reject(err)
        } else {
          resolve(rows)
        }
      }
    )
  })
}

function createTables() {
  const tablesPromise = sqliteSchema.map(table => new Promise((resolve, reject) => {
    const args = table.args.map(({name, type}) =>
        `${name} ${type}`
      ).join(',')
      db.run(`CREATE TABLE ${table.name} (${args})`, (err) => {
        if(err) {
          reject(err)
        } else {
          resolve()
        }
      })
  }))
  return Promise.all(tablesPromise)
}

async function initDB() {
  const { sqliteSchema } = require('./graphqlSchema')
  console.log('Inside of initDB: ', sqliteSchema)
  const test = JSON.stringify(sqliteSchema)
  console.log('toJson: ', test)
  const wat = 'wat'
  const tables = await getTables()
  console.log(test)
  console.log(wat)
  const hasExpectedTables = sqliteSchema.reduce((hasExpectedTables, table) => {
    return hasExpectedTables && Boolean(tables.find(name => table.name === name))
  }, true)

  if(!hasExpectedTables) {
    await createTables(schema)
  }
  return db
}

let dbPromise

module.exports = {
  dbReady: () => {
    if(!dbPromise) {
      dbPromise = initDB()
    }
    return dbPromise
  }
}