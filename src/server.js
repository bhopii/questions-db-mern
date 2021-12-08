'use strict';
const express = require('express');
const app = express();
const questionRoutes = require("./routes/questionRoutes");
const path = require('path');
const mongoose = require("mongoose");

// server config
const PORT = process.env.PORT || 3001;

// Serve static content for the app from the "public" directory in the application directory.
const publicDirPath = path.join(__dirname, '../', 'public');
app.use('/', express.static(publicDirPath));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// register routes
app.use("/api/questions", questionRoutes);

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/questionsDb",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  );
  
  const connection = mongoose.connection;
  
  connection.on("connected", () => {
    console.log("Mongoose successfully connected!");
  });
  
  connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
  });

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
