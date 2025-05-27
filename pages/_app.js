import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next"


function MyApp({ Component, pageProps }) {
 
  return (
    <main>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}

export default MyApp;
