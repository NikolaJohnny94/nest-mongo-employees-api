import { Employee } from "./employee.interface"

export interface ResponseMessage {
    readonly success: boolean
    readonly status: string
    readonly message: string
    readonly totalEmployees?: number
    readonly pagination?: object
    readonly errorMessage?: string
    readonly employee?: Employee
    readonly employees?: Array<Employee>
}