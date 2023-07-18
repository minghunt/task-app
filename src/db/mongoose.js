import mongoose from "mongoose";

const ConnectDB = () => {
    const connectionURL = 'mongodb+srv://20521368:o9hnFwxAAbjRGUCd@cluster0.ctowrhp.mongodb.net/task-manager?retryWrites=true&w=majority'
    const DB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
    mongoose.connect(connectionURL, DB_OPTIONS)
}

export default ConnectDB




