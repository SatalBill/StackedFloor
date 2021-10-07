import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from 'styled-components'
import largeLogo from '../../assets/images/logo-large.png'
import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from '@material-ui/core/styles';
import { colors } from '../../styles'
import home from '../../assets/images/home.png'
import stack from '../../assets/images/stack.png'
import building1 from '../../assets/images/building1.png'
import building2 from '../../assets/images/building2.png'
import bottomImg from '../../assets/images/bottom.png'

// Material ui style
const useStyles = makeStyles((theme) => ({
    calcArea: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            justifyContent: 'center',
        },
    },
    inputArea: {
        padding: '1em 3em 0 3em',
        [theme.breakpoints.down('md')]: {
            padding: '1em 1em 0 1em',
        },
    },
    mainArea: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 30
    },
    desc: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

// styled-components 
const BannerImg = styled.img`
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
    min-width: 200px;
    min-height: 200px;
`
const Title = styled.p`
    font-size: 40px;
    font-weight: 600;
    color: white;
    // font-family: "gemunu-libre.bold";
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
        flex-direction: column;
        align-items: center;
    }
`
const OutlineButton = styled.button`
    max-width: 272px;
    font-size: 20px;
    font-family: "NexaTextDemo-Light";
    width: 45%;
    height: 54px;
    border-radius: 20px;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.fontColor});
    background: transparent;
    // background: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,35,64,1) 100%);
    margin: 1em 0;
    transition: all 0.2s ease-out;
    box-shadow: 0 4px 8px 0 rgba(${colors.border});

    @media (max-width: 550px) {
        width: 90%;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background: rgb(${colors.fontColor});
    }
`
const NoBorderButton = styled(OutlineButton)`
    border: none;
    background: transparent;
    box-shadow: none;
    margin-right: 2em;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(${colors.border});
    }
`
const BannerContainer = styled.div`
    width: 100%;
    height: 90vh;
    // background: linear-gradient(180deg, rgba(${colors.gradLight}) 0%, rgba(${colors.gradDark}) 100%);
    background: rgba(${colors.gradDark});
    padding: 1em 0 0 0;
    margin-top: 2em;
    @media screen and (max-width: 959px) {
        padding: 0;
        height: 100%;
    }
`
const ImageContainer = styled.div`
    width: 80%;
    display: flex;
    @media screen and (max-width: 959px) {
        width: 100%;
        justify-content: center;
        padding-bottom: 2em;
    }
`
const SubImgContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
        margin: 10px;
        width: 100%;
        max-width: 176px;
    }
`
const SubImgContainer2 = styled(SubImgContainer)`
    width: 60%;
    img:nth-child(2) {
        max-width: 270px;
    }
`
const CalArea = styled.div`
    align-items: center;
    text-align: center;
    max-width: 635px;
    width: 100%;
    padding: 40px;
    border-radius: 10px;
    background-color: rgba(${colors.subMain});
    @media (max-width: 660px) {
        padding: 20px;
    }
`
const CalContent = styled.div`
    width: 100%;
    margin: 0 auto;
    border-bottom: 2px solid #9F6FED;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    align-items:center;
`
const Calculator = styled.div`
    width: 100px;
    margin: 0 auto;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    display: flex;
`
const CalContent1 = styled.div`
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    justify-content:space-between;
    display: flex;
    align-items:center;
`
const BuyButton = styled.p`
    color: white;
    font-size: 24px;
    border-radius: 10px;
    width: 50%;
    padding: 10px;
    margin-left: 25%;
    display: flex;
    justify-content: center;
    align-self: center;
    background-color: rgb(${colors.main});
    &:hover {
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(${colors.main}), 0 6px 10px 0 rgba(${colors.main});
    }
`
const LogoTitle = styled.p`
    color: white;
    font-size: 22px;
    text-align:center;
    display: inline-block;
    @media (max-width: 660px) {
        font-size: 16px;
    }
`
const LogoTitle5 = styled.p`
    color: white;
    font-size: 14px;
    text-align:center;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`
const LogoTitle1 = styled.p`
    color: #FFFFFF;
    font-size: 22px;
    text-align:center;
    display: inline-block;
    font-weight:700;
`
const LogoTitle4 = styled.p`
    color: #FFFFFF;
    font-size: 25px;
    text-align:center;
    display: inline-block;
    font-weight:700;
    &:hover {
        cursor: pointer;
    }
`
const LogoTitle2 = styled.p`
    color: #FFFFFF;
    font-size: 48px;
    text-align:center;
    display: inline-block;
    font-weight:700;
    margin-bottom: 50px;
    margin-top: 0;
    @media (max-width: 660px) {
        font-size: 36px;
    }
