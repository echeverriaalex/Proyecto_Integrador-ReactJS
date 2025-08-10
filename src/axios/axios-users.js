import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (nombre, email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/register`, {
            nombre,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        return alert("Error creating user. Please try again", error.response.data.error[0],msg);
        //throw error;
    }
};