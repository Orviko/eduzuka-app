import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BiMenuAltRight, BiUserPlus } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import logo from '../../public/logo.svg';
import Button from '../button/Button';
import Container from '../container/Container';
import DashboardProfile from '../dashboardProfile/DashboardProfile';
import SideNavigation from '../sideNavigation/SideNavigation';
import styles from './header.module.scss';

// menus
const menus = ['Home', 'Become creator', 'login'];
const dashMenus = ['Home', 'Become creator'];

export default function Header() {
    const { setMenuTopHeight, setHeaderHeight, hContainerMWidth, whichPathname } = UseHeaderContext();
    const [isScroll, setIsScroll] = useState(false);
    const router = useRouter();
    const headerRef = useRef(null);
    const menuTopRef = useRef(null);
    const overlayRef = useRef(null);
    const menusWrapperRef = useRef(null);
    const { windowWidth } = UseWindowContext();

    // condition
    const windowCondition = windowWidth < 992;

    // get header height
    const getHeaderHeight = useCallback(() => {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
        windowCondition && setMenuTopHeight(menuTopRef.current.getBoundingClientRect().height);
    }, [setHeaderHeight, setMenuTopHeight, windowCondition]);
    // set header height
    useEffect(() => {
        getHeaderHeight();
    }, [getHeaderHeight]);

    // resize window
    const onResizeWindow = useCallback(() => {
        getHeaderHeight();
        windowCondition ? menuToggler() : menuToggler('OPEN', 'noOverlay');
    }, [getHeaderHeight, windowCondition]);
    // invoked
    useEffect(() => {
        onResizeWindow();
        // invoked window width --resize
        window.addEventListener('resize', onResizeWindow);
        return () => window.removeEventListener('resize', onResizeWindow);
    }, [onResizeWindow]);

    // active menu tab
    function menuActiveTab(menu) {
        if (router.asPath === '/' && menu.toLowerCase() === 'home') {
            return styles.active;
        } else if (router.asPath === '/' + menu.toLowerCase().split(' ').join('-')) {
            return styles.active;
        }
    }

    useEffect(() => {
        // on scroll
        function onScroll() {
            window.scrollY > 80 ? setIsScroll(true) : setIsScroll(false);
        }
        // invoked on scroll
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // on menu click
    const menuToggler = (type, overType) => {
        const overlay = overlayRef.current;
        const menu = menusWrapperRef.current;
        if (type === 'OPEN') {
            if (overType !== 'noOverlay') {
                overlay.style.opacity = 1;
                overlay.style.pointerEvents = 'all';
            }
            menu.style.transform = `translateX(0)`;
        } else {
            menu.style.transform = `translateX(100%)`;
            overlay.style.opacity = 0;
            overlay.style.pointerEvents = 'none';
        }
    };

    const routeChangeHandler = useCallback(() => {
        windowCondition && menuToggler();
    }, [windowCondition]);

    // router change
    useEffect(() => {
        router.events.on('routeChangeComplete', routeChangeHandler);
        return () => router.events.off('routeChangeComplete', routeChangeHandler);
    }, [routeChangeHandler, router.events]);

    return (
        <header className={`${styles.header}${isScroll ? ' ' + styles.scroll : ''}`} ref={headerRef}>
            <Container style={router.pathname === whichPathname ? { maxWidth: hContainerMWidth } : {}}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <Image src={logo} alt="Eduzuka Logo" />
                            </a>
                        </Link>
                    </div>
                    {windowCondition && (
                        <button type="button" className={styles.menuBar} onClick={() => menuToggler('OPEN')}>
                            <BiMenuAltRight />
                        </button>
                    )}
                    <div className={styles.overlay} ref={overlayRef} onClick={menuToggler} />
                    <div className={styles.menusWrapper} ref={menusWrapperRef}>
                        {windowCondition && (
                            <div className={styles.menuTopBar} ref={menuTopRef}>
                                <div className={styles.logo}>
                                    <Link href="/">
                                        <a>
                                            <Image src={logo} alt="Eduzuka Logo" />
                                        </a>
                                    </Link>
                                </div>
                                <button className={styles.menuClose} onClick={menuToggler}>
                                    <MdOutlineClose />
                                </button>
                            </div>
                        )}
                        {router.pathname === whichPathname && windowCondition ? (
                            <SideNavigation isTitle={false} className="between" />
                        ) : (
                            <ul className={styles.menus}>
                                {router.pathname !== whichPathname
                                    ? menus.map((menu, i) => {
                                          return (
                                              <li key={i}>
                                                  <Link
                                                      href={
                                                          menu.toLowerCase() === 'home'
                                                              ? '/'
                                                              : '/' + menu.toLocaleLowerCase().split(' ').join('-')
                                                      }
                                                  >
                                                      <a className={menuActiveTab(menu)}>{menu}</a>
                                                  </Link>
                                              </li>
                                          );
                                      })
                                    : dashMenus.map((menu, i) => {
                                          return (
                                              <li key={i}>
                                                  <Link
                                                      href={
                                                          menu.toLowerCase() === 'home'
                                                              ? '/'
                                                              : '/' + menu.toLocaleLowerCase().split(' ').join('-')
                                                      }
                                                  >
                                                      <a className={menuActiveTab(menu)}>{menu}</a>
                                                  </Link>
                                              </li>
                                          );
                                      })}
                                {router.pathname !== whichPathname && (
                                    <li>
                                        <Link href="/register">
                                            <a className={styles.formBtn}>
                                                <Button icon={<BiUserPlus />} className={styles.button}>
                                                    Register
                                                </Button>
                                            </a>
                                        </Link>
                                    </li>
                                )}
                                {router.pathname === whichPathname && (
                                    <li>
                                        <DashboardProfile />
                                    </li>
                                )}
                            </ul>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
}
