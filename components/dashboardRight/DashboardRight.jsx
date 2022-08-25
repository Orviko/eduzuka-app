import Affiliates from '../affiliates/Affiliates';
import Offers from '../offers/Offers';
import styles from './dashboardRight.module.scss';

export default function DashboardRight() {
    return (
        <div className={styles.dashboardRight}>
            <Affiliates />
            <Offers />
        </div>
    );
}
