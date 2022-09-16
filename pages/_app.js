import '../styles/globals.css';
<<<<<<< Updated upstream

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
=======
import { FavProvider } from '../contexts/FavContext';

function MyApp({ Component, pageProps }) {
  return (
    <FavProvider>
      <Component {...pageProps} />
    </FavProvider>
  );
>>>>>>> Stashed changes
}

export default MyApp;
