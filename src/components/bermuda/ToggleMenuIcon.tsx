import React, { useEffect } from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
interface Props {
    openMenu: () => void;
}

const ToggleIcon = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 2em;
    top: 25px;
    display: none;
    @media (max-width: 880px) {
        display: block;
    }
`

const ToggleMenuIcon: React.FC<Props> = ({ openMenu }) => {
    useEffect(() => {
        openMenu()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ToggleIcon>
            <IconButton aria-label="delete" size="medium" color="primary" onClick={openMenu}>
                <MenuIcon fontSize="inherit" />
            </IconButton>
        </ToggleIcon>
    )
}

export default ToggleMenuIcon
