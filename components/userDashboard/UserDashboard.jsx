import education from '../../assets/icons/user-dashboard/education.svg';
import graduation from '../../assets/icons/user-dashboard/graduation.svg';
import star from '../../assets/icons/user-dashboard/star.svg';
import tickMark from '../../assets/icons/user-dashboard/tick-mark.svg';
import DashboardCard from '../dashboardCard/DashboardCard';
import Text from '../text/Text';
import styles from './userDashboard.module.scss';

export default function UserDashboard() {
    return (
        <div>
            <Text variant="title-4">
                <span>User</span> Dashboard
            </Text>
            <div className={styles.cards}>
                <DashboardCard src={graduation} title="Updated Course" titExplore="by Teachers" />
                <DashboardCard src={star} title="1800" titExplore="Points" />
                <DashboardCard src={tickMark} title="45.5%" titExplore="Complete" />
                <DashboardCard src={education} title="Eduzuka Education" titExplore="Instructor" />
            </div>
        </div>
    );
}
