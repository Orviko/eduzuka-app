import styles from './button.module.scss';

export default function Button({
    type,
    variant = '',
    btnHelper = '',
    btnHelperClass = '',
    icon,
    iconPlacement,
    className = '',
    children,
}) {
    return (
        <div
            className={`${styles.btnHelper}${btnHelperClass && ' ' + btnHelperClass}${
                btnHelper && ' ' + styles[btnHelper]
            }`}
        >
            <button
                className={`${styles.button}${variant && ' ' + styles[variant]}${className && ' ' + className}`}
                type={type || 'button'}
            >
                {icon && iconPlacement !== 'right' && <span className={styles.icon}>{icon}</span>}
                {children}
                {iconPlacement === 'right' && <span className={styles.icon}>{icon}</span>}
            </button>
        </div>
    );
}
