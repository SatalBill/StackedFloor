import React from 'react'
import Container from '@material-ui/core/Container';
// import styled from 'styled-components'
import BuccaneerHeader from '../components/Home/BuccaneerHeader'
import TopContainer from '../components/Home/TopContainer'
import ItemList from '../components/Home/ItemList'
import ImageContainer from '../components/Home/ImageContainer'
// import { colors } from "../styles";

import chain from '../assets/images/chain.png';
import cubic from '../assets/images/cubic.png';
import dot from '../assets/images/dot.png';

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
//     padding: 1em;
//     border-radius: 2em;
//     background-color: rgba(0, 0, 0, 0.6);
// `

const Home = (props: Props) => {
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
            {/* <WholeCard> */}
            <TopContainer isHide={props.isHide} />
            <ItemList />
            <ImageContainer url={chain} />
            <ImageContainer url={cubic} />
            <ImageContainer url={dot} />
            {/* </WholeCard> */}
        </Container>
    )
}

export default Home
