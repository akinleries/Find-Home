import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com";



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '6499dc9004msh1cd9e3e79c7ac27p1c6701jsn0365342fb221',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    }

    );

    return data;
}