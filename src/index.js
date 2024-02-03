const express = require('express');
const PORT = 3000;
const jobs = require("../Notification/cronJob");

const app = express();
app.use(express.json());

jobs.cronJob();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});