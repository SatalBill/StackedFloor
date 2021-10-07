import React from 'react'
import styled from 'styled-components'
import { colors } from "../../styles";

interface Props {
}

const Container = styled.div`
    width: 100%;
    padding: 1em;
    background: linear-gradient(253.59deg, rgba(${colors.gradDark}) 1.89%, rgba(${colors.gradLight}) 99.63%);
    overflow-wrap: break-word;
    border-radius: 25px;
    border: 2px solid rgba(${colors.border});
    backdrop-filter: blur(4px);
    text-align: center;
`

const InputCard: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>
}

export default InputCard
