import '../styles/globals.css'
import {AppContext, AppProvider} from '../contexts/AppContext';

function MyApp({ Component, pageProps }) {
  return(
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  )
}

export default MyApp;