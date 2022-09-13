import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { useSwipeable } from 'react-swipeable';
import richPresence from '../../assets/icons/rich-presence.svg';
import { UseWindowContext } from '../../contexts/WindowContext';
import styles from './chatRightSide.module.scss';

export default function ChatRightSide({ chatHeaderHeight, refsEl, mgsStyles, setMgsStyles, goMgsEnd }) {
    const { windowWidth } = UseWindowContext();
    const swipeHandlers = useSwipeable({
        onSwipedRight: () => {
            setMgsStyles((prevState) => ({
                ...prevState,
                mgsTtX: 0,
                rightTtX: '100%',
                mgsOverlay: false,
                mgsPointer: 'auto',
            }));
            setTimeout(goMgsEnd, 500);
        },
        preventScrollOnSwipe: true,
    });

    useEffect(() => {
        setMgsStyles((prevState) => ({
            ...prevState,
            rightSidebar: refsEl.rightSidebar.getBoundingClientRect().width,
        }));
    }, [refsEl.rightSidebar, setMgsStyles]);

    const refPassthrough = (el) => {
        swipeHandlers.ref(el);
        refsEl.rightSidebar = el;
    };

    const chatMemberClickHandler = () => {
        windowWidth < 992 &&
            setMgsStyles((prevState) => ({
                ...prevState,
                rightTtX: '100%',
                mgsTtX: 0,
                mgsOverlay: false,
                mgsPointer: 'auto',
            }));

        setTimeout(goMgsEnd, 500);
    };

    return (
        <aside
            className={styles.sidebar}
            style={{
                top: chatHeaderHeight,
                transform: `translateX(${mgsStyles.rightTtX})`,
            }}
            {...swipeHandlers}
            ref={refPassthrough}
        >
            <div className={styles.sidebarInner} style={{ height: `calc(100% - ${chatHeaderHeight}px)` }}>
                <PerfectScrollBar>
                    <div className={styles.boxWrapper}>
                        <div className={styles.sideBox}>
                            <header className={styles.sideHeader}>
                                <h2 className={styles.sideTitle}>Active Members</h2>
                                <span className={styles.sideStatus}></span>
                            </header>
                            <ul className={styles.sideLists}>
                                {[...Array(4)].map((_, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href="/chat">
                                                <a onClick={chatMemberClickHandler}>
                                                    <div className={styles.uImgBox}>
                                                        <Image
                                                            src={`/users/members/active/${i + 1}.png`}
                                                            alt="user name"
                                                            width={40}
                                                            height={40}
                                                        />
                                                        <span className={styles.uActive}></span>
                                                    </div>
                                                    <div className={styles.uDetails}>
                                                        <h3 className={styles.uName}>Nelly</h3>
                                                        <div className={styles.uDM}>
                                                            <p className={styles.uTxt}>
                                                                Listening to <span>Spotify</span>
                                                            </p>
                                                            <span className={styles.uIcon}>
                                                                <Image src={richPresence} alt="Icon" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={styles.sideBox}>
                            <header className={`${styles.sideHeader} ${styles['style-2']}`}>
                                <h2 className={styles.sideTitle}>Direct message</h2>
                                <span className={styles.sIcon}>
                                    <AiOutlinePlus />
                                </span>
                            </header>
                            <ul className={styles.sideLists}>
                                {[...Array(4)].map((_, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href="/chat">
                                                <a onClick={chatMemberClickHandler}>
                                                    <div className={styles.uImgBox}>
                                                        <Image
                                                            src={`/users/members/direct/${i + 1}.png`}
                                                            alt="user name"
                                                            width={40}
                                                            height={40}
                                                        />
                                                        <span className={styles.uActive}></span>
                                                    </div>
                                                    <div className={styles.uDetails}>
                                                        <h3 className={styles.uName}>Nelly</h3>
                                                        <div className={styles.uDM}>
                                                            <p className={styles.uTxt}>
                                                                Listening to <span>Spotify</span>
                                                            </p>
                                                            <span className={styles.uIcon}>
                                                                <Image src={richPresence} alt="Icon" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </PerfectScrollBar>
            </div>
        </aside>
    );
}
