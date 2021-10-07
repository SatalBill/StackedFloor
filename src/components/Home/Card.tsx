import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {
    url: string;
}

const Container = styled.div`
    width: 100%;
    padding: 1.5em 3em;
    background: radial-gradient(49.03% 164.11% at 49.03% 50.04%, rgba(${colors.gradDark}) 0%, rgba(${colors.gradLight}) 100%);
    // background: #0C2340;
    backdrop-filter: blur(4px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(${colors.border});
    transition: all 0.2s;
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(${colors.border}), 0 6px 20px 0 rgba(${colors.border});
    }
`
const CardImage = styled.img`
    width: 126px;
    height: 126px;
    background-size: contain;
`
const Description = styled.p`
    color: rgb(${colors.fontColor});
    font-size: 16px;
    text-align: center;
`

const Card: React.FC<Props> = ({ url }) => {
    return (
        <Container>
            <CardImage src={url} />
            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis in risus vitae rhoncus.</Description>
        </Container>
    )
}

export default Card
