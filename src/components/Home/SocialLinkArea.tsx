import React from 'react'
import styled from 'styled-components'
import Header from "../Header";
import twitter from '../../assets/images/twitter.png'
import telegram from '../../assets/images/telegram.png'
import line from '../../assets/images/line.png'
import discord from '../../assets/images/discord.png'
import wallet from '../../assets/images/wallet.png'

interface SocialAreaProps {
    openModal: () => void
    connected: boolean
    address: string,
    chainId: number,
    killSession: () => void,
}
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2em;
    @media (max-width: 960px) {
        display: none;
    }
`

const SocialIcon = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 1em;
    background-size: contain;
    &:hover {
        cursor: pointer;
    }
`
const WalletConnectButton = styled.div`
    width: 110px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 1.5em;
    p {
        color: #212941;
        font-size: 16px;
        transform: translateY(-1px);
    }
    p:hover {
        opacity: 0.85;
    }
`

const SocialLinkArea: React.FC<SocialAreaProps> = ({
    openModal,
    connected,
    address,
    chainId,
    killSession
}) => {
    return (
        <SocialContainer>
            <SocialIcon src={line} />
            <SocialIcon src={twitter} />
            <SocialIcon src={discord} />
            {
                connected &&
                <Header
                    connected={connected}
                    address={address}
                    chainId={chainId}
                    killSession={killSession}
                />
            }
            {!connected && <WalletConnectButton onClick={openModal}>
                <p>Connect</p>
            </WalletConnectButton>}
        </SocialContainer>
    )
}

export default SocialLinkArea
