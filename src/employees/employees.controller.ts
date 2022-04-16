import { Controller, Param, Body, Get, Post, Put, Delete, Query, Res, HttpStatus } from '@nestjs/common'
import { ApiParam } from '@nestjs/swagger'
import { Response } from 'express'
import { Model } from 'mongoose'
import { EmployeesService } from './employees.service'
import { InjectModel } from '@nestjs/mongoose'
import { Employee } from 'src/employees/interfaces/employee.interface'
import { NextAndPrevPages } from 'src/employees/interfaces/nextandprevpages.interface'
import { ResponseMessage } from 'src/employees/interfaces/response-message.interface'
import { Pagination } from 'src/employees/interfaces/pagination.interface'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { UpdateEmployeeDto } from './dto/update-employee.dto'


@Controller('employees')
export class EmployeesController {
    constructor(@InjectModel('Employee') private readonly employeeModel: Model<Employee>, private readonly employeesService: EmployeesService) { }

    @Get()
    async getAllEmployees(@Res({ passthrough: true }) res: Response, @Query('page') pageQuery, @Query('limit') limitQuery): Promise<ResponseMessage> {

        try {
            const page: number = parseInt(pageQuery, 10) || 1
            const limit: number = parseInt(limitQuery, 10) || 5

            const startIndex: number = (page - 1) * limit
            const endIndex: number = page * limit

            const employees: Array<Employee> = await this.employeeModel.find({ deleted: false }).skip(startIndex).limit(limit)
            const employeesCount: number = await this.employeeModel.count({ deleted: false })
            const totalPages: number = Math.ceil(employeesCount / limit)


            let nextAndPrevPages: NextAndPrevPages = {
                nextPage: {
                    page: null
                },
                previousPage: {
                    page: null
                }
            }

            const pagination: Pagination = {
                totalEmployees: employeesCount,
                currentPage: page,
                totalPages,
                limitPerPage: limit,
                nextAndPrevPages
            }

            if (endIndex < employeesCount) {
                nextAndPrevPages.nextPage.page = page + 1
            }

            if (startIndex > 0) {
                nextAndPrevPages.previousPage.page = page - 1
            }

            if (pagination.currentPage > pagination.totalPages) {
                return {
                    success: false,
                    status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                    message: 'Problem occured while trying to retrieve employees from the database',
                    pagination,
                    employees: employees,
                }
            } else {
                return {
                    success: true,
                    status: `${HttpStatus.OK} | OK`,
                    message: employees.length > 0 ? 'Employees successfully retrieved from the database!' : 'There are no employees in the database at the moment!',
                    pagination,
                    employees: employees,
                }
            }
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST)
            return {
                success: false,
                status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                message: 'Failed to retrive employees from the database!',
            }
        }
    }

    @Get('deleted-employees')
    async getDeletedEmployees(@Res({ passthrough: true }) res: Response): Promise<ResponseMessage> {
        try {
            const deletedEmployees = await this.employeesService.findDeletedEmployees()
            const totalDeletedEmployees = await this.employeeModel.count({ deleted: true })
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                totalEmployees: totalDeletedEmployees,
                message: deletedEmployees.length > 0 ? 'Array of deleted employees was successfully retrieved from the database!' : 'There are no deleted employees in the database at the moment!',
                employees: deletedEmployees
            }
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST)
            return {
                success: false,
                status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                message: 'Failed to retrive array of employees from the database!',
                errorMessage: e.message
            }
        }
    }

    @Get(':id')
    @ApiParam({
        name: 'id'
    })
    async getOneEmployeeById(@Param('id') id, @Res({ passthrough: true }) res: Response): Promise<ResponseMessage> {
        const employeeById = await this.employeesService.findEmployeeById(id)
        if (employeeById) {
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `Employee with the id: ${id} was successfully found in the database!`,
                employee: employeeById
            }
        } else {
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `Employee with the id: ${id} was not found in the database!`,
            }
        }
    }

    @Post()
    async createNewEmployee(@Body() createEmployeeDto: CreateEmployeeDto, @Res({ passthrough: true }) res: Response): Promise<ResponseMessage> {
        try {
            const employee = await this.employeesService.createEmployee(createEmployeeDto)
            return {
                success: true,
                status: `${HttpStatus.CREATED} | CREATED`,
                message: 'Employee successfully created!',
                employee
            }
        } catch (e) {
            res.status(HttpStatus.BAD_REQUEST)
            return {
                success: false,
                status: `${HttpStatus.BAD_REQUEST} | BAD REQUEST`,
                message: `Failed to create new employee!`,
                errorMessage: e.message
            }
        }
    }

    @Put(':id')
    @ApiParam({
        name: 'id'
    })
    async editEmployee(@Param('id') id, @Body() updateEmployeeDto: UpdateEmployeeDto, @Res({ passthrough: true }) res: Response): Promise<ResponseMessage> {
        try {
            const employee = await this.employeesService.updateEmployee(id, updateEmployeeDto)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `Employee with the id: ${id} was successfully updated!`,
                employee
            }
        } catch (e) {
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `User with the id: ${id} was not found in the database!`,
                errorMessage: e.message
            }
        }

    }

    @Delete(':id')
    @ApiParam({
        name: 'id'
    })
    async removeEmployee(@Param('id') id, @Res({ passthrough: true }) res: Response): Promise<ResponseMessage> {
        try {
            const employee = await this.employeesService.deleteEmployee(id)
            res.status(HttpStatus.OK)
            return {
                success: true,
                status: `${HttpStatus.OK} | OK`,
                message: `Employee with the id: ${id} was successfully deleted!`,
                employee
            }

        } catch (e) {
            res.status(HttpStatus.NOT_FOUND)
            return {
                success: false,
                status: `${HttpStatus.NOT_FOUND} | Not Found`,
                message: `Employee with the id: ${id} was not found in the database!`,
                errorMessage: e.message
            }
        }
    }
}
