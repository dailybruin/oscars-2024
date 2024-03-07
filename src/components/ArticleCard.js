import styled from 'styled-components';

const OuterDiv = styled.div`
  position: relative;
  background-color: #dfaf98;
  width: 100%;
  height: auto;
  color: white;
  padding: 24px 30px;
  margin: auto;
  display: flex;
  align-items: center;
  z-index: 5;

  @media screen and (max-width: 426px) {
    width: 75%;
    padding: 0;
    align-items: center;
    flex-direction: column;
  }
`;

const ImageDiv = styled.div`
  background-color: white;
  width: 190px;
  height: 170px;
  margin-right: 32px;
  display: inline-block;

  @media screen and (max-width: 426px) {
    width: 100%;
    height 154px;
    margin-left: 0px;
  }
`;

const TextDiv = styled.div`
  // Div Styles
  background-color: transparent;
  width: 80%;
  height: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  // Text Styles
  text-align: left;

  @media screen and (max-width: 426px) {

  }
`;

const TitleDiv = styled.div`
  font-family: 'Sarala', sans-serif;
  font-weight: 700;
  font-size: 36px;

  @media screen and (max-width: 426px) {
    font-size: 18px;
  }
`;

const DescriptionDiv = styled.div`
  font-family: 'Sarala', sans-serif;
  font-weight: 400;
  font-size: 24px;

  @media screen and (max-width: 426px) {
    font-size: 18px;
  }
`;

const BylineDiv = styled.div`
  font-family: 'Vibur', cursive;
  font-weight: 400;
  font-size: 36px;

  @media screen and (max-width: 426px) {
    font-size: 18px;
  }
`;

const ArticleCard = (props) => {
  return (
    <OuterDiv>
      <a href={props.article_url} style={{ textDecoration: 'none', color: 'white' }}>
        <ImageDiv>
          <img
            src={props.article_image}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ImageDiv>
      </a>
      <TextDiv>
        <a href={props.article_url} style={{ textDecoration: 'none', color: 'white' }}>
          <TitleDiv>{props.article_title}</TitleDiv>
        </a>
        <DescriptionDiv>{props.article_description}</DescriptionDiv>
        <BylineDiv>By {props.article_byline}</BylineDiv>
      </TextDiv>
    </OuterDiv>
  );
};

export default ArticleCard;
