// Environment variables type declarations
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_BASE_URL?: string
    NEXT_PUBLIC_API_TOKEN?: string
  }
}