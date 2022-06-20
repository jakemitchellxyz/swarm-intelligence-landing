/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import Logo from '../../../../static/logo_large.png'
import WhiteLogo from '../../../../static/logo_large_white.png'

const LogoImage = () => {
  const [ colorMode ] = useColorMode()
  const isDark = colorMode === `dark`

  return (
    <img alt="Swarm Intelligence Logo" src={isDark ? WhiteLogo : Logo} style={{ width: '100%' }} />
  )
}

export default LogoImage
