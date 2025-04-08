require('dotenv').config()
const port = process.env.PORT

const app = require('./app')

app.listen(port, () => { // app.listen is used to listen to the port. The port is 3000. 
    console.log(`App is listening on port ${port}`) 
}) //open http://localhost:3000/ OR 127.0.0.1:XXXX(this is for local host, it will ONLY work on your machine, not others) to see the response. (change the number at the end to the port number to see the response)
