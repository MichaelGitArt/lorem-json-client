declare module 'vue' {
  export interface GlobalComponents {
    'RouterLink': typeof import('vue-router')['RouterLink']
  }
}
export {}
