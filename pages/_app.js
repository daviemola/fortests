import React from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
