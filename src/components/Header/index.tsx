import Image from 'next/image'
import { HeaderContainer, SubMenu } from './styles'

import logo from '../../../public/logo.png'
import cesta from '../../../public/cesta.png'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" width={120} />
      <SubMenu>
        <form>
          <input type="text" placeholder="Buscar " />
        </form>
        <Image src={cesta} alt="" width={40} />
      </SubMenu>
    </HeaderContainer>
  )
}
