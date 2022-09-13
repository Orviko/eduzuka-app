import NextNProgress from 'nextjs-progressbar';
import Layout from '../components/layout/Layout';
import Providers from '../contexts/Providers';
import '../styles/globals.scss';
import { colors } from '../styles/variables';

export default function App({ Component, pageProps }) {
    return (
        <Providers>
            <Layout>
                <NextNProgress color={colors.$primary} showOnShallow={true} />
                <Component {...pageProps} />
            </Layout>
        </Providers>
    );
}
