import mysql from "promise-mysql";

export default class DB {
  protected static _pool:any;
  public static getPool() {
    if (!DB._pool) {
      DB._pool = mysql.createPool({
      host:  "localhost",
      port:   3306,
      user: "root",
      password:  "root",
      database:  "EmployeeInfo",
      connectionLimit: 100
      });
    }

    return DB._pool;
  }

  public static async executeQuery(query:string) {
    const pool = await DB.getPool();
    const result = await pool.query(query);
    return result;
  }
  public static async insertEmployeeQuery(query:string,data:any) {
    const pool = await DB.getPool();
    const result = await pool.query(query,data);
    return result;
  }

  public static async multiUseQuery(query:string,id:string) {
    const pool = await DB.getPool();
    const result = await pool.query(query,id);
    return result;
  }


}