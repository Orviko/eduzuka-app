import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiDesktop } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';
import styles from './chatLeftSide.module.scss';

export default function ChatLeftSide() {
    return (
        <aside className={styles.leftSide}>
            <div className={styles.leftSideInner}>
                <ul className={styles.serverLists}>
                    {[
                        {
                            sName: 'John Doe',
                            img: '/chat-servers/server-icon.png',
                            activity: { type: 'pc', content: <BiDesktop /> },
                            link: '/chat',
                            active: false,
                        },
                        {
                            sName: 'John Doe',
                            img: '/chat-servers/server-icon-2.png',
                            activity: { type: '', content: <BiDesktop /> },
                            link: '/chat',
                            active: true,
                        },
                        {
                            sName: 'John Doe',
                            img: '/chat-servers/server-icon-3.png',
                            activity: { type: 'count', content: 1 },
                            link: '/chat',
                            active: false,
                        },
                        {
                            sName: 'John Group',
                            link: '/chat',
                            group: { img: '' },
                            active: false,
                        },
                    ].map(({ sName, img, activity, link, group, active }, index) => {
                        return (
                            <li key={index} className={styles.serverItem}>
                                <div className={styles.server}>
                                    <Link href={link}>
                                        <a className={active && styles.active}>
                                            <div className={styles.serverBoxWrapper}>
                                                <div className={styles.serverBox}>
                                                    <div className={styles.iconBox}>
                                                        {group ? (
                                                            group?.img ? (
                                                                <Image src={group.img} alt={sName} layout="fill" />
                                                            ) : (
                                                                <div className={styles.icon}>
                                                                    <HiUserGroup />
                                                                </div>
                                                            )
                                                        ) : (
                                                            <Image src={img} alt={sName} layout="fill" />
                                                        )}
                                                    </div>
                                                    {activity?.type && (
                                                        <div className={`${styles.activity} ${styles[activity.type]}`}>
                                                            <span>{activity.content}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className={styles.serverInfo}>
                                                    <h3 className={styles.sName}>{sName}</h3>
                                                </div>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </li>
                        );
                    })}
                    <li className={styles.serverItem}>
                        <div className={styles.server}>
                            <Link href="/chat">
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
                            <Link href="/chat">
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
