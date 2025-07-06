import { CategoryContainerStyled, CategoryStyled } from "./TypeLabelContainerStyles";
import typeIcons  from "../../../../../utils/setIcon"

const TypeLabelContainer = ({ types = [] }) => {
  return (
    <CategoryContainerStyled>
      {
        types.map((item, index) => (
          <CategoryStyled key={ index } type={item.type.name}>
            <p>{ item.type.name }</p>
            <img src={typeIcons[item.type.name]} alt={item.type.name} />
          </CategoryStyled>
        ))
      }
    </CategoryContainerStyled>
  );
}

export default TypeLabelContainer;