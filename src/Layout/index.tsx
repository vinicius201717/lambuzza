import { ReactNode, useState } from 'react'
import { Header } from '../components/Header'
import buttonSidebar from '../../public/buttonMenu.png'
import Sidebar from '@/components/Sidebar'
import { IconSidebar } from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebar, setSidebar] = useState(false)

  function openSidebar() {
    sidebar ? setSidebar(false) : setSidebar(true)
  }

  return (
    <div>
      <Header />
      <IconSidebar
        src={buttonSidebar}
        width={24}
        alt="botão que abre a sidebar"
        onClick={openSidebar}
      />
      <Sidebar open={sidebar} />
      {children}
    </div>
  )
}
