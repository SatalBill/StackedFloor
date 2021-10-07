import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
import LogoArea from './LogoArea'
import MenuArea from './MenuArea'
import SocialLinkArea from './SocialLinkArea'
import ToggleMenuIcon from './ToggleMenuIcon'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`
interface Props {
    connect: () => void,
    setIsHide: (e: any) => void,
    isHide: boolean,
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void
}

const BuccaneerHeader: React.FC<Props> = ({
    connect,
    killSession,
    setIsHide,
    isHide,
    connected,
    address,
    chainId,
}) => {
    const [currentWidth, setCurrentWidth] = useState(0)
    useEffect(() => {
        function updateSize() {
            setCurrentWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    useEffect(() => {
        setIsHide(true)
        // eslint-disable-next-line
    }, [currentWidth]);
    return (
        <Container>
            <Wrapper>
                <LogoArea />
                <MenuArea
                    displayMenu={isHide}
                    connected={connected}
                    address={address}
                    chainId={chainId}
                    killSession={killSession}
                    openModal={connect}
                />
                <SocialLinkArea
                    openModal={connect}
                    connected={connected}
                    address={address}
                    chainId={chainId}
                    killSession={killSession}
                />
                <ToggleMenuIcon openMenu={() => setIsHide(!isHide)} />
            </Wrapper>
        </Container>
    )
}

export default BuccaneerHeader
