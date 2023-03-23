import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  )
}

export default MyApp
