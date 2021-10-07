import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'

interface Props {

}

const Container = styled.div`
    width: 100%;
    height: 320px;
    padding: 0.5em;
    background: linear-gradient(to left, ${colors.gradDark}, ${colors.gradLight});
`

const InputCard: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>
}

export default InputCard
