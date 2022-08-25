import { HeaderProvider } from '../../contexts/HeaderContext';
import { WindowProvider } from '../../contexts/WindowContext';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './layout.module.scss';

export default function Layout({ children }) {
    return (
        <WindowProvider>
            <HeaderProvider>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </HeaderProvider>
        </WindowProvider>
    );
}
