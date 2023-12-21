import Image from 'next/image'
import { HeaderContainer } from './styles'

import logo from '../../../public/logo.png'
import cesta from '../../../public/cesta.png'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" width={180} />
      <Image src={cesta} alt="" width={40} />
    </HeaderContainer>
  )
}
