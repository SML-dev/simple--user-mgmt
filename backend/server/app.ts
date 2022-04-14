import * as express from 'express';
import 'express-async-errors';
import * as cors from 'cors';
import {handleError} from './utils/error';
import {usersRouter} from './routes/users.routes';
import './utils/db';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

app.use('/', usersRouter);
app.use(handleError);
app.listen(5000, () => {
    console.log('server listening on http://localhost:5000');
});
