import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';

import icognito from '../../assets/images/icognito.png'
import consent from '../../assets/images/consent.png'
import coinbox from '../../assets/images/coinbox.png'

const ItemContainer = styled.div`
    width: 100%;
    margin: 8em auto;
    @media (max-width: 960px) {
        margin: 3em auto;
    }
`

function ItemList() {
    return (
        <ItemContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card url={icognito} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card url={consent} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card url={coinbox} />
                </Grid>
            </Grid>
        </ItemContainer>
    )
}

export default ItemList
