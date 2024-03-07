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
    margin-bottom: 20vh;
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
height: 100vh;
position: relative;
background-image: url(${MobileBack});
background-size: contain; // Adjusts background size to make sure the entire image is visible
background-position: center; // Centers the background image in the container
background-repeat: no-repeat; // Prevents the background image from repeating
display: flex;
justify-content: center;
align-items: center;
margin-top: -20vh;
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
    // margin-bottom: 100px;
`;

const ArticleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; // Use column for vertical stacking if needed
  // Add additional styling here as needed, e.g., padding, margin adjustments
  margin-bottom: 0px;
`;

// const BottomFrame = styled.div`
//     width: 100%;
//     height: 110vh;
//     position: relative;
//     background-image: url(${MobileBack});
//     background-size: contain; // Adjusts background size to make sure the entire image is visible
//     background-position: center; // Centers the background image in the container
//     background-repeat: no-repeat; // Prevents the background image from repeating
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin-top: 0px;
//     overflow: hidden;
// `;


function MobileGrid(props) {
    return (
        <>
        <RectangleContainer>
                <RectangleImage src={Rectangle} />
                <TitleText>Articles</TitleText>
        </RectangleContainer>
        {/* <PinkBox /> */}
        <GridContainer>
                {props && props.articles ? props.articles.map((item) => {
                    return (
                        <CardContainer>
                            <ArticleWrapper>
                            <ArticleCard article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} article_description={item.article_description} />
                            </ArticleWrapper>
                        </CardContainer>
                    );
                })
                    : null}
            </GridContainer>
            </>
            
    )
}

export default MobileGrid;