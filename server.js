const express = require('express');
const app = express();
const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});