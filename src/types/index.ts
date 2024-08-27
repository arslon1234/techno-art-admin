// ========= GLOBAL ========
interface IParams {
    limit: number,
    page: number,
    search: string
}
// ========= AUTH ========== 

interface SignIn {
    phone_number: string | undefined
    password: string | undefined
}

export interface Auth {
    sign_in:(data:SignIn)=> any
}

// ==========  CATEGORY =======
interface CreateData {
    name: string
}
export interface Category {
    get: (params: IParams)=> any,
    // create: (data:CreateData)=> any
}

