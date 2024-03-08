import styled from 'styled-components'

import Interactive from '../images/Interactive.png'

export const gold = '#9D7305';
export const pink = '#F8D6CB';

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    z-index: 0;
    top: -400px;
`


const BG = styled.img`
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
`;


const TitleText = styled.p`
    font-family: porter;
    font-size: 6rem;
    color: ${gold};
    margin: 0 0 10% 0;
    padding: 5rem;
    padding-top: 500px;
`


function InteractiveSection(props) {

    let vertical_offset = props.vertical_offset ? props.vertical_offset : 0;

    const twitterCode = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Cinema&#39;s biggest night is quickly approaching.<br><br>From Best Picture to Best Cinematography, 24 award categories are up for grabs at the 96th annual Academy Awards. Which film do you think will take home the most awards?</p>&mdash; Daily Bruin (@dailybruin) <a href="https://twitter.com/dailybruin/status/1765921810863026299?ref_src=twsrc%5Etfw">March 8, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;

    return (
        <Container style={{ marginTop: vertical_offset }}>
            <Container>
                <BG src={Interactive} />
                <TitleText>INTERACTIVE</TitleText>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
            <iframe
                srcDoc={twitterCode}
                width="100%"
                height="100%"
                style={{ border: "none", zIndex: 5, paddingLeft:'30%'}}
            ></iframe>
            /</div>
            </Container>
            
        </Container>
    )
}

export default InteractiveSection;