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

    return (
        <Container style={{ marginTop: vertical_offset }}>
            <Container>
                <BG src={Interactive} />
                <TitleText>INTERACTIVE</TitleText>
            </Container>
            <iframe
                src="https://x.com/dailybruin/status/1765921810863026299?s=20"
            width="80%"
            height="100%"
            style={{ border: "none", position: "relative", zIndex: 5}}  // Correct way to apply styles in JSX
        ></iframe>
        </Container>
    )
}

export default InteractiveSection;