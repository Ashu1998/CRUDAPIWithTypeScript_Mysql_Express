import { Request, Response } from 'express';
import db from '../databaseconfig'
import { EmployeeInterface } from '../interface/EmployeeInterfaces'



export async function getEmployeesDetail(req: Request, res: Response): Promise<Response | void> {
	try {
		const employee = await db.executeQuery('SELECT * FROM EmployeeDetails');
		return res.json(employee);
	}
	catch (err) {
		res.send({Error:err});
	}
}

export async function createEmployee(req: Request, res: Response) {
	const newEmployee: EmployeeInterface = req.body;
	try{
		const employee = await db.insertEmployeeQuery('INSERT INTO EmployeeDetails SET ?', [newEmployee])
		res.json({
			message: 'New Post Created'
		});
	}
	catch(err){
		res.send({Error:err});

	}
	
}

export async function getEmployeeDetail(req: Request, res: Response) {

	try{
		const employee = await db.multiUseQuery('SELECT * FROM EmployeeDetails WHERE id = ?',req.params.id);
		res.json(employee[0]);

	}
	catch(err){
		res.send({Error:err});
	}
	
}

export async function deleteEmployeeDetail(req: Request, res: Response) {
	try{
		const employee = await  db.multiUseQuery('DELETE FROM EmployeeDetails WHERE id = ?',req.params.id)
		res.json({
			message: 'Post deleted'
		});

	}
	catch(err){
		res.send({Error:err});
	}

}

export async function updateEmployeeDetail(req: Request, res: Response) {
	const updateEmployee: EmployeeInterface = req.body;
	try{
		const employee = await db.insertEmployeeQuery('UPDATE EmployeeDetails set ? WHERE id = ?', [updateEmployee,req.params.id])
		res.json({
			message: 'Post Updated'
		});
	}
	catch(err){
		res.send({Error:err});
	}

}

