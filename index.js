const jsonserver= require('json-server')
const server=jsonServer.create()
const router=jsonServer.router('db.json')
const middlewires=jsonServer.defaults()
const port=process.env.PORT || 3001


server.use(middlewires)
server.use(router)
server.listen(port)