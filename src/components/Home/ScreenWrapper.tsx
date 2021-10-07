import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
}

const AppContainer = styled.div`
    background-color: #7732E8;
    // background-image: radial-gradient( circle 610px at 5.2% 51.6%, rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
    // background-image: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(29,17,96,1) 100%);
    // background-image: linear-gradient(180deg, rgba(16,23,65,1) 0%, rgba(12,61,110,1) 50%, rgba(12,35,64,1) 100%);
    width: 100%;
`

const ScreenWrapper: React.FC<Props> = ({ children }) => {
    return <AppContainer>{children}</AppContainer>
}

export default ScreenWrapper
