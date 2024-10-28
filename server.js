const express = require('express');
const authRoute = require('./routes/auth')
const app = express();
const port = process.env.PORT || 9998;


app.use("/auth",authRoute)
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});