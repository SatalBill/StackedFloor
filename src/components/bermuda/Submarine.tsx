import * as React from "react";
import styled from "styled-components";
import { colors, fonts } from "../../styles";
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px 0 50px 0;
`;

const SubmarineText = styled.p`
  color: rgb(${colors.white}); 
  font-size: ${fonts.size.h6};
  font-family: "NexaDemo-Light";
  margin: 0 20px;
`;

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 60,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(34px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: `rgb(${colors.switchOn})`,
          opacity: 1,
        },
      },
      '&$focusVisible $thumb': {
        color: `rgb(${colors.switchOn})`,
        border: `6px solid ${colors.border}`,
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `4px solid ${colors.white}`,
      backgroundColor: colors.bottomLight,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


const Submarine = () => {

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <SBannerWrapper>
      <SubmarineText>Submarine Mode</SubmarineText>
      <IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB" />
    </SBannerWrapper>
  );
};

export default Submarine;
