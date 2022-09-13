import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillHome } from 'react-icons/ai';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FaTag } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import faq from '../../assets/icons/faq.svg';
import logout from '../../assets/icons/logout.svg';
import support from '../../assets/icons/support.svg';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import Text from '../text/Text';
import styles from './sideNavigation.module.scss';

// menus
const menus = [
    { menuName: 'Home', icon: <AiFillHome /> },
    { menuName: 'Dashboard', icon: <MdDashboard /> },
    { menuName: 'Affiliate', icon: <FaTag /> },
    { menuName: 'WishList', icon: <BsFillSuitHeartFill /> },
];
const menus2 = [
    { menuName: 'Fags', icon: faq },
    { menuName: 'Support', icon: support },
    { menuName: 'Logout', icon: logout },
];

export default function SideNavigation({ menuTopRef, isTitle = true, className = '' }) {
    const router = useRouter();
    const { menuTopHeight } = UseHeaderContext();

    // active menu tab
    function menuActiveTab(menuName) {
        if (router.asPath === '/' + menuName.toLowerCase().split(' ').join('-')) {
            return styles.active;
        }
    }

    return (
        <aside
            className={`${styles.sidebar} ${className && ' ' + styles[className]}`}
            style={className === 'between' ? { minHeight: `calc(100vh - ${menuTopHeight}px)` } : {}}
        >
            {isTitle && (
                <Text variant="title-2" className={styles['title-2']} ref={menuTopRef}>
                    Side Navigation
                </Text>
            )}
            <ul className={styles.sidebarMenus}>
                {menus.map(({ menuName, icon }, i) => {
                    return (
                        <li key={i}>
                            <Link href={menuName.toLowerCase() === 'home' ? '/' : '/' + menuName.toLowerCase()}>
                                <a className={menuActiveTab(menuName)}>
                                    <span className={styles.icon}>{icon}</span>
                                    <span>{menuName}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <ul className={styles.sidebarMenusBottom}>
                {menus2.map(({ menuName, icon }, i) => {
                    return (
                        <li key={i}>
                            <Link href={'/' + menuName.toLowerCase()}>
                                <a>
                                    <span>
                                        <Image src={icon} alt={menuName} />
                                    </span>
                                    <span>{menuName}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
}
