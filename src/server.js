const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

