import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Employee {
    @Prop({ required: true })
    name: string
    @Prop({ required: true, unique: true, match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })
    email: string

    @Prop({ required: true, maxlength: 20 })
    phoneNumber: string

    @Prop({ required: true, type: Object })
    homeAddress: {
        city: string,
        zipcode: string,
        addressLine1: string,
        addressLine2?: string
    }

    @Prop({ required: true })
    dateOfEmployment: Date

    @Prop({ required: true })
    dateOfBirth: Date

    @Prop({ required: true, default: false })
    deleted: boolean
}

const EmployeeSchema = SchemaFactory.createForClass(Employee)

EmployeeSchema.set('timestamps', true)

export default EmployeeSchema

