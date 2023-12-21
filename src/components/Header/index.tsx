import Image from 'next/image'
import { HeaderContainer } from './styles'

import logo from '../../../public/logo.png'
import { ShoppginCard } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" width={180} />
      <ShoppginCard />
    </HeaderContainer>
  )
}
