import { createContext, useContext, useState } from "react";
import { MEALS } from "../data/dummy-data";

const ContextFavorites = createContext({
    mealsFavorites: [],
    addFavorite: id => {},
    removeFavorite: id => {},
    isFavorite: id => {},
    handleChange: id => {},
});

export default function ContextProviderFavorites({ children }) {
    const [mealsFavorites, setMealsFavorites] = useState([]);

    const addFavorite = id => {
        setMealsFavorites(prev => [...prev, MEALS.find(item => item.id === id)]);
    };

    const removeFavorite = id => {
        setMealsFavorites(prev => prev.filter(item => item.id !== id));
    };

    const isFavorite = id => {
        return mealsFavorites.some(el => el.id === MEALS.find(item => item.id === id).id);
    };

    const handleChange = id => {
        const isF = isFavorite(id);
        isF ? removeFavorite(id) : addFavorite(id);
        return !isF;
    };

    return (
        <ContextFavorites.Provider
            value={{ mealsFavorites, addFavorite, removeFavorite, isFavorite, handleChange }}
        >
            {children}
        </ContextFavorites.Provider>
    );
}

export const useContextFavorites = () => {
    return useContext(ContextFavorites);
};
