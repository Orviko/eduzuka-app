import Image from 'next/image';
import { FaRegHeart } from 'react-icons/fa';
import Button from '../button/Button';
import styles from './eCard.module.scss';

export default function ECard() {
    return (
        <div className={styles.eCard}>
            <div className={styles.imgBox}>
                <Image src="/eCard-img.png" alt="eCard Img" width={317} height={230} objectFit="cover" />
                <div className={styles.eInfo}>
                    <div className={styles.eTor}>
                        <div className={styles.eTorImg}>
                            <Image src="/users/instructor.png" alt="Person Img" width={40} height={40} />
                        </div>
                        <div>
                            <h2 className={styles.eTorName}>By: Eric fairweather</h2>
                            <h5 className={styles.eTorTitle}>Ceo: Lviah Energy, eduzuka education</h5>
                        </div>
                    </div>
                    <div className={styles.priceInfo}>
                        Price: <span className={styles.price}>$15.00</span>
                    </div>
                </div>
            </div>
            <div className={styles.cardBody}>
                <h2 className={styles.title}>Introduction to sales and marketing stretaty 20 days...</h2>
                <p className={styles.desc}>
                    Sed vulputate laoreet scelerisque eros. Ac dui sed bibendum consequat diam sapien platea egestas
                    viverra. Praesent rhoncus, gravida laoreet pulvinar est aliquam sed pharetra. Diam
                </p>
                <div className={styles.aboutFoot}>
                    <ul className={styles.lists}>
                        <li>
                            <span>Lesson:</span> 12
                        </li>
                        <li>
                            <span>Last updated:</span> 12-06-22
                        </li>
                    </ul>
                    <button className={styles.react}>
                        <FaRegHeart />
                    </button>
                </div>
                <Button variant="style-8">Tutorial</Button>
            </div>
        </div>
    );
}
