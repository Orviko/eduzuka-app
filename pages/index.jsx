import Head from 'next/head';
import Hero from '../components/hero/Hero';
import Newsletter from '../components/newsletter/Newsletter';
import Products from '../components/products/Products';
import Transforming from '../components/transforming/Transforming';

export default function Index() {
    return (
        <>
            <Head>
                <title>Eduzuka App</title>
            </Head>
            <Hero />
            <Products />
            <Transforming />
            <Newsletter />
        </>
    );
}
