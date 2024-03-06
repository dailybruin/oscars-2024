import styled from "styled-components";
import blurb from "../images/blurb.png";
import blurbMobile from "../images/blurbMobile.png";
import oscar from "../images/oscar.png";
import { mediaQueries } from "../shared/config";
import { isMobile } from 'react-device-detect';


const ImageContainer = styled.div`
position: relative;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  overflow: hidden;
  ${mediaQueries.mobile} {
  }
`;

const BlurbContainer = styled.div`
  position: relative;
  // top: -85px;
  ${mediaQueries.mobile} {
    top: -40px;
    font-size: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

const OverlayOscarImage = styled.img`
  position: absolute;
  height: 63%;
  top: 2%;
  left: 8%;
  ${mediaQueries.mobile} {
    height: 40%;
    top: 45%;
    left: 35%;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 17%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Sarala", sans-serif;
  color: #9e7d6c;
  font-size: 1.5vw;
  ${mediaQueries.mobile} {
    top: 25%;
    font-size: 14px;
    width: 80%;
  }
`;

const Blurb = (props) => {
  if(!isMobile){
  return (
    <ImageContainer>
      <BlurbContainer>
        <Image src={blurb} />
        <OverlayOscarImage src={oscar} />
        <OverlayText>{props.blurb_text}</OverlayText>
      </BlurbContainer>
    </ImageContainer>
  );
  }
  else{
    return (
      <ImageContainer>
        <BlurbContainer>
          <Image src={blurbMobile} />
          <OverlayOscarImage src={oscar} />
          <OverlayText>{props.blurb_text}</OverlayText>
        </BlurbContainer>
      </ImageContainer>
    );
  }
};

export default Blurb;
