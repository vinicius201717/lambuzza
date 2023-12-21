import { styled } from '.'

export const MainContainer = styled('main', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflowX: 'hidden',
})

export const Title = styled('h1', {
  textAlign: 'center',
})

export const ProductsContainer = styled('section', {
  display: 'flex',
  margin: '10px auto',
  gap: '1rem',
  flexWrap: 'wrap',

  '@media(max-width:  1169px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})

export const ItemProduct = styled('div', {
  width: '300px',
  height: '500px',
  borderRadius: '10px',
  overflow: 'hidden',

  img: {
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    boxShadow: ' 0px 0px 12px 0px rgba(0,0,0,0.75)',
  },
})

export const ActionItemProduct = styled('div', {
  width: '100%',
  height: '3.125rem',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',

  span: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: ' 0px 0px 12px 0px rgba(0,0,0,0.75)',
  },

  button: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    boxShadow: ' 0px 0px 12px 0px rgba(0,0,0,0.75)',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '19px',
    color: 'white',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#525252',
    },
  },
})
