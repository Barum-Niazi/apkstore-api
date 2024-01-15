const express = require("express");
const app = express();
const port = 3000;
const appData = require("./data.js");
const fs = require("fs");

app.use(express.json());

// Send the JSON response with image URLs, ID, descriptions, and download link
app.get("/", (req, res) => {
  // Generate the response based on the appData
  let response = appData.map((app, index) => ({
    id: index,
    name: app.name,
    image1Url: app.images.logo,
    image2Url: app.images.img1,
    image3Url: app.images.img2,
    image4Url: app.images.img3,
    description: app.description,
    category: app.category,
    downloadLink: app.downloadLink,
    size: app.size,
    rating: app.rating,
  }));

  res.json(response);
});

app.post("/add-app", (req, res) => {
  const newApp = req.body; // Assuming the body has all the necessary fields
  // Optional: Validate the newApp object here

  appData.push(newApp); // Add the new app data to the appData list

  // Write the updated appData to data.js
  fs.writeFile(
    "./data.js",
    `module.exports = ${JSON.stringify(appData, null, 2)};`,
    (err) => {
      if (err) {
        res.status(500).send("Error writing to file");
        return;
      }
      res.status(201).send("App added successfully");
    }
  );
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Gracefully handle server shutdown
process.on("SIGINT", () => {
  console.log("Shutting down server");
  server.close(() => {
    console.log("Server has been stopped");
    process.exit(0);
  });
});
