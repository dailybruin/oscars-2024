import styled from 'styled-components'
import ArticleCard from './ArticleCard'
import Rectangle from '../images/pinkrectangle.png'
import MobileBack from '../images/MobileBackground.png'
export const gold = '#9D7305';
export const pink = '#F8D6CB';

const RectangleImage = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1; /* Set z-index to a lower value */
`;


const Container = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 1;
`

const RectangleContainer = styled.div`

    position: relative;
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    overflow:visible;
    width:100%
    z-index:-2;
`;



const MobCont = styled.img`
    display: block;
    left: 0;
    width: 100%;
    height: auto;
    z-index: ${props => props.zIndex}; /* Set z-index dynamically */
    margin: 0;
    padding: 0;
`;
const MobCont2 = styled.img`
    display: block;
    left: 0;
    width: 100%;
    height: auto;
    z-index: ; /* Set z-index dynamically */
    margin: 0;
    padding: 0;
`;
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 2rem;
    position: relative;
    overflow: visible;
    width = 100%;
`;


const InnerBox = styled.div`
position: absolute;
top: 35%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
width: 80%; /* Adjust the width percentage as needed */
height: 60%; /* Adjust the height percentage as needed */
overflow:hidden;
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
    height: auto:
    position: relative;
    background-image: url(${MobileBack});
    background-size: cover;
    justify-content: center;
    align-items: center;
`;


function MobileGrid(props) {
    return (

        <GridContainer>
        {props && props.articles ? props.articles.map((item) => {
            return(
                <CardContainer> 
                 <div > </div><div > </div><div > </div>
                 <ArticleCard article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} article_description={item.article_description} />
                 <div > </div>
                </CardContainer>
            );
        })
        : null}
       </GridContainer>
    )
}
//     if (props.cards) {
//         cards = props.cards.map((card, index) => (
//             <CardContainer backgroundPosition={index === 0 ? 'center bottom -85%' : 'center center'}>
//                 <InnerBox>
//                     <Card>article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image}</Card>
//                 </InnerBox>
//             </CardContainer>
//         ));
//     } else {
//         // Example of adding a single Card directly if no props.cards are provided
//         cards = (
//             <CardContainer backgroundPosition='center center'>
//                 <InnerBox>
//                     <Card>Example Card Content</Card>
//                 </InnerBox>
//             </CardContainer>
//         );
//     }

//     return (
//         <Container>
//             <RectangleContainer>
//                 <RectangleImage src={Rectangle} />
//                 <TitleText>Articles</TitleText>
//             </RectangleContainer>          
//             {cards}
//         </Container>
//     );
// }

export default MobileGrid;