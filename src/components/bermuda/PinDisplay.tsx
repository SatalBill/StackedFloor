import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";
import IconButton from '@material-ui/core/IconButton';
import leftArrow from '../../assets/images/leftArrow.png'

const SBannerWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    position: relative;
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 30px;
    padding: 0 6em;
`;

const RevealPin = styled.p`
    color: rgb(${colors.white}); 
    font-size: ${fonts.size.h6};
    font-weight: ${fonts.weight.normal};
    margin: 0 10px;
`;

const LongNumberBox = styled.div`
    text-align: center;
    width: 100%;
    padding: 0 0.5em;
    overflow: auto;
    background: linear-gradient(253.59deg, rgba(21, 32, 87, 0.5) 1.89%, rgba(53, 61, 104, 0.5) 99.63%);
    border-radius: 5px;
    border: 1px solid rgba(${colors.border});
    backdrop-filter: blur(4px);
    &::-webkit-scrollbar {
        height: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: #0004;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0007;
        border-radius: 5px;
    }
`
const PinNumber = styled.p`
    font-size: ${fonts.size.h6};
    font-family: "NexaTextDemo-Light";
    margin: 0.4em;
    color: white;
`
const IconWrapper = styled.div`
    width: 40px;
    height: 40px;
    &:hover {
        cursor: pointer;
    }
`
const ArrowImage = styled.img<ImageProps>`
    width: 11px;
    height: 20px;
    transform: rotate(${props => props.direction === true ? '90deg' : '270deg'}); 
    &:hover {
        cursor: pointer;
    }
`
// const ArrowImage= styled(({ ...props }) => <img {...props} />)`
//     width: 11px;
//     height: 20px;
//     transform: rotate(${props => props.direction === true ? '90deg' : '270deg'}); 
//     &:hover {
//         cursor: pointer;
//     }
// `
const HorizontalDiv = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
interface ImageProps {
    direction: boolean;
}

const PinDisplay = () => {
    const [showBox, setShowBox] = React.useState(false)
    const showLongNumber = () => setShowBox(!showBox)
    return (
        <SBannerWrapper>
            <HorizontalDiv>
                <RevealPin>Reveal Pin</RevealPin>
                <IconWrapper>
                    <IconButton aria-label="show" size="medium" color="primary" onClick={showLongNumber}>
                        <ArrowImage src={leftArrow} direction={!showBox} />
                    </IconButton>
                </IconWrapper>
            </HorizontalDiv>
            <LongNumberBox style={{ display: showBox ? 'block' : 'none' }}>
                <PinNumber>{(Math.random().toFixed(40)).toString().substr(2)}</PinNumber>
            </LongNumberBox>
        </SBannerWrapper>
    );
};

export default PinDisplay;
