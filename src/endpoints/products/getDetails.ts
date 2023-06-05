import { TProduct } from "../../types/TProduct";
import { db } from "../../database/knex";
class Item{
    private id:string;
    private name: string;
    private description:string; 
    private price: number;
    private image_url:string;
    constructor(id:string, name:string, description:string, price:number, image_url:string){
        this.id = req.body.id;
        this.name =req.body.name;
        this.description=req.body.description
        this.price = req.body.price
    }
    auditoriaItem :(){
        try {
            const itemDB= await db('users').select().where("ID","LIKE",`${qId}`)
        if(itemDB === undefined)
        console.log('identificador disponivel')
         } catch (err) {
            JSON.stringify(err)
            console.log('erro inesperado' + " " + err + " " + )
        }
    }





