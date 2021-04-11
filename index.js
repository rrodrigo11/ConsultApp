const express = require('express');

const {historialRouter,
        loginRouter,
        userRouter,
        odonRouter} = require('./app/backend/routes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

/*MIDDLEWARES*/
app.use(express.json());
app.use(cors());
//app.use(express.static(__dirname+'/public'));

/*ROUTES*/

app.use('/historial_route', historialRouter);
app.use('/user_route', userRouter);
app.use('/login_route', loginRouter);
app.use('/odon_route', odonRouter);

app.get('/', (req, res) => {
        res.end('Api works!');
});

app.listen(port, ()=>console.log("running..."));