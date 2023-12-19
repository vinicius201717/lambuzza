import { MainContainer } from '@/styles/home'

import logo from '../../public/logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <MainContainer>
      <div>
        <Image src={logo} alt="" width={400} />
        <h2>Em desenvolvimento</h2>
      </div>
    </MainContainer>
  )
}
