import styles from './section.module.scss';

export default function Section({ children, className = '', ...res }) {
    return (
        <section className={`${styles.section}${className && ' ' + className}`} {...res}>
            {children}
        </section>
    );
}
