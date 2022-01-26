import '../styles/global/reset.css'
import '../styles/global/global.scss'
import Layout from '../components/layout'
import { useRouter } from "next/router";
import React, { useEffect } from 'react'
import { existsGaId, pageview } from '../libs/gtag'
import GoogleAnalytics from '../components/GoogleAnalytics'

function MyApp({ Component, pageProps }) {
 
  const router = useRouter()
  useEffect(() => {
    if (!existsGaId) {
      return
    }
    const handleRouteChange = (path) => {
      pageview(path)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
 
  return (
    <>
      <GoogleAnalytics />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp
