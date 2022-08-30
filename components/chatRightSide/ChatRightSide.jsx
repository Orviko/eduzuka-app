import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import PerfectScrollBar from 'react-perfect-scrollbar';
import richPresence from '../../assets/icons/rich-presence.svg';
import styles from './chatRightSide.module.scss';

export default function ChatRightSide({ chatHeaderHeight }) {
    return (
        <aside className={styles.sidebar} style={{ top: chatHeaderHeight }}>
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
                                                <a>
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
                                                <a>
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
