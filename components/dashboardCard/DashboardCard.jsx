import Image from 'next/image';
import styles from './dashboardCard.module.scss';

export default function DashboardCard({ src, title, titExplore }) {
    return (
        <div className={styles.card}>
            <Image src={src} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <h5 className={styles.titExplore}>{titExplore}</h5>
        </div>
    );
}
