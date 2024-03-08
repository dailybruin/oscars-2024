import styled from 'styled-components';
import { mediaQueries } from '../shared/config';



const OuterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    z-index: 5;
    ${mediaQueries.mobile}{
        display: block;
        width: 100%;
    }
`

const Container = styled.div` 
    padding-right: 10px;
    padding-bottom: 10px;
    width: 205px;
    height: 164px;
    border-radius: 20px;
    border: 15px solid #E8C467;
    background-color: white;
    margin-left: 151px;
    ${mediaQueries.mobile}{
        margin: auto;
        width: 180px;
        height: 150px;
    }
`
const Photo = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: 10px solid #FFE6A5;
    margin-top: -3px;
    margin-left: -3px;
    object-fit: cover;
    ${mediaQueries.mobile}{
        margin: auto;
        margin-bottom: 10px;
        width: 100%;
        height: 100%;
        margin-left: -5px;
        margin-top: -5px;
    }
`


const Text = styled.div`
    text-align: left;
    margin-left: 70px;
    ${mediaQueries.mobile}{
       margin: auto;
       text-align: center;    }
`

const Blurb = styled.div`
    font-size: 24px;
    font-weight: 400;
    font-family: Sarala;
    color: #9E7D6C;
    ${mediaQueries.mobile}{
        font-size: 18px; 
`

const Title = styled.div`
    font-size: 36px;
    font-weight: 700;
    font-style: bold;
    color: #9E7D6C;
    font-family: Sarala;
    ${mediaQueries.mobile}{
       font-size: 18px;
     }
`
const Byline = styled.div`
    font-family: Vibur;
    font-weight: 400;
    font-size: 36px;
    color: #9E7D6C;
    ${mediaQueries.mobile}{
        font-size: 18px;
    }
`

const RelatedCard = (props) => 
{
    return(
        <>
        <a href={props.article_url} style={{ textDecoration: 'none', color: 'white' }}>
        <OuterContainer>
            <Container>
                <Photo src={props.article_image}></Photo>
            </Container>
            <Text>
                    <Title> {props.article_title}</Title>
                    <Blurb> {props.article_description}</Blurb>
                    <Byline> By {props.article_byline}</Byline>
            </Text>
        </OuterContainer>
        </a>
        </>
    )
}

export default RelatedCard;