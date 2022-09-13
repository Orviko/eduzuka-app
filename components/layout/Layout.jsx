import { useRouter } from 'next/router';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './layout.module.scss';

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <>
            {router.pathname !== '/chat' && <Header />}
            <main className={styles.main}>{children}</main>
            {router.pathname !== '/chat' && <Footer />}
        </>
    );
}
