import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { Employee } from 'src/employees/interfaces/employee.interface'
import { UpdateEmployeeDto } from './dto/update-employee.dto'

@Injectable()
export class EmployeesService {
    constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>) {

    }

    async findAllEmployees(): Promise<Employee[]> {
        const employees = await this.employeeModel.find({ deleted: false })
        return employees
    }

    async findEmployeeById(id: string): Promise<Employee> {
        const employeeById = await this.employeeModel.findOne({ _id: id, deleted: false })
        return employeeById
    }

    async findDeletedEmployees(): Promise<Employee[]> {
        const deletedEmployees = await this.employeeModel.find({ deleted: true })
        return deletedEmployees
    }

    async createEmployee(employee: Employee): Promise<Employee> {
        const newUser = await this.employeeModel.create(employee)
        return newUser
    }

    async updateEmployee(id: string, employee: UpdateEmployeeDto): Promise<Employee> {
        const employeeById = await this.employeeModel.findByIdAndUpdate(id, employee, { new: true })
        return employeeById
    }

    async deleteEmployee(id: string): Promise<Employee> {
        const employeeById = await this.employeeModel.findByIdAndUpdate(id, { deleted: true }, { new: true })
        return employeeById
    }


}
