import Script from "next/script";
import { CssBaseline } from "@mui/material";
import { Header } from "../Components/Header";
import { Details } from "../Components/Details";
import {
  Navigation,
  NavigationContextProvider,
} from "../Components/Navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        id="googletagmanager"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="googletagmanagerdatalayer">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <CssBaseline />
      <NavigationContextProvider>
        <Navigation />
        <Header />
        <Details />
        <Component {...pageProps} />
      </NavigationContextProvider>
    </>
  );
}

export default MyApp;
