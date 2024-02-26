import styled from 'styled-components'

import DesktopGridBG from '../images/DesktopGridBG.png'
import ArticleSparkles from '../images/ArticleSparkles.png'
import DesktopBGtop from '../images/DesktopBGtop.png'
import DesktopBGmid from '../images/DesktopBGmid.png'
import DesktopBGbot from '../images/DesktopBGbot.png'

export const gold = '#9D7305';

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    background: #F8D6CB;
    z-index: 2;
`

const GridTopBottom = styled.img`
    display: block;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
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

const GridBG = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const CardContainer = styled.div`
    aspect-ratio: 6.75 / 1;
`;

const TitleText = styled.p`
    font-family: porter;
    font-size: 6rem;
    color: ${gold};
    margin: 0;
    padding: 2rem;
`

const SparklesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 1;
`;

const Sparkles = styled.div`
    width: 90%;
    height: 100%;
    display: inline-block;
    z-index: 1;
    background: url(${ArticleSparkles});
    background-repeat: repeat-y;
    background-size: contain;
`

function DesktopGrid(props) {
    return (
        <Container>
            <GridTopBottom src={DesktopBGtop} />
            <Container>
                <GridBG src={DesktopBGmid} />
                <TitleText>Articles</TitleText>
                <SparklesContainer><Sparkles /></SparklesContainer>
                <GridContainer>
                    {props.cards.map((card, index) => (
                        <CardContainer key={index}>{card}</CardContainer>
                    ))}
                </GridContainer>
            </Container>
            <GridTopBottom src={DesktopBGbot} />
        </Container>
    )
}

export default DesktopGrid;