`
const LogoTitle3 = styled.p`
    color: white;
    font-size: 22px;
    height:20px;
    width:50px;
    border-radius:25px;
    align-items:center;
    justify-content:center;
    text-align:center;
    display: inline-block;
    &:hover {
        cursor: pointer;
    }
`
const StackTitle = styled.p`
    color: white;
    font-size: 50px;
    text-align: center;
`
const Description = styled.p`
    color: white;
    font-size: 18px;
    text-align: center;
    margin: 0;
    padding: 0;
`
const StackImage = styled.img`
    width: 100%;
    max-width: 400px;
`
const StackInfoArea = styled.div`
    width: 100%;
    background-color: rgb(${colors.subMain});
    padding: 4.5em 0 6em 0;
`

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    }
});

const BuildingImage = styled.img`
    width: 100px;
    height: 80px;
    background-size: contain;
`
const InputLabel = styled.p`
    color: white;
    font-size: 18px;
`
const InputForm = styled.input`
    background-color: white;
    width: 100%;
    height: 48px;
    border-radius: 5px;
    padding: 1em;
    outline: none;
    border: none;
    font-size: 20px;
`
const StackFloor = styled.button`
    width: 100%;
    height: 60px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(${colors.border});
    margin: 3em 0;
    font-size: 20px;
    &:hover {
        opacity: 0.85;
        cursor: pointer;
    }
    &:active {
        transform: translateY(1px);
    }
`
const BottomImage = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 959px) {
        position: relative;
    }
`
const BottomImageArea = styled.div`
    width: 100%;
    background-image: url(/bottom.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

interface Props {
}

let totalprice = 0;

const BannerContent: React.FC<Props> = () => {
    const [contract, setContract] = useState(0);
    const [amount, setAmount] = useState(0);
    const [maxNum, setMaxNum] = useState(10);
    const [itemPrice, setItemPrice] = useState(0);
    const [ownEthValue, setOwnEthValue] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [myaccount, setMyaccount] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [limitItemNum, setLimitItemNum] = useState(0);
    const [autoNem, setAutoNum] = useState(0);
    const [accountID, setAccountId] = useState("Connect");


    const classes = useStyles();


    const getMaxValue = async () => {
        // setAmount(maxNum)
        setAmount(10)
        // totalprice = itemPrice * maxNum
        // const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
        // setTotalPrice(parseFloat(etherValue))
        setTotalPrice(10)
    }

    const buyHandler = () => {
        console.log("buyHandler")
    }

    const changeAmount = (num: number) => {
        if (num == -1) {
            if (amount <= 0) {
                setAmount(0)
            } else {
                let totalAmonut = amount + num
                setAmount(totalAmonut)
                // totalprice = itemPrice * totalAmonut
                // const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
                setTotalPrice(totalAmonut)
            }
        } else if (num == 1) {
            if (amount == maxNum) {
                setAmount(maxNum)
            } else {
                let totalAmonut: number = amount + num
                setAmount(totalAmonut)
                // totalprice = itemPrice * totalAmonut
                // const etherValue = Web3.utils.fromWei(totalprice.toString(), 'ether');
                setTotalPrice(totalAmonut)
            }
        }
    }

    return (
        <BannerContainer>
            <Container>
                <Grid container spacing={2} className={classes.mainArea}>
                    <Grid item md={1} xs={12} className={classes.desc}>
                        <BuildingImage src={building1} />
                    </Grid>
                    <Grid item md={10} xs={12} className={classes.desc}>
                        <StackTitle>STACK YOUR FLOORS</StackTitle>
                        <Description>Stack 3 Floors to earn your $RENT.</Description>
                        <Description>Won't be able to unstack later!</Description>
                    </Grid>
                    <Grid item md={1} xs={12} className={classes.desc}>
                        <BuildingImage src={building2} />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.inputArea}>
                    <Grid item md={4} xs={12}>
                        <InputLabel>Building Number #1</InputLabel>
                        <InputForm placeholder="1" />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <InputLabel>Building Number #2</InputLabel>
                        <InputForm placeholder="2" />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <InputLabel>Building Number #3</InputLabel>
                        <InputForm placeholder="3" />
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.inputArea}>
                    <Grid item md={4} xs={12}>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    <StackFloor>STACK YOUR FLOOR</StackFloor>
                    </Grid>
                    <Grid item md={4} xs={12}>
                    </Grid>
                </Grid>
                

            </Container>
            <BottomImage src={bottomImg} />
            {/* <BottomImageArea></BottomImageArea> */}
        </BannerContainer>
    )
}

export default BannerContent
