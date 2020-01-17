const express = require('express')
const app = express()
const port = 3000

const services = [
    {
      number: 1,
      items: ["Service 1", "Service 2"]
    },
    {
      number: 2,
      items: ["Service 3", "Service 4"]
    },
    {
      number: 3,
      items: ["Service 5", "Service 6"]
    },
    {
      number: 4,
      items: ["Service 7", "Service 8"]
    }
  ];

app.get('/api/getservices', (req, res) => res.json(services))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))