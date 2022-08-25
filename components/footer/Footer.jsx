import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
import Container from '../container/Container';
import Socials from '../socials/Socials';
import Text from '../text/Text';
import styles from './footer.module.scss';

export default function Footer() {
    const date = new Date();

    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footerTop}>
                    <div>
                        <div className={styles.logo}>
                            <Link href="/">
                                <a>
                                    <Image src={logo} alt="Eduzuka Logo" />
                                </a>
                            </Link>
                        </div>
                        <Text className={styles.text}>
                            Dignissim lectus a, elementum arcu est arcu elementum. Dolor sit vitae ac varius ut mattis
                            phasellus facilisis. Interdum lectus volutpat nulla elit. In sit mattis aliquam.
                        </Text>
                        <Socials />
                    </div>
                    <div>
                        <h2 className={styles.title}>Products</h2>
                        <ul className={styles.menuLists}>
                            {['Video Courses', 'Ebooks', 'AudioBooks', 'Podcasts', 'Text'].map((menu, i) => {
                                return (
                                    <li key={i}>
                                        <Link href="/">
                                            <a>{menu}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.title}>Resources</h2>
                        <ul className={styles.menuLists}>
                            {[
                                'Scaling content',
                                'Building communities online',
                                'Creating a business',
                                'Science of Learning',
                            ].map((menu, i) => {
                                return (
                                    <li key={i}>
                                        <Link href="/">
                                            <a>{menu}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.title}>Company</h2>
                        <ul className={styles.menuLists}>
                            {['About us', 'Contact us'].map((menu, i) => {
                                return (
                                    <li key={i}>
                                        <Link href="/">
                                            <a>{menu}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h2 className={styles.title}>Legal</h2>
                        <ul className={styles.menuLists}>
                            {[
                                'Terms of service',
                                'Privacy policy',
                                'Service level Agreement',
                                'Marketplace Terms of Service',
                            ].map((menu, i) => {
                                return (
                                    <li key={i}>
                                        <Link href="/">
                                            <a>{menu}</a>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <Text className={styles.copyText}>
                        &copy;{date.getFullYear()} Copyright <span>Eduzuka</span>. All rights reserved
                    </Text>
                    <div>
                        <Link href="/">
                            <a className={styles.footLink}>Cookies Settings</a>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
