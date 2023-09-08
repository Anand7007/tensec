const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 9443;

app.use(bodyParser.json());


app.post('/add-item/:pantryId/basket/:basketKey', async (req, res) => {
    try {
      const { pantryId, basketKey } = req.params;
      const payload = req.body; 
      
     
      const response = await axios.post(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, payload);

      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Message Error' });
    }
  });
  



app.get('/get-item/:pantryId/basket/:basketKey', async (req, res) => {
    try {
      const { pantryId, basketKey } = req.params;
      
      
      const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);
      
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Message Error' });
    }
  });
  app.get('/list-baskets/:pantryId/basket/:basketKey', async (req, res) => {
    try {
      const { pantryId, basketKey } = req.params;
      
      
      const response = await axios.get(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);
      
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Message Error' });
    }
  });


app.put('/update-item/:pantryId/basket/:basketKey', async (req, res) => {
    try {
      const { pantryId, basketKey } = req.params;
      const payload = req.body; 
      
      
      const response = await axios.put(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`, payload);
      
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Message  Error' });
    }
  });
  


app.delete('/delete-item/:pantryId/basket/:basketKey', async (req, res) => {
    try {
      const { pantryId, basketKey } = req.params;
      
      
      const response = await axios.delete(`https://getpantry.cloud/apiv1/pantry/${pantryId}/basket/${basketKey}`);
      
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Message error' });
    }
  });
  

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Message error' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});