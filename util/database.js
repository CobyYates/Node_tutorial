const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://cober:1234abcd@cluster0-wd74s.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client => {
    console.log('Connected!')
    _db = client.db()
    callback(client)
  })
  .catch(err => {
    console.log(err)
    throw err
  })
}

const getDb = () => {
  if (_db) {
    return _db
  }
  throw 'No db found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb