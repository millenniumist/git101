const express = require('express');
const app = express();
const port = process.env.PORT || 9998;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});