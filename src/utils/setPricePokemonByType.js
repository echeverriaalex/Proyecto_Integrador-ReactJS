export const getPriceByCategory = (typeSelected) => {
    switch(typeSelected) {
        case "grass": return 330;
        case "fire": return 800;
        case "water": return 650;
        case "bug": return 200;
        case "normal": return 240;
        case "flying": return 600;
        case "poison": return 450;
        case "electric": return 500;
        case "ground": return 550;
        case "fairy": return 600;
        case "psychic": return 650;
        case "rock": return 700;
        case "ghost": return 750;
        default: return 150; // Default price for unknown types
    }
}

export const calculateProductPrice = (types) => {
    return types.reduce((acc, type) => {
        return acc + getPriceByCategory(type.type.name);
    }, 0)
}