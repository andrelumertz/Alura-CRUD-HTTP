import api from "./api,js";

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.getElementById("lista-pensamentos")

        try{
            const pensamentos = await api.buscarPensamentos()
            
        }
        catch{

        }
    }
}