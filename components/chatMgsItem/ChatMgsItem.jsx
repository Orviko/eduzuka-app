import Image from 'next/image';
import Link from 'next/link';
import styles from './chatMgsItem.module.scss';

export default function ChatMgsItem({ mgsInfo }) {
    const { src, name, time, para, link, status } = mgsInfo;

    return (
        <div className={styles.mgsWrapper}>
            <div className={styles.mgs}>
                <div className={styles.imgBox}>
                    <Image src={src} alt={name} width={45} height={45} />
                    {status && <span className={styles.active}></span>}
                </div>
                <div className={styles.details}>
                    <header className={styles.header}>
                        <h2 className={styles.uName}>{name}</h2>
                        <span className={styles.time}>{time}</span>
                    </header>
                    <div className={styles.body}>
                        <p className={styles.para}>{para}</p>
                        {link && (
                            <div className={styles.linkWrapper}>
                                <Link href={link.href}>
                                    <a target="_blank" className={styles.link}>
                                        {link.href}
                                    </a>
                                </Link>
                                <div className={styles.linkPreview}>
                                    <Link href={link.href}>
                                        <a target="_blank" className={styles.link}>
                                            <div className={styles.linkImg}>
                                                <Image src={link.img} alt={link.href} width={475} height={206} />
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
