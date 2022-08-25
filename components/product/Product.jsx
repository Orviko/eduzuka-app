import Image from 'next/image';
import styles from './product.module.scss';

export default function Product({ icon, title, desc, className = '' }) {
    return (
        <div className={`${styles.product}${className && ' ' + className}`}>
            <div className={styles.icon}>
                <Image src={icon} alt={title} />
            </div>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
        </div>
    );
}
