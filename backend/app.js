// Copyright 2018, Google LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const express = require('express');

const app = express();

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});
// [END hello_world]

// [START products]
app.get('/products', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
  let products = [
    {
      name: 'Striped skirt',
      image: 'https://images.pexels.com/photos/1100790/pexels-photo-1100790.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 199,
      sold_out: false
    },
    {
      name: 'Pink tie',
      image: 'https://images.pexels.com/photos/404171/pexels-photo-404171.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 125,
      sold_out: false
    },
    {
      name: 'Linen blazer',
      image: 'https://images.pexels.com/photos/1143793/pexels-photo-1143793.jpeg?auto=compress&cs=tinysrgb&w=400',
      price: 599,
      sold_out: true
    }
  ];

  res.json(products);
});
// [END products]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}
module.exports = app;
