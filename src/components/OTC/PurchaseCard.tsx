import * as React from "react";
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputCard from "./InputCard";
import { colors, fonts } from "../../styles";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2em auto;
  position: relative;
  padding: 0 6em;
  @media (max-width: 960px) {
    padding: 0 3em;
  }
  @media (max-width: 720px) {
    padding: 0 1em;
  }
`;

const InputTitle = styled.h5`
  color: rgb(${colors.white}); 
  font-family: "NexaDemo-Light";
  font-size: ${fonts.size.h6};
  @media (max-width: 960px) {
    text-align: left;
    margin-left: 1em;
  }
`;

const InputValue = styled.h5`
  color: rgb(${colors.white}); 
  font-family: "NexaDemo-Light";
  font-size: ${fonts.size.h6};
  margin-right: 0.3em;
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
  border: 0;
  outline: 0;
  font-family: "NexaDemo-Light";
  background: transparent;
  padding-top: 10px;
  border-bottom: 1px solid rgb(${colors.white});
`;

const OutlineButton = styled.button`
  width: 50%;
  height: 54px;
  border-radius: 20px;
  border: 1px solid rgb(${colors.fontColor});
  color: rgb(${colors.fontColor});
  font-family: "NexaDemo-Light";
  font-size: 20px;
  // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
  background: transparent;
  margin: 1em 0;
  transition: all 0.2s ease-out;

  @media (max-width: 550px) {
      width: 90%;
  }
  &:hover {
    cursor: pointer;
    color: rgb(${colors.main});
    background: rgb(${colors.fontColor});
    box-shadow: 0 4px 8px 0 rgba(${colors.border});
  }
`;

const useStyles = makeStyles((theme) => ({
  privateInput: {
    marginBottom: 0,
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    },
  },
  amountArea: {
    display: 'flex',
    flexDirection: 'row'
  }
}));

const PurchaseCard = () => {

  const classes = useStyles();

  return (
    <SBannerWrapper>
      <InputCard>
        <Grid container spacing={1} className={classes.privateInput}>
          <Grid item xs={12} sm={4}>
            <InputTitle>{'Amount:'}</InputTitle>
          </Grid>
          <Grid item xs={12} sm={8}>
            <UnderLineTextField placeholder="34.56978"></UnderLineTextField>
          </Grid>
        </Grid>
        <Grid container spacing={1} className={classes.privateInput}>
          <Grid item xs={12} sm={4}>
            <InputTitle>{'Cost:'}</InputTitle>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.amountArea}>
            <InputValue>{'10432 '}</InputValue>
            <InputTitle>{' USDT'}</InputTitle>
          </Grid>
        </Grid>
        <OutlineButton>Purchase</OutlineButton>
      </InputCard>
    </SBannerWrapper>
  );
};

export default PurchaseCard;
