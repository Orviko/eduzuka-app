import Head from 'next/head';
import { useEffect } from 'react';
import Dashboard from '../components/dashboard/Dashboard';
import { UseHeaderContext } from '../contexts/HeaderContext';

export default function DashboardPage() {
    const { sethHContainerMWidth, setWhichPathname } = UseHeaderContext();

    useEffect(() => {
        sethHContainerMWidth('none');
        setWhichPathname('/dashboard');
    }, [setWhichPathname, sethHContainerMWidth]);

    return (
        <>
            <Head>
                <title>Dashboard || Eduzuka</title>
            </Head>
            <Dashboard />
        </>
    );
}
