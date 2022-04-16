export interface Employee {
    id?: string
    name: string
    email: string
    phoneNumber: string,
    homeAddress: {
        city: string,
        zipcode: string,
        addressLine1: string,
        addressLine2?: string,
    },
    dateOfEmployment: Date
    dateOfBirth: Date
    deleted: boolean
}