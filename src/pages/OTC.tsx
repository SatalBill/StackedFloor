import React from 'react'
import Container from '@material-ui/core/Container';
// import styled from 'styled-components'
import BuccaneerHeader from '../components/Home/BuccaneerHeader'
// import { colors } from "../styles";
// import OTC from '../components/OTC/OTC';
import CoinBtnGroup from '../components/OTC/CoinBtnGroup';
import Description from '../components/OTC/Description';
import PurchaseCard from '../components/OTC/PurchaseCard';

interface Props {
    connect: () => void;
    setIsHide: (e: any) => void;
    killSession: () => void;
    isHide: boolean;
    connected: boolean;
    address: string;
    chainId: number;
}

// const WholeCard = styled.div`
//     width: 100%;
//     border: 1px solid rgba(${colors.border});
//     padding: 1em 0;
//     border-radius: 2em;
//     background-color: rgba(0, 0, 0, 0.6);
// `

const OTCScreen = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <BuccaneerHeader
                connect={props.connect}
                isHide={props.isHide}
                setIsHide={(e: any) => props.setIsHide(e)}
                connected={props.connected}
                address={props.address}
                chainId={props.chainId}
                killSession={props.killSession}
            />
            {/* <OTC /> */}
            {/* <WholeCard> */}
            <CoinBtnGroup />
            <Description />
            <PurchaseCard />
            {/* </WholeCard> */}
        </Container>
    )
}

export default OTCScreen
