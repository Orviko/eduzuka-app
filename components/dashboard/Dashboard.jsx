import Image from 'next/image';
import bgImg from '../../assets/img/bg-3.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import BgImg from '../bgImg/BgImg';
import Container from '../container/Container';
import Courses from '../courses/Courses';
import DashboardRight from '../dashboardRight/DashboardRight';
import Section from '../section/Section';
import SideNavigation from '../sideNavigation/SideNavigation';
import UserDashboard from '../userDashboard/UserDashboard';
import styles from './dashboard.module.scss';

export default function Dashboard() {
    const { headerHeight } = UseHeaderContext();
    const { windowWidth } = UseWindowContext();

    // condition
    const windowCondition = windowWidth < 992;

    return (
        <Section style={{ paddingTop: headerHeight / 16 + 1.875 + 'rem' }}>
            <BgImg>
                <Image src={bgImg} alt="Banner Image" layout="fill" placeholder="blur" />
            </BgImg>
            <Container className={styles.container}>
                <div className={styles.dashboard}>
                    {!windowCondition && (
                        <div>
                            <SideNavigation />
                        </div>
                    )}
                    <div className={styles.dashboardMiddle}>
                        <UserDashboard />
                        <Courses />
                    </div>
                    <div>
                        <DashboardRight />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
