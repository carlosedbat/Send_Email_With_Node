import express,{Request, Response, Router} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
const cors = require('cors');

import mainRoutes from './routes/mainRoutes';

dotenv.config();

const server = express();


server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache', mustache());

//definindo a pasta publica
server.use(express.static(path.join(__dirname,'../public')));
server.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    res.header('Access-Control-Allow-Credentials', 'true');

    res.header('Access-Control-Allow-Headers', "*")

    server.use(cors());
    next();
});
server.use(express.json());
server.use(express.urlencoded({extended:true}));

server.use('/', mainRoutes);

server.use((req:Request, res:Response)=>{
    res.status(404).send('Página não encontrada!')
});


// o listen é o responsavel por ficar escutando a porta do servidor
server.listen(process.env.PORT);