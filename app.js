import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hee");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
