import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";
import InputCard from "./InputCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 6em;
  @media (max-width: 960px) {
    padding: 0 3em;
  }
  @media (max-width: 720px) {
    padding: 0 1em;
  }
`;

const CardTitle = styled.h5`
  color: rgb(${colors.white}); 
  font-weight: ${fonts.weight.medium};
  font-size: ${fonts.size.h6};
  margin: 30px 20px;
`;

const InputTitle = styled.h5`
  color: rgb(${colors.white}); 
  font-weight: ${fonts.weight.normal};
  font-family: "NexaDemo-Light";
  font-size: ${fonts.size.h6};
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 1em;
  }
`;

const TimerNumber = styled.h5`
  color: rgb(${colors.white}); 
  font-weight: ${fonts.weight.normal};
  font-size: ${fonts.size.h6};
  font-family: "Inter-Regular";
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 1em;
  }
`;

const UnderLineTextField = styled.input`
  width: 90%;
  margin: 0 auto;
  color: rgb(${colors.white});
  font-size: ${fonts.size.h5};
  font-weight: ${fonts.weight.normal};
  font-family: "NexaDemo-Light";
  margin-top: 8px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid rgb(${colors.white});
`;

const OutlineButton = styled.button`
  max-width: 272px;
  width: 100%;
  font-size: 20px;
  font-family: "NexaDemo-Light";
  height: 54px;
  border-radius: 20px;
  border: 1px solid rgb(${colors.fontColor});
  color: rgb(${colors.fontColor});
  // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
  background: transparent;
  margin: 1em 0;
  transition: all 0.2s ease-out;
  
  @media (max-width: 550px) {
    width: 90%;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(${colors.border});
    cursor: pointer;
    color: rgb(${colors.main});
    background: rgb(${colors.fontColor});
  }
`;

const useStyles = makeStyles((theme) => ({
  privateInput: {
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      marginBottom: -5,
    },
  },
}));

const SendAndSell = () => {

  const classes = useStyles();
  const [minutes, setMinutes] = useState(59);
  const [showDot, setShowDot] = useState(true)

  useEffect(() => {
    if (minutes > 0) {
      setTimeout(() => setMinutes(minutes - 1), 60000);
      setTimeout(() => setShowDot(!showDot), 500);
    } else {
      setMinutes(0);
    }
  }, [minutes, showDot])

  return (
    <SBannerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
          <InputCard>
            <CardTitle>{'Private Send'}</CardTitle>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={3}>
                <InputTitle>{'Amount:'}</InputTitle>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <UnderLineTextField placeholder="0.00"></UnderLineTextField>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={4} md={3}>
                <InputTitle>{'Address / Pin:'}</InputTitle>
              </Grid>
              <Grid item xs={12} sm={8} md={9}>
                <UnderLineTextField placeholder="0x000000000000"></UnderLineTextField>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6}>
                <OutlineButton>Gasless Transaction</OutlineButton>
              </Grid>
              <Grid item xs={6} md={6}>
                <OutlineButton>Standard Transaction</OutlineButton>
              </Grid>
            </Grid>
          </InputCard>
        </Grid>
        <Grid item xs={12} md={5}>
          <InputCard>
            <CardTitle>{'Acquire ETH'}</CardTitle>
            <Grid container spacing={1} className={classes.privateInput}>
              <Grid item xs={12} sm={4}>
                <InputTitle>{'Amount:'}</InputTitle>
              </Grid>
              <Grid item xs={12} sm={8}>
                <UnderLineTextField placeholder="0.00"></UnderLineTextField>
              </Grid>

              <Grid item xs={12} sm={4}>
                <InputTitle>{'Private Window:'}</InputTitle>
              </Grid>
              <Grid item xs={12} sm={8}>
                <TimerNumber>{showDot ? `00:` : `00 `}{minutes.toString().padStart(2, '0')}</TimerNumber>
              </Grid>
            </Grid>
            <OutlineButton>Acquire ETH</OutlineButton>
          </InputCard>
        </Grid>
      </Grid>
    </SBannerWrapper>
  );
};

export default SendAndSell;
