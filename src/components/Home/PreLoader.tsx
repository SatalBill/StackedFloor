import React, { useEffect } from 'react'
import styled from 'styled-components'
import loader from '../../assets/images/loader2.gif'

interface Props {
}

const PreLoaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s;
`
const GifLoader = styled.img`
    transition: all 2s;
    background-size: cover;
    width: 50%;
    @media (max-width: 450px) {
        height: 100%;
    }
`

const PreLoader: React.FC<Props> = () => {
    useEffect(() => {
        var loaderImg = document.getElementById("loaderImg")
        var loaderCont = document.getElementById("transitionBackground")
        setTimeout(() => {
            if(loaderImg) loaderImg.style.display = 'none'
            if(loaderCont) loaderCont.style.display = 'none'
        }, 4500);
        setTimeout(() => {
            if(loaderImg && loaderCont) {
                loaderCont.style.opacity = '0'
            }
        }, 3500);
    }, [])

    return (
        <PreLoaderContainer id="transitionBackground">
            <GifLoader id="loaderImg" src={loader} />
        </PreLoaderContainer>
    )
}

export default PreLoader
