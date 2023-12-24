import { styled } from '.'

export const MainContainer = styled('main', {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
})

export const ProductsContainer = styled('section', {
  width: '1090px',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  margin: '10px auto',
  gap: '1rem',

  '@media(max-width:  1169px)': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },
})

export const ItemProduct = styled('div', {
  width: '100%',
  height: '500px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
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

export const EmDesenvolvimento = styled('h1', {
  position: 'absolute',
  bottom: '50%',
  textAlign: 'center',
  span: {
    color: '#4d4d4d',
  },
})
