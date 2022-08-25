import styles from './container.module.scss';

export default function Container({ className = '', children, ...rest }) {
    return (
        <div {...rest} className={`${styles.container}${className && ' ' + className}`}>
            {children}
        </div>
    );
}
