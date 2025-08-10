import typeIcons from "../../../utils/setIcon";
import { NavLinkStyled } from "./CategoryCardStyles";

const CategoryCard = ({ category }) => {
    return (
        <NavLinkStyled to={`/pagecategory/${category.name}`}>
            <img src={ typeIcons[category.name] } alt={category.name} />
            <p> {category.name.charAt(0).toUpperCase() + category.name.slice(1)} </p>
        </NavLinkStyled>
    );
};

export default CategoryCard;