const express = require("express");
const app = express();
const port = 3000;
const appData = require("./data.js");
// Import the Instagram and Subway descriptions

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
