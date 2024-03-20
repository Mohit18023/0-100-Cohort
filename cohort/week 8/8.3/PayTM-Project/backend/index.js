const express = require('express');
const rootRouter = require('./routes/index');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// defining port
const PORT = 3000;

// defining express
const app = express();

// defining cors
app.use(cors());


// defining express.json
app.use(express.json());

// introduce main router so that we can use all the routes in the index.js
app.use('/api/v1',rootRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})