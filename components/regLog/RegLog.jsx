import Input from '../input/Input';
import Socials from '../socials/Socials';
import Text from '../text/Text';
import styles from './regLog.module.scss';

export default function RegLog({ title, withText, orText, children }) {
    return (
        <div className={styles.RegLogContainer}>
            <Text className={styles['title-2']} variant="title-2">
                {title}
            </Text>
            <div className={styles.body}>
                <h4 className={styles.withText}>{withText}</h4>
                <Socials variant="style-2" ulClass="center" />
                <div className={styles.orText}>
                    <span>{orText}</span>
                </div>
                {children}
            </div>
        </div>
    );
}
