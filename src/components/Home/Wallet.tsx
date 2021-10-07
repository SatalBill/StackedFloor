import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

const WalletContainer = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 15px;
    margin: 2% 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background-color: rgba(${colors.gradDark});
    border: 1px solid rgb(${colors.border});
    &:hover {
        cursor: pointer;
        border: 1px solid rgb(${colors.fontColor});
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`
const WalletTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
    color: rgb(${colors.fontColor});
`
const WalletIcon = styled.img`
    width: 30px;
    height: 30px;
`

interface Props {
    title: string;
    iconName: string;
}

const Wallet:React.FC<Props> = ({ title, iconName }) => {
    return (
        <WalletContainer>
            <WalletTitle>{title}</WalletTitle>
            <WalletIcon src={iconName} />
        </WalletContainer>
    )
}

export default Wallet
