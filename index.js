const express = require('express');

const app = express();

app.use(() => {
    console.log("Hallo Server 1");
    console.log("Hallo Server 2");
    console.log("Hallo Server 3");
    console.log("Hallo Server 4");
})
//menjalankan server sesuai dengan pord atau membuat server
app.listen(4000)