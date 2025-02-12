import express from 'express';
import mongoose from 'mongoose'; // allows to interact with mongoDB
import bodyParser from 'body-parser'; // allows to parse the body of the request
import cors from 'cors'; // allows/disallows cross-site communication {cross transactional with different domins}
import routes from './routes/football-routes';
import dotenv from 'dotenv'; // allows to use environment variables



const app = express();
const PORT = 4000;

// Connect to MongoDB
dotenv.config({path:".env"});
//const dbURI = process.env.DATABASE_URL;

mongoose.Promise = global.Promise; // Use Node.js promises
/* mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Error handling for MongoDB connection
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
}); */

mongoose.connect('mongodb://localhost:27017/sportsDB')
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));


// body-parser is used to make sure that the body of the request is parsed and understood by the server while presenting the data in correct format 

app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());

// CORS is used to allow/disallow cross-site communication

app.use(cors());
routes(app);

app.get('/', (req, res) =>
  res.send(`Application running on port ${PORT}`));

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`));


