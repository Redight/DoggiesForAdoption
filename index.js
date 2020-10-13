const express = require('express');
const server = express();

const visitorRoutes = require('./routes/visitors-routes')
const adminRoutes = require('./routes/admin-routes')

server.use(express.json());
server.use("/api/visitors", visitorRoutes)
server.use("/api/admin", adminRoutes)

const port = process.env.PORT || 5000;

server.listen(port, ()=> console.log(`\n Running on port ${5000}\n`))

server.get('/', (req, res) =>{
    res.send("woof woof ! We out the Pound!")
});

server.get('/yes', (req, res) =>{
    res.send("Starting to get the hang of it!")
});
