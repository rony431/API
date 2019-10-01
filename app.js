const express = require('express')
var mongoose = require("mongoose");
const app = express()
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });

mongoose.connection.on("error", function(e){console.error(e)})
var schema = mongoose.Schema({
  name: { type: String, required:true},
  price: { type: Number, required:true},
});
// definimos el modelo
var Products = mongoose.model("Products", schema);
app.use(express.urlencoded());
app.get('/products', async (req, res) => {
  const result = await Products.find({});
  res.json(result);
});

app.listen(3000, () => console.log('Listening on port 3000!'));


