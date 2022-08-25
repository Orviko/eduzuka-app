import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import styles from './affiliateCard.module.scss';

export default function AffiliateCard({ affiliate }) {
    // destructure
    const { src, time, desc, user } = affiliate;

    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                <Image src={src} alt={user.name} width={168} height={111} objectFit="cover" />
                <div className={styles.timeReact}>
                    <span className={styles.time}>{time}</span>
                    <button className={styles.react}>
                        <FaRegHeart />
                    </button>
                </div>
            </div>
            <div>
                <p className={styles.desc}>{desc}</p>
                <div className={styles.userInfo}>
                    <div className={styles.userImg}>
                        <Image src={user.src} alt={user.name} width={32} height={32} />
                    </div>
                    <div className={styles.userDetails}>
                        <h2 className={styles.name}>{user.name}</h2>
                        <h5 className={styles.title}>{user.title}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
