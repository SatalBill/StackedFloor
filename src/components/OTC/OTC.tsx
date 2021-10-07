import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const BermudaText = styled.p`
  color: rgb(${colors.white});
  font-size: ${fonts.size.h3};
  font-family: "TisaSansPro-Medium";
  margin: 30px 80px;
`;


const OTC = () => (
  <SBannerWrapper>
    <BermudaText>OTC</BermudaText>
  </SBannerWrapper>
);

export default OTC;
