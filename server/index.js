const express = require('express')
const app = express();
const port = 3000;

app.get('/sights', (req, res) => {
  const sights = [
    {name:'Glacier Point', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Glacier_Point_at_Sunset%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg/1200px-Glacier_Point_at_Sunset%2C_Yosemite_NP%2C_CA%2C_US_-_Diliff.jpg'},
    {name:'Half Dome', img:'https://www.rei.com/adventures/assets/adventures/images/trip/core/northamerica/ywd_hero'},
    {name:'Tuolumne Meadows',img:'https://media2.trover.com/T/55f7004eb0e9a649910043dc/fixedw_large_4x.jpg'},
    {name:'El Captain', img:'https://www.yosemite.com/wp-content/uploads/2016/04/El-Capitan-_Yosemite-Mariposa-Slide_-Photo-by-Chris-Migeon-700x425.jpg'}
  ];

  res.send(sights)
});

app.listen(port, () => {
  console.log('server is listening on port', port)
})