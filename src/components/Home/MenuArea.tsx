import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';
import Header from "../Header";
import { useHistory } from 'react-router-dom'
import { colors } from '../../styles'
import twitter from '../../assets/images/twitter.png'
import line from '../../assets/images/line.png'
import discord from '../../assets/images/discord.png'

interface MenuAreaProps {
    displayMenu: boolean;
    connected: boolean,
    address: string,
    chainId: number,
    killSession: () => void,
    openModal: () => void,
}

interface MenuContainerProps {
    status: boolean;
}
interface MenuItemProps {
    isActive: string;
    current: string;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    @media (max-width: 960px) {
        flex-direction: column;
        transform: translateY(${props => props.status ? '-100%' : '40%'});
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
    }
`
const MmenuItem = styled.li<MenuItemProps>`
    color: rgb(${colors.fontColor});
    font-size: 20px;
    font-family: "TisaSansPro-Medium";
    margin: 0 1em;
    text-shadow: ${props =>
        props.current === props.isActive
            ? '1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue'
            : 'none'
    };

    @media (max-width: 1100px) {
        margin: 0 0.3em;
    }
    @media (max-width: 960px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue;
    }
`
const SocialIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0.5em;
    &:hover {
        cursor: pointer;
    }
`
const MmenuItem1 = styled.li`
    color: rgb(${colors.black});
    font-size: 16px;
    font-weight: 400;
    background: rgb(${colors.white});
    margin: 0 1em;
    padding: 12px 20px;
    border-radius: 5px;
    font-family: Karla;
    @media (max-width: 1000px) {
        margin: 0 0.3em;
    }
    @media (max-width: 880px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({
    killSession,
    openModal,
    displayMenu,
    connected,
    address,
    chainId,
}) => {
    const [isActive, setIsActive] = useState("")
    const location = useLocation();
    useEffect(() => {
        setIsActive(location.pathname)
    }, [location.pathname])

    let history = useHistory()
    const navigateTo = (targetPath: string) => {
        history.push(`/${targetPath}`)
    }
    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem onClick={() => navigateTo("")} isActive={isActive} current="/">Mint</MmenuItem>
            <MmenuItem onClick={() => navigateTo("staking")} isActive={isActive} current="/staking">Staking</MmenuItem>
            {/* {
                connected &&
                <Header
                    connected={connected}
                    address={address}
                    chainId={chainId}
                    killSession={killSession}
                />
            } */}
            {/* {!displayMenu &&
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <SocialIcon src={twitter} />
                    <SocialIcon src={telegram} />
                    <SocialIcon src={wallet} onClick={openModal} />
                </div>} */}
            {!displayMenu &&
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <SocialIcon src={line} />
                    <SocialIcon src={twitter} />
                    <SocialIcon src={discord} />
                    {/* <MmenuItem1 onClick={connectMetaMask}>{accountID}</MmenuItem1> */}
                </div>}
        </MenuContainer>
    )
}

export default MenuArea
