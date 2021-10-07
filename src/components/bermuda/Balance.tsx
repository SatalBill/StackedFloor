import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const BalanceText = styled.p`
  color: rgb(${colors.white});
  font-size: ${fonts.size.h3};
  font-family: "NexaDemo-Bold";
  margin: 0 0.3em;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: ${fonts.size.h5};
  }
`;
const BalanceValue = styled.p`
  color: rgb(${colors.white});
  font-size: ${fonts.size.h3};
  font-family: "NexaDemo-Bold";
  margin: 0 0.3em;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: ${fonts.size.h5};
  }
`;

const Balance = () => (
  <SBannerWrapper>
    <BalanceText>{'Balance: '}</BalanceText>
    <BalanceValue>{' 3523.05452 '}</BalanceValue>
  </SBannerWrapper>
);

export default Balance;
