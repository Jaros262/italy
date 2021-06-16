const path = require('path');
const http = require('http');
const express = require('express');
const fs = require('fs').promises;

async function readJSON(path) {
  const data = await fs.readFile(path)
  .catch(err => console.error('Chyba načtení souboru: ', err));
  return JSON.parse(data.toString());
}

//test bby

/*readJSON('data/events.json')
    .then(data => console.log(data))
    .catch(err => console.error('Nemám data', err));
*/

async function writeJSON(path, data) {
  data = JSON.stringify(data);
  await fsPromises
    .writeFile(path, data, 'utf-8')
    .catch(err => console.error("Failed to write file", err));
  return data;
}

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/events", (req, res) => {
  readJSON('data/events.json')
  .then(data => res.send(data))
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/events/:index", (req, res) => {
  readJSON('data/events.json')
  .then(data => {
      res.send(data[req.params.index])
  })
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/events/year/:year", (req, res) => {
  readJSON('data/events.json')
  .then(data => {
      const result = data.find(({year}) => year == req.params.year);
      res.send(result);
  })
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});


app.get("/api/events/detail/:str", (req, res) => {   
  readJSON('data/events.json')
  .then(data => {
      console.log(req.query['find']);
      const result = data.filter(obj => obj.detail.includes(req.query['find']));
      res.send(result);
  })
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/events/search", (req, res) => {    
  readJSON('data/events.json')
  .then(data => {
      console.log(req.query['find']);       
      const result = data.filter(obj => obj.detail.includes(req.query['find']));
      res.send(result);
  })
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/persons", (req, res) => {
  readJSON('data/persons.json')
  .then(data => res.send(data))
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/town", (req, res) => {
  readJSON('data/town.json')
  .then(data => res.send(data))
  .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

const PORT = process.env.PORT || 6060;
server.listen(PORT,() => console.log(`Server běží na portu ${PORT}`));