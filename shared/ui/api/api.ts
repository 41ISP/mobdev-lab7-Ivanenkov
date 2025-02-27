import axios from "axios"



const axiosmessangersite = axios.create({
    baseURL: "https://ws-chat.omsktec-playgrounds-1.ru/",
})

const messangerAPI = {
    registration: async (id: string) => {
        const reponse = await axiosmessangersite.post('/login', {
            data: {
                id: id
                }
        })
        return reponse
    },
    message: async(id: string) =>{
        const reponse2 = await axiosmessangersite.get('/messages/'+id)
        return reponse2
    }
}

export default messangerAPI