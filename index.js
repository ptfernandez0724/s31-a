// Activity:


const express = require('express')
const mongoose = require('mongoose')
const taskRoute = require('./routes/route');

const app = express();
const port = 3001;
app.use(express.json())
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://admin:admin@zuitt-bootcamp.kc9re.mongodb.net/S31-Activity?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
	}
);

let db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => console.log("We're connected to the cloud database"))

app.use('/tasks', taskRoute)



app.listen(port, () => console.log(`Now listening to port:${port}`))
