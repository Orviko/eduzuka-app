import styles from './inputGroup.module.scss';

export default function InputGroup({ children }) {
    return <div className={styles.inputGroup}>{children}</div>;
}
