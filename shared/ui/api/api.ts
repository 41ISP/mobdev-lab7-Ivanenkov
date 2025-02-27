import axios from "axios"



const axiosmessangersite = axios.create({
    baseURL: "https://ws-chat.omsktec-playgrounds-1.ru/",
})

const messangerAPI = {
    registration: async (id: string) => {
        try{
            const reponse = await axiosmessangersite.post('/login', {
                id: id
                
            })
            return reponse
        } catch (error){
            console.log(error)
        }
    },
    message: async(id: string) =>{
        const reponse2 = await axiosmessangersite.get('/messages/'+id)
        return reponse2
    }
}

export default messangerAPI