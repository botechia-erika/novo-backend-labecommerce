const ADMIN="Admin"
const USER="User"
const enum USERROLE {
   ADMIN= 0,
    NORMAL=1
    }




export type Person = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: USERROLE,
    avatar: string
}


    export type Product={
        id: string,
        name: string,
        description:   string,
        category: string,
        price:number,
        image_url: string,
        brand: string,

    }
