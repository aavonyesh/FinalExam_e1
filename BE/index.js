import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

const VegetablesSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
});

const Vegetables = mongoose.model("Vegetables", VegetablesSchema);

app.get("/", async (req, res) => {
  const vegetables = await Vegetables.find();
  res.send(vegetables);
});
app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const vegetable = await Vegetables.findById(id);
  res.send(vegetable);
});
app.post("/", async (req, res) => {
  const { body } = req;
  const vegetable = await Vegetables.create(body);
  res.send("Created!");
});
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const vegetable = await Vegetables.findByIdAndUpdate(id, body);
  res.send("Updated!");
});
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const vegetable = await Vegetables.findByIdAndDelete(id);
  res.send("Deleted!");
});
mongoose
  .connect(
    "mongodb+srv://aynurahbf206:aynurcode206@cluster0.z1kpoya.mongodb.net/"
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Not connected"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
