import { styled } from '@/styles'
import Image from 'next/image'

export const IconSidebar = styled(Image, {
  cursor: 'pointer',
  margin: '1rem',

  '@media(min-width: 800px)': {
    width: '0',
    visibility: 'hidden',
  },
})
