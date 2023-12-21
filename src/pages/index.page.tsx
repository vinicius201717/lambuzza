import Layout from '@/Layout'
import {
  ActionItemProduct,
  ItemProduct,
  ProductsContainer,
  Title,
} from '@/styles/home'

import paodequeijo from '../../public/paodequeijo.jpeg'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <Title>Lanches</Title>
      <ProductsContainer>
        <ItemProduct>
          <Image src={paodequeijo} alt="" width={250} />
          <ActionItemProduct>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </ActionItemProduct>
        </ItemProduct>
        <ItemProduct>
          <Image src={paodequeijo} alt="" width={250} />
          <ActionItemProduct>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </ActionItemProduct>
        </ItemProduct>
        <ItemProduct>
          <Image src={paodequeijo} alt="" width={250} />
          <ActionItemProduct>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </ActionItemProduct>
        </ItemProduct>
        <ItemProduct>
          <Image src={paodequeijo} alt="" width={250} />
          <ActionItemProduct>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </ActionItemProduct>
        </ItemProduct>
        <ItemProduct>
          <Image src={paodequeijo} alt="" width={250} />
          <ActionItemProduct>
            <button>-</button>
            <span>0</span>
            <button>+</button>
          </ActionItemProduct>
        </ItemProduct>
      </ProductsContainer>
    </Layout>
  )
}
