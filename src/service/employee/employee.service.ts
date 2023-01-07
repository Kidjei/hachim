import {CreateEmployeeDTO, IEmployee} from "./employee.type";

const BASE_URL = "https://17uta8rjoa.execute-api.eu-west-1.amazonaws.com/Stage/v1"

export async function getAllEmployee(): Promise<IEmployee[]> {
    const path = "admin?rowsPerPage=10&page=1"

    const resp  = await fetch(`${BASE_URL}/${path}`)

    const data = await resp.json()

    console.log(data)

    return data as IEmployee[]
}

export async function createEmployee(data: CreateEmployeeDTO): Promise<IEmployee> {
    const path = "admin"

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
    }

    const resp = await fetch(`${BASE_URL}/${path}`, options)

    const respData = await resp.json()

    console.log(data)

    return respData as IEmployee
}
