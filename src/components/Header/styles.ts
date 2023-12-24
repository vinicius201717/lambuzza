import { styled } from '@/styles'

export const HeaderContainer = styled('header', {
  width: '100vw',
  height: '3.75rem',
  boxShadow: '0px 0px 4px 0px rgba(214,214,214,1)',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '2rem',

  img: { marginTop: '0.5rem' },

  '@media(max-width: 600px)': {
    padding: '1rem',
    img: {
      width: '5rem',
    },
  },
})

export const SubMenu = styled('div', {
  gap: '2rem',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  img: { marginTop: '0' },

  input: {
    width: '300px',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #d6d6d6',
    fontSize: '1rem',
    color: '#d1d1d1',
  },

  '@media(max-width: 600px)': {
    padding: '1rem',
    input: {
      width: '10rem',
    },
    img: {
      width: '2.5rem',
    },
  },
})
