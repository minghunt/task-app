import mongoose from "mongoose";

const ConnectDB = () => {
    const connectionURL = process.env.MONGODB_URL
    const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(connectionURL, DB_OPTIONS)
}

export default ConnectDB




