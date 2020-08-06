import express,{Application,Request,Response} from 'express';
import bodyParser from 'body-parser';

import employeeRoutes from './routes/EmployeeRoutes'

const app:Application = express();

app.use(bodyParser.json())

app.use('/employeeInfo',employeeRoutes);

app.listen(5000,()=> console.log('Server is running'));