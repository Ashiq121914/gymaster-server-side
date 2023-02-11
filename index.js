const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.send("gymaster website server");
  });
  

  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kryxy3e.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));


const userRoute = require("./routes/userRoutes");
app.use("/user", userRoute);


app.listen(3001, () => {
    console.log("server running on port 3001");
  });
  