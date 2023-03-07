import express from 'express';

const app = express();

app.listen(3333, () => console.log("server is running"));

app.get('/', (request, response)=>{
    return response.json({message : 'Hello cruel world'});
});