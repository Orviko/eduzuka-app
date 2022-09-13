import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLogout } from 'react-icons/ai';
import { FiChevronDown, FiUser } from 'react-icons/fi';
import { MdDashboard } from 'react-icons/md';
import styles from './dashboardProfile.module.scss';

// menus
const userMenus = [
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Profile', icon: <FiUser /> },
    { name: 'Logout', icon: <AiOutlineLogout /> },
];
const userMenus2 = [
    { name: 'Chat', icon: <MdDashboard /> },
    { name: 'Dashboard', icon: <MdDashboard /> },
    { name: 'Profile', icon: <FiUser /> },
    { name: 'Logout', icon: <AiOutlineLogout /> },
];

export default function DashboardProfile({ variant }) {
    if (variant) {
        return (
            <div className={styles.wrapper}>
                <div className={`${styles.userProfile} ${styles[variant]}`}>
                    <div className={styles.userImg}>
                        <Image src="/users/chat-profile.png" alt="Profile" width={45} height={45} />
                    </div>
                    <div className={styles.userDetails}>
                        <h2 className={styles.userName}>Jhone doe</h2>
                        <h4 className={styles.userTitle}>Designation</h4>
                    </div>
                    <span className={styles.icon}>
                        <FiChevronDown />
                    </span>
                </div>
                <div className={styles.userMenu}>
                    <ul className={styles.menuLists}>
                        {userMenus2.map(({ name, icon }, i) => {
                            return (
                                <li key={i}>
                                    <Link href={'/' + name.toLowerCase()}>
                                        <a>
                                            <span className={styles.uMIcon}>{icon}</span>
                                            <span className={styles.uName}>{name}</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.userProfile}>
                <div className={styles.userImg}>
                    <Image src="/users/dashboard-profile.png" alt="Profile" width={45} height={45} />
                </div>
                <h2 className={styles.userName}>Jhone doe</h2>
                <span className={styles.icon}>
                    <FiChevronDown />
                </span>
            </div>
            <div className={styles.userMenu}>
                <ul className={styles.menuLists}>
                    {userMenus.map(({ name, icon }, i) => {
                        return (
                            <li key={i}>
                                <Link href={'/' + name.toLowerCase()}>
                                    <a>
                                        <span className={styles.uMIcon}>{icon}</span>
                                        <span className={styles.uName}>{name}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
