import express, { Request, Response } from 'express';
import router from "./route/user.ts"; 
const app = express();
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});
app.use('/user', router);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
