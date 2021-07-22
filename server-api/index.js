const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const productRouter = require('./routes/productRouter');
const orderRouter = require('./routes/orderRouter');

const app = express();

app.use(bodyParser.json());

/** Enable Cors */;
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/product', productRouter);
app.use('/order', orderRouter);

app.get('/', (req, res) => {
    res.send('Welcome to shopspree-app-server !')
})

const port = process.env.PORT || 1234;

app.listen(port, () => console.log(`server started on port ${port}`));
