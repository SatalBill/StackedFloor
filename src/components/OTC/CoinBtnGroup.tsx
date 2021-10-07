import * as React from "react";
import styled from "styled-components";
import { colors } from "../../styles";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0 50px 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const EthereumButton = styled.button`
  max-width: 180px;
  width: 100%;
  height: 66px;
  font-family: "NexaDemo-Bold";
  border-radius: 25px;
  // border: 2px solid rgb(${colors.fontColor});
  border: 2px solid #85899E;
  color: rgb(${colors.fontColor});
  background: linear-gradient(253.59deg, rgba(${colors.gradDark}) 1.89%, rgba(${colors.gradLight}) 99.63%);
  // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
  margin: 1em 2em;
  transition: all 0.2s ease-out;
  font-size: 20px;
  

  @media (max-width: 550px) {
      width: 90%;
  }
  @media (max-width: 700px) {
    max-width: 380px;
  }
  &:hover {
    cursor: pointer;
    color: rgb(${colors.main});
    background: rgb(${colors.fontColor});
    box-shadow: 0 4px 8px 0 rgba(${colors.border});
  }
`;
const BinanceButton = styled(EthereumButton)`
  max-width: 380px;
  border: 2px solid rgb(${colors.border});
`
const CoinBtnGroup = () => {

  return (
    <SBannerWrapper>
      <EthereumButton>Ethereum</EthereumButton>
      <BinanceButton>Binance Smart Chain (BSC)</BinanceButton>
    </SBannerWrapper>
  );
};

export default CoinBtnGroup;
