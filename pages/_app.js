import '../styles/globals.css'
import { IntercomProvider } from 'react-use-intercom';

function MyApp({ Component, pageProps }) {
  return (
    <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID} autoBoot>
      <Component {...pageProps} />
    </IntercomProvider>
  )
}

export default MyApp
