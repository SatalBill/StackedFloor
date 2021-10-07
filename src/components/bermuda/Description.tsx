import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

`;

const BalanceText = styled.p`
  color: rgb(${colors.grey});
  font-size: ${fonts.size.h6};
  font-weight: ${fonts.weight.normal};
  margin: 40px auto;
  text-align: center;
`;


const Description = () => (
  <SBannerWrapper>
    <BalanceText>Fees are a flat $40 calculated in BV3e</BalanceText>
  </SBannerWrapper>
);

export default Description;
