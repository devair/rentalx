import express from 'express';
import { categoriesRoutes } from './routes/categories.routers';
const app = express();

app.use(express.json());

app.get('/', (request, response)=>{

    return response.status(200).json({message: "Hello cruel world"});
});


app.use(categoriesRoutes);


app.listen(3333, () => console.log("server is running"));
