import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef } from 'react';
import { BiEnvelope, BiHash } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import adjustIcon from '../../assets/icons/adjust-setting.svg';
import notification from '../../assets/icons/notification.svg';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import logo from '../../public/logo.svg';
import DashboardProfile from '../dashboardProfile/DashboardProfile';
import styles from './chatHeader.module.scss';

export default function ChatHeader() {
    const { setChatHeaderHeight } = UseHeaderContext();
    const { windowWidth } = UseWindowContext();
    const headerRef = useRef(null);

    const getHeaderHeight = useCallback(() => {
        setChatHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }, [setChatHeaderHeight]);

    // set header height
    useEffect(() => {
        getHeaderHeight();
        window.addEventListener('resize', getHeaderHeight);
        return () => window.removeEventListener('resize', getHeaderHeight);
    }, [getHeaderHeight]);

    return (
        <header ref={headerRef} className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <Link href="/" aria-label="Logo">
                        <a>
                            <Image src={logo} alt="Logo" />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.pagSear}>
                <div className={styles.channelPagination}>
                    <span className={styles.channelIcon}>
                        <BiHash />
                    </span>
                    <ul className={styles.paginations}>
                        <li>
                            <Link href="/chat">Bio study</Link>
                            <span className={styles.divider}>/</span>
                        </li>
                        <li>Study question</li>
                    </ul>
                </div>
                <form className={styles.search}>
                    <button type="submit" className={styles.submit}>
                        <FiSearch />
                    </button>
                    <input className={styles.input} type="search" placeholder="Search here..." required />
                    <div className={styles.adjust}>
                        <Image src={adjustIcon} alt="Adjust" />
                    </div>
                </form>
            </div>
            <div className={styles.profileInfo}>
                <div className={styles.notify}>
                    <button type="button" className={styles.notifyIcon}>
                        <BiEnvelope />
                    </button>
                    <button type="button" className={`${styles.notifyIcon} ${styles.active}`}>
                        <Image src={notification} alt="Notification" />
                    </button>
                </div>
                {windowWidth > 992 && <DashboardProfile variant="style-2" />}
            </div>
        </header>
    );
}
