import express,{Application,Request,Response} from 'express';
import bodyParser from 'body-parser';

import employeeRoutes from './routes/EmployeeRoutes'

const app:Application = express();
console.log('Hello')
console.log('Hello')

app.use(bodyParser.json())

app.get('/check',(req,res)=>{
    res.send('Connection Established!')
})

app.use('/employeeInfo',employeeRoutes);

app.listen(5000,()=> console.log('Server is running'));