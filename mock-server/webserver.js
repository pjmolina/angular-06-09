var express = require('express');
var cors = require('cors')
var app = express();

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('hello world');
});
app.get('/version', (req, res) => {
  res.send('1.1');
});
app.get('/time', (req, res) => {
  res.send(new Date().toISOString());
});
app.get('/places', (req, res) => {
  res.send([
    { place: 'La Giralda', lat: 1, lng: 2 },
    { place: 'Doñana', lat: 1.2, lng: 2.2 },
  ]);
});

let cities = [{
  name: 'Sevilla',
  temperature: 37,
  state: 'Soleado'
},
{
  name: 'Alicante',
  temperature: 32,
  state: 'Soleado'
},
{
  name: 'Londres',
  temperature: 18,
  state: 'Lluvioso'
}];

app.get('/cities', (req, res) => {
  res.send(cities);
});

app.post('/cities', (req, res) => {
  const body = req.body;
  console.log(body);
  // validacion de datos: to do
  cities.push(body);

  res.send(body);
});

// CURL
// curl -X POST http://localhost:3000/cities -i -d '{"name":"Albacete","temperature":37,"state":"Soleado"}' -H "Content-Type: application/json"


app.put('/cities/:name', (req, res) => {
  const name = req.params['name'];
  const body = req.body;
  const cityIndex = cities.findIndex(c => c.name === name);
  if (cityIndex !== -1) {
    let city = cities.find(c => c.name === name);
    // city.temperature = body.temperature;
    // city.state = body.state;
    city = { ...city, ...body, name };

    cities.splice(cityIndex, 1);
    cities.push(city);
    res.send(city);
  }
  else {
    res.sendStatus(404).end();
  }
});

// curl -X PUT http://localhost:3000/cities/Sevilla -i -d '{"temperature":39}' -H "Content-Type: application/json"


app.delete('/cities/:name', (req, res) => {
  const name = req.params['name'];
  const cityIndex = cities.findIndex(c => c.name === name);
  if (cityIndex !== -1) {
    const city = cities.splice(cityIndex, 1);
    res.send(city);
  }
  else {
    res.sendStatus(404).end();
  }
});

// curl -X DELETE http://localhost:3000/cities/Teruel -i
// curl -X DELETE http://localhost:3000/cities/Londres -i



app.listen(3000);
console.log('Funcionando. Escuchando en: http://localhost:3000');

