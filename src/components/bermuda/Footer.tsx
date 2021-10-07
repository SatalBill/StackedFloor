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
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background: linear-gradient(253.59deg, rgba(${colors.bottomDark}) 1.89%, rgba(${colors.bottomLight}) 99.63%);
    @media (min-width: 880px) {
        margin-top: 6em;
    }
`
const FooterLogoArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const LogoImage = styled.img`
    width: 150px;
    height: 150px;
    margin-right: 1em;
    @media (max-width: 420px) {
        width: 80px;
        height: 80px;
        margin-bottom: 1em;
    }
`
const LogoTitle = styled.p`
    color: white;
    font-size: 22px;
    font-weight: 700;
`
const MenuTitle = styled.p`
    color: white;
    font-size: 13px;
    font-weight: 400;
    margin: 1em 3em;
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
