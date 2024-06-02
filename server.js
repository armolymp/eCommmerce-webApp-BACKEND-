const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

const uploadDir = path.join(__dirname, 'uploads');


try {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('The uploads directory has been created.');
  }
} catch (err) {
  console.error(`Error creating directory ${uploadDir}:`, err);

}

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


app.use('/api/products', productRoutes);
app.use('/uploads', express.static(uploadDir)); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
