import express, { Request, Response } from 'express';
import exampleResponse, { exampleRequest } from './example-to-import';

const app = express();

app.get('/', (req: Request, res: Response) => {
    console.log("Hello word.");
    // req.body
    // req.query
    // req.params
    // req.header
    // req.cookies
    // req.headers.authorization
    res.json({
        message: "Hello world."
    })
});

app.listen(3000, function () {
    console.log('Ready')
  })
