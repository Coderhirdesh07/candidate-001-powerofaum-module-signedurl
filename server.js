const express = require('express');
const app = express();
const router = express.Router();
const handler = require('./index.controller.js');

router.get('/api/generate-signed-url',handler);
app.use(router);

app.listen(3000,()=>{
    console.log('Server started at port');
});