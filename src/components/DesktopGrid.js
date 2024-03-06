import styled from 'styled-components'

import DesktopGridBG from '../images/DesktopGridBG.png'
import ArticleSparkles from '../images/ArticleSparkles.png'
import DesktopBGtop from '../images/DesktopBGtop.png'
import DesktopBGmid from '../images/DesktopBGmid.png'
import DesktopBGbot from '../images/DesktopBGbot.png'
import ArticleCard from './ArticleCard'

export const gold = '#9D7305';
export const pink = '#F8D6CB';

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 1;
    top: -300px; /* Adjust this value to move the component up */
`

const GridTopBottom = styled.img`
    display: block;
    left: 0;
    width: 100%;
    height: auto;
    z-index: -1;
    margin: 0;
    padding: 0;
    position: relative;
    top: -300px;
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
    console.log("DESKTOP PROPS", props.articles)

    return (
        <Container>
            <GridTopBottom src={DesktopBGtop} />
            <Container>
                <GridBG src={DesktopBGmid} />
                <TitleText>Articles</TitleText>
                <SparklesContainer><Sparkles /></SparklesContainer>
                <GridContainer>
                {props && props.articles ? props.articles.map((item) => {
                    console.log(item.article_url)
                    return(
                        <ArticleCard article_title={item.article_title} article_url="{item.article_url}" article_byline={item.article_byline} article_image={item.article_image} article_description={item.article_description} />
                    );
                })
                : null}
                </GridContainer>
            </Container>
            <GridTopBottom src={DesktopBGbot} />
        </Container>
    )
}

export default DesktopGrid;
