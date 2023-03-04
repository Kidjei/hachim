import {CreateEmployeeDTO, IEmployee} from "./employee.type";

const BASE_URL = "https://17uta8rjoa.execute-api.eu-west-1.amazonaws.com/Stage/v1"

export async function getAllEmployee(limit: number, lastEK: string | undefined): Promise<{lastEvaluatedKey: string, data: IEmployee[]}> {
    const resp  = await fetch(`${BASE_URL}/admin?limit=${limit}&lastEvaluatedKey=${lastEK}`, {
        headers: {
            'x-api-key': "test",
            "content-type": "application/json"
        }
    })

    return await resp.json()
}

export async function createEmployee(data: CreateEmployeeDTO): Promise<IEmployee> {
    const formData = new FormData()
    formData.append("profilepick", data.file as unknown as string)
    formData.append("name", data.firstname)
    formData.append("surname", data.lastname)
    formData.append("email", data.email)
    formData.append("phonenumber", data.phoneNumber)
    formData.append("role", "ADMIN")
    formData.append("password", data.password)

    const path = "admin"

    const options = {
        method: "POST",
        body: formData,
    }

    const resp = await fetch(`${BASE_URL}/${path}`, options)

    const respData = await resp.json()

    console.log(data)

    return respData as IEmployee
}

export async function getEmployeeByID(id: string): Promise<IEmployee>  {
    const resp  = await fetch(`${BASE_URL}/admin/${id}`, {
        headers: {
            'x-api-key': "test",
            "content-type": "application/json"
        }
    })

    return await resp.json()
}

export async function updateEmployee(data: Partial<CreateEmployeeDTO>, id: string) {
    const formData = new FormData()

    if(data.lastname) {
        formData.append("surname", data.lastname)
    }
    if(data.firstname) {
        formData.append("lastname", data.firstname)
    }
    if(data.email) {
        formData.append("email", data.email)
    }
    if(data.phoneNumber) {
        formData.append("phonenumber", data.phoneNumber)
    }

    const path = "admin"

    const options = {
        method: "PUT",
        body: formData,
    }

    const resp = await fetch(`${BASE_URL}/${path}/${id}`, options)

    const respData = await resp.json()

    return respData as IEmployee
}

export  async  function deleteEmployee(id: string) {
    const options = {
        method: "DELETE",
    }

    const resp = await fetch(`${BASE_URL}/admin/${id}`, options)

    const respData = await resp.json()

    return respData as IEmployee
}
