import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.mongodb_url as string);
    const port = config.port
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      }) 
  } catch (error) {
    console.log(error);
  }
}

main();
