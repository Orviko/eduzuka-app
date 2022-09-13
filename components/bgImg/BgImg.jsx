import styles from './bgImg.module.scss';

export default function BgImg({ maxHeight, children }) {
    return (
        <div className={styles.bgImg} style={{ maxHeight: maxHeight ? maxHeight : 'none' }}>
            {children}
        </div>
    );
}
