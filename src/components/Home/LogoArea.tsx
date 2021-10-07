import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'
import { colors } from '../../styles'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LogoTitle = styled.h3`
    font-weight: 700;
    color: rgb(${colors.fontColor});
    font-size: 25px;
    margin: 0 0.5em;
    font-family: Utopia Std;
    font-weight: 400;
`

const imgStyle = {
    width: 52,
    height: 52
}

function LogoArea() {
    return (
        <LogoContainer>
            {/* <img src={logo} style={imgStyle} alt="logo" /> */}
            <LogoTitle>StackedFloor</LogoTitle>
        </LogoContainer>
    )
}

export default LogoArea
