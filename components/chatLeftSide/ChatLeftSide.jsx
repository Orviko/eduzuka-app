import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import styles from './chatLeftSide.module.scss';

export default function ChatLeftSide() {
    return (
        <aside className={styles.leftSide}>
            <div className={styles.leftSideInner}>
                <ul className={styles.serverLists}>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <Image
                                                src="/chat-servers/server-icon.png"
                                                alt="Server name"
                                                layout="fill"
                                            />
                                        </div>
                                        <div className={`${styles.activity} ${styles.pc}`}>
                                            <span>
                                                <BiDesktop />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a className={styles.active}>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <Image
                                                src="/chat-servers/server-icon-2.png"
                                                alt="Server name"
                                                layout="fill"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <Image
                                                src="/chat-servers/server-icon-3.png"
                                                alt="Server name"
                                                layout="fill"
                                            />
                                        </div>
                                        <div className={`${styles.activity} ${styles.count}`}>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <Image
                                                src="/chat-servers/server-icon-4.png"
                                                alt="Server name"
                                                layout="fill"
                                            />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.multiIconBox}>
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src="/chat-servers/server-icon-4.png"
                                                    alt="Server name"
                                                    layout="fill"
                                                />
                                            </div>
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src="/chat-servers/server-icon-4.png"
                                                    alt="Server name"
                                                    layout="fill"
                                                />
                                            </div>
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src="/chat-servers/server-icon-4.png"
                                                    alt="Server name"
                                                    layout="fill"
                                                />
                                            </div>
                                            <div className={styles.iconBox}>
                                                <Image
                                                    src="/chat-servers/server-icon-4.png"
                                                    alt="Server name"
                                                    layout="fill"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <span className={styles.iconIcon}>
                                                <AiOutlinePlus />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/">
                                <a>
                                    <div className={styles.serverBox}>
                                        <div className={styles.iconBox}>
                                            <span className={styles.iconIcon}>
                                                <FiSearch />
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
