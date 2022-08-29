import Head from 'next/head';
import Login from '../components/login/Login';
import Newsletter from '../components/newsletter/Newsletter';

export default function LoginPage() {
    return (
        <>
            <Head>
                <title>Login || Eduzuka App</title>
            </Head>
            <Login />
            <Newsletter />
        </>
    );
}
