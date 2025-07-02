export const getCardColorByCategory = (typeSelected) => {
    switch (typeSelected) {
        case "grass": return "linear-gradient(90deg, #72ac34, #5f9a23);";
        case "fire": return "linear-gradient(to bottom right, #f72b28,#800202);";
        case "water": return "linear-gradient(90deg, #7296db, #5f85c9);";
        case "bug": return "linear-gradient(90deg, #efd84c, #e7c530);";
        case "normal": return "linear-gradient(90deg, #dbd7ee, #c9c2e6);";
        case "flying": return "linear-gradient(90deg, #1de2c0, #40e9d0);";
        case "poison":   return "linear-gradient(90deg, #36db12, #24c80c);";
        case "electric": return "linear-gradient(90deg, #fac430, #e9b408);";
        case "ground":   return "linear-gradient(90deg, , );";
        case "fairy": return "linear-gradient(90deg, , );";
        case "psychic": return "linear-gradient(90deg,#ca128d,#ec720d);";
        case "rock": return "linear-gradient(90deg, #5e7c66, #4d6a55);";
        case "ghost": return "linear-gradient(90deg, #c1e0e3, #a7d1d5);";
        case "dark": return "linear-gradient(90deg,#3d3535, #474444);";
        default: return "linear-gradient(90deg, #105d5f, #0c4e50);";
    }
}

export const getCategoryColorByCategory = (typeSelected) => {
    switch (typeSelected) {
        case "grass": return "#189c0c";
        case "fire": return "#f01d1d ";
        case "water": return "#0ba6ac";
        case "bug": return "#c98811";
        case "normal": return "#b4b4b4";
        case "flying": return "#33b3ca";
        case "poison":   return "#24c80c";
        case "electric": return " #c99506 ";
        case "ground":   return "#33b3ca";
        case "fairy": return "#33b3ca";
        case "psychic": return "#33b3ca";
        case "rock": return "#612e2a";
        case "ghost": return "#706f6f";
        case "dark": return "#612e2a";
        default: return "#33b3ca";
    }
}