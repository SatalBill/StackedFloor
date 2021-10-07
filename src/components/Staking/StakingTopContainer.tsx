import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import StakingBannerContent from './StakingBannerContent'

interface Props {
    isHide: boolean;
}
interface ContainerProps {
    isHide: boolean
}

const BannerContainer = styled.div<ContainerProps>`
    width: 100%;
    background: transparent;
`


const StakingTopContainer: React.FC<Props> = ({ isHide }) => {
    return (
        <BannerContainer isHide={isHide}>
            <StakingBannerContent />
        </BannerContainer>
    )
}

export default StakingTopContainer
