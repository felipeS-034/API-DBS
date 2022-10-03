import { Personajes } from "../../dataApi";

export const getCharacters = async (): Promise<Array<Personajes>> => {
    const response = await fetch("https://dragon-ball-super-api.herokuapp.com/api/characters/");
    const data = await response.json();
    console.log(data);
    return data;
};

