const express = require("express");
const app = express();
const port = 3000;
const data = require("./data");
const download = "http:192.168.0.109/";

// Import the Instagram and Subway descriptions
const {
  instagramDescription,
  subwayDescription,
  pArtDescription,
  youtubeDescription,
  geometryDescription,
  candyDescription,
  twitchDescription,
  vivaDescription,
} = require("./descriptions");

// Define a route that responds with multiple image URLs, IDs, descriptions, and download link
app.get("/", (req, res) => {
  // Send the JSON response with image URLs, ID, descriptions, and download link
  res.json([
    {
      // twitch
      id: 0,
      name: data.twitchName,
      image1Url: data.twitchLogo,
      image2Url: data.twitchImage1,
      image3Url: data.twitchImage2,
      image4Url: data.twitchImage3,
      description: twitchDescription,
      category: data.category4,
      downloadLink: data.twitchDownload,
      size: data.twitchSize,
      rating: data.twitchRating,
    },
    {
      // subway surfers
      id: 1,
      name: data.subwayName,
      image1Url: data.subwayLogo,
      image2Url: data.subwayImg1,
      image3Url: data.subwayImg2,
      image4Url: data.subwayImg3,
      description: subwayDescription,
      category: data.category2,
      downloadLink: download + "subway.apk",
      size: data.subwaySize,
      rating: data.subwayRating,
    },

    {
      // picsart
      id: 2,
      name: data.pArt,
      image1Url: data.pArtLogo,
      image2Url: data.pArtImage1,
      image3Url: data.pArtImage2,
      image4Url: data.partImage3,
      description: pArtDescription,
      category: data.category3,
      downloadLink: download + "picsart.apk",
      size: data.pArtSize,
      rating: data.pArtRating,
    },

    {
      // youtube
      id: 3,
      name: data.youtubeName,
      image1Url: data.youtubeLogo,
      image2Url: data.youtubeImage1,
      image3Url: data.youtubeImage2,
      image4Url: data.youtubeImage3,
      description: youtubeDescription,
      category: data.category4,
      downloadLink: download + "youtube.apk",
      size: data.youtubeSize,
      rating: data.youtubeRating,
    },

    {
      // geometry dash
      id: 4,
      name: data.geometryName,
      image1Url: data.geometryLogo,
      image2Url: data.geometryImage1,
      image3Url: data.geometryImage2,
      image4Url: data.geometryImage3,
      description: geometryDescription,
      category: data.category2,
      downloadLink: download + "geometry.apk",
      size: data.geometrySize,
      rating: data.geometryRating,
    },
    // candy crush
    {
      id: 5,
      name: data.candyName,
      image1Url: data.candyLogo,
      image2Url: data.candyImage1,
      image3Url: data.candyImage2,
      image4Url: data.candyImage3,
      description: candyDescription,
      category: data.category2,
      downloadLink: download + "candy.apk",
      size: data.candySize,
      rating: data.candyRating,
    },

    // instagram
    {
      id: 6,
      name: data.instagramName,
      image1Url: data.instaLogo,
      image2Url: data.instaImg1,
      image3Url: data.instaImg2,
      image4Url: data.instaImg3,
      description: instagramDescription,
      category: data.category1,
      downloadLink: download + "instagram.apk",
      size: data.instagramSize,
      rating: data.instagramRating,
    },

    //vivavideo
    {
      id: 7,
      name: data.vivaName,
      image1Url: data.vivaLogo,
      image2Url: data.vivaImage1,
      image3Url: data.vivaImage2,
      image4Url: data.vivaImage3,
      description: vivaDescription,
      category: data.category3,
      downloadLink: download + "vivavideo.apk",
      size: data.vivaSize,
      rating: data.vivaRating,
    },
  ]);
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
