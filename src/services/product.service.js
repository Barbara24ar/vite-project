import axios from "axios"
//aqui tenemos los servicios creados para poder usarlos en nuestro proyecto
const API_URL = import.meta.env.VITE_API_URL

export const getProducts = async () => {
    try {
        const res = await axios.get(`${API_URL}/products`)
        return res.data.products
    } catch (error) {
        throw new error("Error al obtener los datos de productos")
    }
}
