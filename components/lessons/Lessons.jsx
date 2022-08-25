import { AiOutlinePlus } from 'react-icons/ai';
import Text from '../text/Text';
import styles from './lessons.module.scss';

export default function Lessons() {
    return (
        <div className={styles.lessons}>
            <Text variant="title-5" className={styles.lessonsTitle}>
                17 Lessons
            </Text>
            <ol className={styles.lessonLists}>
                <li className={styles.active}>
                    <span className={styles.count}>1.</span>Intro and what you&apos;ll be getting
                </li>
                <li>
                    <span className={styles.count}>2.</span>Understanding How Memories are Formed
                </li>
                <li>
                    <span className={styles.count}>3.</span>Meta Cognition
                </li>
                <li>
                    <span className={styles.count}>4.</span>Types of Information & Their Relationship With Memory
                </li>
                <li>
                    <span className={styles.count}>5.</span>Case Study of Learning Regimes Based on Research by Minerva
                    University
                </li>
                <li>
                    <span className={styles.count}>6.</span>Intro and what you&apos;ll be getting
                </li>
            </ol>
            <button type="button" className={styles.expandLessonsBtn}>
                <AiOutlinePlus />
                <span>Expand lessons</span>
            </button>
        </div>
    );
}
