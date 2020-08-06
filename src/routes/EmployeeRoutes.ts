import {Router} from 'express';
import { getEmployeesDetail, createEmployee, getEmployeeDetail, deleteEmployeeDetail, updateEmployeeDetail } from '../controllers/EmployeeControllers';

const router  = Router();

router.route('/')
  .get(getEmployeesDetail)
  .post(createEmployee)

router.route('/:id')
  .get(getEmployeeDetail)
  .delete(deleteEmployeeDetail)
  .put(updateEmployeeDetail)

export default router;