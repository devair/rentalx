import express from 'express';
import { categoriesRoutes } from './routes/categories.routers';
import { specificationsRouter } from './routes/specification.routers';
const app = express();

app.use(express.json());

app.get('/', (request, response)=>{

    return response.status(200).json({message: "Hello cruel world"});
});


app.use('/categories', categoriesRoutes);

app.use('/specifications', specificationsRouter);

app.listen(3333, () => console.log("server is running"));
