import styled from 'styled-components'

import DesktopGridBG from '../images/DesktopGridBG.png'
import CoverageSparkles from '../images/CoverageSparkles.png'
import DesktopBGtop from '../images/DesktopBGtop.png'
import DesktopBGmid from '../images/DesktopBGmid.png'
import DesktopBGbot from '../images/DesktopBGbot.png'
import RelatedCard from './Related_Card'
import { mediaQueries } from '../shared/config';


export const gold = '#9D7305';
export const pink = '#F8D6CB';

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 1;
    top: 300px;
    display: block;
    margin-bottom: 37rem;
    
`

const GridTopBottom = styled.img`
    display: block;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    margin: 0;
    padding: 0;
    top: 300px;
    position: relative;
    ${mediaQueries.mobile}{
        opacity: 0;
    }

`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-gap: 2rem;
    padding-left: 1rem;
    padding-right: 10rem;
    padding-bottom: 5rem;
    margin-bottom: 37rem;
    ${mediaQueries.mobile}{
        margin-left: auto;
        margin-right: auto;
        padding-left: 4rem;
        padding-right: 4rem;
    }
    position: relative;
    overflow: visible;
`;

const GridBG = styled.img`
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    ${mediaQueries.mobile}{
        opacity: 0;
    }
`;

const CardContainer = styled.div`
    aspect-ratio: 6 / 1;
    z-index: 5;
`;

const TitleText = styled.p`
    font-family: porter;
    font-size: 6rem;
    color: ${gold};
    margin: 0 0 10% 0;
    padding: 5rem;
    ${mediaQueries.mobile}{
        font-family: porter;
        font-size: 2rem;
        color: ${gold};
        margin: 0;
        padding: 2rem;
        z-index:1;
    }

`

const SparklesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 1;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Sparkles = styled.div`
    width: 90%;
    height: 100%;
    z-index: 1;
    background: url(${CoverageSparkles});
    background-repeat: repeat-y;
    background-size: contain;
`

function CoverageGrid(props) {

    let vertical_offset = props.vertical_offset ? props.vertical_offset : 0;

    return (
        <Container style={{ marginTop: vertical_offset }}>
            <GridTopBottom src={DesktopBGtop} />
            <Container>
                <GridBG src={DesktopBGmid} />
                <TitleText>RELATED COVERAGE</TitleText>
                <SparklesContainer><Sparkles /></SparklesContainer>
                <GridContainer>
                {props && props.articles ? props.articles.map((item) => {
                    return(
                        <CardContainer>
                        <RelatedCard article_title={item.article_title} article_url={item.article_url} article_byline={item.article_byline} article_image={item.article_image} article_description={item.article_description} />
                        </CardContainer>
                    );
                })
                : null}
                
                </GridContainer>
            </Container>
        </Container>
    )
}

export default CoverageGrid;