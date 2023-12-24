import Layout from '@/Layout'
import {
  EmDesenvolvimento,
  ItemProduct,
  MainContainer,
  ProductsContainer,
} from '@/styles/home'

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <EmDesenvolvimento>
          Em desenvolvimento <span>@gaindev</span>
        </EmDesenvolvimento>
        <ProductsContainer>
          {/* <ItemProduct>
          </ItemProduct> */}
        </ProductsContainer>
      </MainContainer>
    </Layout>
  )
}
