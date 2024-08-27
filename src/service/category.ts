import https from "./config"
import { Category } from "@types"
const category:Category = {
    get: ()=> https.get("/"),
    create: (data)=> https.post("/",data),
    // update: ()=> https.put(),
    // delete: ()=> https.delete()
}
export default category