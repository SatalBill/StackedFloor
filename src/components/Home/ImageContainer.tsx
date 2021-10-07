import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'

interface Props {
    url: string;
}

const useStyles = makeStyles((theme) => ({
    rootCont: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    RightRootCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Container = styled.div`
    width: 90%;
    margin: 0 auto 4em auto;
`
const Description = styled.p`
    color: white;
    font-size: 18px;
    font-family: "NexaTextDemo-Light"
`
const Title = styled.p`
    color: white;
    font-size: 2em;
`
const ContainerImg = styled.img`
    max-width: 420px;
    max-height: 420px;
    width: 100%;
    background-size: cover;
`
const OutlineButton = styled.button`
    max-width: 272px;
    font-size: 20px;
    font-family: "NexaTextDemo-Light";
    width: 100%;
    height: 54px;
    border-radius: 20px;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.fontColor});
    background: transparent;
    // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
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
`

const ImageContainer: React.FC<Props> = ({ url }) => {
    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={4} className={url.includes("cubic") ? classes.RightRootCont : classes.rootCont}>
                <Grid item xs={12} md={7} className={classes.textCont}>
                    <Title style={{ width: '100%' }}>Lorem ipsum</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis in risus vitae rhoncus. Sed eu orci nec ligula ullamcorper porttitor eget ut metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lacinia elit lectus, nec auctor ipsum efficitur in. Donec vestibulum diam congue, tempor nibh eu, auctor dui.
                    </Description>
                    <Description>
                        Duis sapien ex, porta sed eleifend a, mollis dictum mauris. Morbi vehicula gravida magna non commodo.
                    </Description>
                    {!url.includes("chain") && <OutlineButton>Lorem ipsum</OutlineButton>}
                </Grid>
                <Grid item xs={12} md={5} className={classes.imgCont}>
                    <ContainerImg src={url} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ImageContainer;