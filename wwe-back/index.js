// import jsonserver
const jsonserver=require('json-server')

// create our own server
const wweserver=jsonserver.create()

// generate middleware
const middleware=jsonserver.defaults()

// set up path for db.json
const router=jsonserver.router('db.json')

// set up port for server
const port=3000

// use middleware and router in server
wweserver.use(middleware)
wweserver.use(router)

// server listen to request
wweserver.listen(port,()=>{
    console.log('wweportal server started at port num:-'+port);
})
