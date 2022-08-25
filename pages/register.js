import Head from 'next/head';
import Newsletter from '../components/newsletter/Newsletter';
import Register from '../components/register/Register';

export default function RegisterPage() {
    return (
        <>
            <Head>
                <title>Sign Up || Eduzuka App</title>
            </Head>
            <Register />
            <Newsletter />
        </>
    );
}
