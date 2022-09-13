import { UseWindowContext } from '../../contexts/WindowContext';
import CourseCard from '../courseCard/CourseCard';
import Lessons from '../lessons/Lessons';
import styles from './courseDetailsRight.module.scss';

export default function CourseDetailsRight() {
    const { windowWidth } = UseWindowContext();

    return (
        <aside className={styles.courseRight}>
            {windowWidth > 992 && <CourseCard />}
            <Lessons />
        </aside>
    );
}
