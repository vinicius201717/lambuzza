import { styled } from '@/styles'

export const SidebarContainer = styled('aside', {
  width: '200px',
  margin: '3rem',
  boxShadow: '0px 0px 4px 0px rgba(214, 214, 214, 1)',
  overflow: 'hidden',
  transition: 'width 1s ease',

  // '@media(max-width: 800px)': {
  //   width: '0',
  //   visibility: 'hidden',
  //   opacity: 0,
  //   margin: '1rem',
  //   transition: 'width 0.3s ease, visibility 0s 1s, opacity 1s',
  // },

  variants: {
    open: {
      true: {
        '@media(max-width: 800px)': {
          width: '200px',
          opacity: 1,
          margin: '1rem',
          transition: 'width 0.3s ease, visibility 0s 0.3s, opacity 0.3s',
        },
      },
      false: {
        '@media(max-width: 800px)': {
          width: '200px',
          visibility: 'hidden',
          opacity: 0,
          margin: '1rem',
          transition: 'width 0.3s ease, visibility 0s 0.3s, opacity 0.3s',
        },
      },
    },
  },
})

export const SidebarItem = styled('div', {
  padding: '1rem',
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
  cursor: 'pointer',

  span: {
    color: '#8f8f8f',
  },
})
