import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'
import logo from '../../assets/images/logo-large.png'

interface Props {

}

const FooterContainer = styled.div`
    width: 100%;
    background: linear-gradient(253.59deg, rgba(${colors.bottomDark}) 1.89%, rgba(${colors.bottomLight}) 99.63%);
    margin-top: 1em;
    @media (min-width: 960px) {
        margin-top: 6em;
    }
`
const FooterLogoArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LogoImage = styled.img`
    width: 130px;
    height: 130px;
    margin-right: 2.5em;
    @media (max-width: 500px) {
        width: 80px;
        height: 80px;
        margin-bottom: 1em;
    }
`
const LogoTitle = styled.p`
    color: white;
    font-size: 52px;
    font-family: "NexaTextDemo-Bold";
    @media (max-width: 500px) {
        font-size: 28px;
    }
`
const MenuTitle = styled.p`
    color: white;
    font-size: 16px;
    font-weight: 400;
    margin: 1em 2em;
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
    @media (max-width: 768px) {
        margin: 1em 2em;
    }
`
const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '3em 4em',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
}));

const Footer = (props: Props) => {
    const classes = useStyles();
    return (
        <FooterContainer>
            <Container maxWidth="lg" className={classes.main}>
                <FooterLogoArea>
                    <LogoImage src={logo} />
                    <LogoTitle>Buccaneer V3</LogoTitle>
                </FooterLogoArea>
                <div>
                    {[0, 1, 2, 3].map(item => (
                        <div style={{ display: 'flex' }} key={item}>
                            <MenuTitle>Lorem Ipsum</MenuTitle>
                            <MenuTitle>Lorem Ipsum</MenuTitle>
                        </div>
                    ))}
                </div>
            </Container>
        </FooterContainer>
    )
}

export default Footer
