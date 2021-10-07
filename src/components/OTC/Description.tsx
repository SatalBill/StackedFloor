import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";

const SBannerWrapper = styled.div`
  align-items: center;
  position: relative;
`;

const BalanceText = styled.p`
  color: rgb(${colors.white});
  font-size: ${fonts.size.h6};
  font-family: "NexaTextDemo-Light";
  margin: 10px auto;
  text-align: center;
`;

const BalanceValue = styled.label`
  color: rgb(${colors.white});
  font-size: ${fonts.size.h6};
  font-family: "NexaTextDemo-Bold";
  margin: 10px auto;
  text-align: center;
`;


const Description = () => (
  <SBannerWrapper>
    <BalanceText>Current OTC Price: <BalanceValue>$100</BalanceValue></BalanceText>
    <BalanceText>Supply left: <BalanceValue>18,000</BalanceValue></BalanceText>
  </SBannerWrapper>
);

export default Description;
