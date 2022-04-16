import { IsEmail, IsNotEmpty, IsString, IsObject, IsDate, IsBoolean, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string
    @IsString()
    @IsNotEmpty()
    readonly phoneNumber: string
    @IsObject()
    @IsNotEmpty()
    readonly homeAddress: {
        city: string,
        zipcode: string,
        addressLine1: string,
        addressLine2?: string,
    }
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    readonly dateOfEmployment: Date
    @IsDate()
    @Type(() => Date)
    @IsNotEmpty()
    readonly dateOfBirth: Date
    @IsOptional()
    @IsBoolean()
    readonly deleted: boolean
}