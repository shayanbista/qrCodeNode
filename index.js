import express from "express";

import QRCode from "qrcode";

const app = express();

let data = { name: "mandy", email: "abc@gmail.com", gender: "male", id: 123 };

app.get("/", (req, res) => {
  let jsonData = JSON.stringify(data);
  QRCode.toDataURL(jsonData, (err, url) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error generating QR code");
    }
    console.log(url);
    res.send(`<img src="${url}" alt="QR Code">`);
  });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
