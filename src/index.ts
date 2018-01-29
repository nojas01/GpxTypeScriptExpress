import * as express from 'express'
import { log } from 'util';

const app = express()
const port = 3030

app.get('/', (req, res, next) => {
    res.json('Hello World')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
