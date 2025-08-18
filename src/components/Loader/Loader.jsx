import { ImageContainerStyled, LoaderWrapper, TextContainerStyled } from "./LoaderStyles";

const Loader = (props) => {
  return (
    <LoaderWrapper>
      <ImageContainerStyled>
        <img src="https://i.gifer.com/Y8HK.gif" />
      </ImageContainerStyled>
      <TextContainerStyled>
        <h2>Loading ...</h2>
        {
          props.message && <p>{props.message}</p>
        }
      </TextContainerStyled>
    </LoaderWrapper>
  );
}

export default Loader;