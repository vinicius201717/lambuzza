import Image from 'next/image'
import { SidebarContainer, SidebarItem } from './styles'
import bolo from '../../../public/bolo.png'
import salgados from '../../../public/salgados.png'

export default function Sidebar({ open }: any) {
  return (
    <SidebarContainer open={open}>
      <SidebarItem>
        <Image src={bolo} alt="bolos" width={32} />
        <span>Bolos</span>
      </SidebarItem>
      <SidebarItem>
        <Image src={salgados} alt="salgados" width={32} />
        <span>Salgados</span>
      </SidebarItem>
    </SidebarContainer>
  )
}
