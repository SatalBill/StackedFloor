import React from 'react'
import styled from 'styled-components'
import { colors } from "../../styles";

interface Props {
}

const Container = styled.div`
    width: 100%;
    max-width: 394px;
    padding: 1em 2em;
    background: linear-gradient(253.59deg, rgba(${colors.gradDark}) 1.89%, rgba(${colors.gradLight}) 99.63%);
    // background: transparent;
    overflow-wrap: break-word;
    border-radius: 25px;
    border: 1px solid rgba(${colors.border});
    backdrop-filter: blur(4px);
`

const InputCard: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>
}

export default InputCard
