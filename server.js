const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/load', (req, res) => {
  res.send({ name: '우진', age: 99 });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
