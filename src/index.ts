import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import bodyParser = require('body-parser');

import * as routes from "./routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// here we are adding middleware to parse all incoming requests as JSON 
app.use(bodyParser.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

// Configure routes
routes.register( app );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );