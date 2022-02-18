import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,

  theme: {
    screens: {
      sm: '440px',
      md: '640px',
      lg: '840px',
      xl: '1024px',
    },
  },
})
