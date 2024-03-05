import styled from 'styled-components'

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
    padding: 1rem 11rem 5rem 8rem;
    position: relative;
    overflow: visible;
    
`;



const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    height: 80vh;
    position: relative;
    background-image: url(${MobileBack});
    background-size: cover;
    background-position: center bottom -80%;
    align-items: center;
    justify-content: center;
    aspect-ratio: 6.75 / 1;

`;

const InnerBox = styled.div`
position: absolute;
top: 35%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
width: 80%; /* Adjust the width percentage as needed */
height: 60%; /* Adjust the height percentage as needed */
`;

const TitleText = styled.p`
    font-family: porter;
    font-size: 2.9rem;
    color: ${gold};
    margin: 0;
    padding: 2rem;
    z-index:1;
`


function MobileGrid(props) {
    let cards = null 
    if (props.cards) {
        cards = props.cards.map((card, index) => (
            <CardContainer>
                <InnerBox></InnerBox>
                {/* Your content here */}
            </CardContainer>
        ));
    }

    return (
        <Container>
            <Container>
                <RectangleContainer>
                    <RectangleImage src={Rectangle} />
                    <TitleText>Articles</TitleText>
                </RectangleContainer>
            </Container>          
            <CardContainer>
                {cards}
            </CardContainer>
        </Container>
    )
}


export default MobileGrid;