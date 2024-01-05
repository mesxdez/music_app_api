const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/information", (req, res) => {
  res.json([
    {
      songName: "And So It Begins",
      artist: "Artificial.Music ",
      img: "https://wallpaperaccess.com/full/1959300.jpg",
      url: "https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3",
    },
    {
      artist: "Ghostrifter Official",
      img: "https://wallpaperaccess.com/full/3033986.jpg",
      url: "https://www.chosic.com/wp-content/uploads/2021/09/Morning-Routine-Lofi-Study-Music.mp3",
      songName: "Morning Routine",
    },
    {
      songName: "Still Awake",
      artist: "Ghostrifter Official",
      img: "https://wallpaperaccess.com/full/3815055.jpg",
      url:
          "https://www.chosic.com/wp-content/uploads/2021/09/Still-Awake-Lofi-Study-Music.mp3"
    },
    {
      artist: "Purrple Cat",
      img: "https://wallpaperaccess.com/full/946034.png",
      url: "https://www.chosic.com/wp-content/uploads/2022/01/Missing-You.mp3",
      songName: "Missing You",
    },
    {
      artist: "Spheriá",
      img: "https://wallpaperaccess.com/full/3815059.jpg",
      url: "https://www.chosic.com/wp-content/uploads/2022/01/Dont-Forget-Me.mp3",
      songName: "Don’t Forget",
    },
    {
      artist: "Keys of Moon",
      img: "https://wallpaperaccess.com/full/1422010.png",
      url: "https://www.chosic.com/wp-content/uploads/2022/04/After-the-Rain-Inspiring-Atmospheric-Music.mp3",
      songName: "After the Rain",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
