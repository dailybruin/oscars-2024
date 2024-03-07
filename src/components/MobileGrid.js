import styled from 'styled-components'
import ArticleCard from './ArticleCard'
import Rectangle from '../images/pinkrectangle.png'
import MobileBack from '../images/MobileBackground.png'
export const gold = '#9D7305';
export const pink = '#F8D6CB';

const PinkBox = styled.div`
  width: 100%;
  height: 40px;
  background-color: ${pink};
  z-index: 999;
  position: relative;
`;


const RectangleImage = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1; /* Set z-index to a lower value */
`;


const RectangleContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    overflow:visible;
    width:100%
    z-index: 1;
    margin-bottom: 25px;
`;

const TitleText = styled.p`
    font-family: porter;
    font-size: 2.9rem;
    color: ${gold};
    margin: 0;
    padding: 2rem;
    z-index:1;
`

const CardContainer = styled.div`
    width: 100%;
    height: 110vh;
    position: relative;
    background-image: url(${MobileBack});
    background-size: cover;
    display: flex; // Enables flexbox layout
    justify-content: center;
    align-items: center;
    margin-top: -168px;
    // padding-top: 15px; // Push content 10 pixels down from center
    overflow: hidden;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 2rem; // Fixed grid-gap to positive value
    position: relative;
    overflow: visible;
    width: 100%; // Corrected syntax from = to :
    margin-bottom: 100px;
`;



function MobileGrid(props) {
    return (
        <>
        <PinkBox />
        <RectangleContainer>
                <RectangleImage src={Rectangle} />
                <TitleText>Articles</TitleText>
        </RectangleContainer>
        
        <GridContainer>
                {props && props.articles ? props.articles.map((item) => {
                    return (
                        <CardContainer>
                            <ArticleCard margin-top="20px" article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} article_description={item.article_description} />
                        </CardContainer>
                    );
                })
                    : null}
            </GridContainer>

            </>
            
    )
}

export default MobileGrid;