import * as React from 'react'
import styled from 'styled-components'
import * as PropTypes from 'prop-types'
import Blockie from './Blockie'
import { ellipseAddress } from '../helpers/utilities'
import { transitions } from '../styles'

const SHeader = styled.div`
  width: 110px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  margin-left: 1.5em;
`

const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
`

const SBlockie = styled(Blockie)`
  margin-right: 10px;
  color: white;
`

interface IHeaderStyle {
  connected: boolean
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  color: white;
  font-weight: bold;
  // margin: ${({ connected }) => (connected ? '-2px auto 0.7em' : '0')};
`

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  opacity: 0.7;
  cursor: pointer;

  opacity: ${({ connected }) => (connected ? 1 : 0)};
  visibility: ${({ connected }) => (connected ? 'visible' : 'hidden')};
  pointer-events: ${({ connected }) => (connected ? 'auto' : 'none')};

  &:hover {
    transform: translateY(-1px);
    opacity: 0.5;
  }
`

const WalletInfo = styled.p`
  color: #212941;
  font-size: 16px;
`

interface IHeaderProps {
  killSession: () => void
  connected: boolean
  address: string
  chainId: number
}

const Header = (props: IHeaderProps) => {
  const { connected, address, killSession } = props
  return (
    <SHeader {...props}>
      {address && (
        <SActiveAccount>
          {/* <SBlockie address={address} />
          <SAddress connected={connected}>{ellipseAddress(address)}</SAddress> */}
          <SDisconnect connected={connected} onClick={killSession}>
            <WalletInfo>{'Disconnect'}</WalletInfo>
          </SDisconnect>
        </SActiveAccount>
      )}
    </SHeader>
  )
}

Header.propTypes = {
  killSession: PropTypes.func.isRequired,
  address: PropTypes.string
}

export default Header
