import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="icon" href="../public/favicon.ico" />
                <title>Studio Wox</title>

                <meta name="description" content="Conforto, alta qualidade e a localização que você sempre quis. Encontre o seu imóvel." />
                <meta name="keywords" content="Studio Wox, imóvel, qualidade, marketing, apartamentos, imóveis, bairros, cidades" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
