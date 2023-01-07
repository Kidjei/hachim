export interface IEmployee {
    id: string,
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    role: string,
}

export interface CreateEmployeeDTO {
    name: string,
    surname: string,
    email: string,
    phoneNumber: string,
    password: string,
}