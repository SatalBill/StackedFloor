import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import BannerContent from './BannerContent'

interface Props {
    isHide: boolean;
}
interface ContainerProps {
    isHide: boolean
}

const BannerContainer = styled.div<ContainerProps>`
    width: 100%;
    background: #7732E8;
`


const TopContainer: React.FC<Props> = ({ isHide }) => {
    return (
        <BannerContainer isHide={isHide}>
            <BannerContent />
        </BannerContainer>
    )
}

export default TopContainer
