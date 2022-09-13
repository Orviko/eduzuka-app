import styles from './text.module.scss';

export default function Text({ variant, variantType = '', className = '', children }) {
    if (variant) {
        return (
            <h2
                className={`${styles[variant]}${variantType && ' ' + styles[variantType]}${
                    className && ' ' + className
                }`}
            >
                {children}
            </h2>
        );
    }

    return <p className={`${styles.text}${className && ' ' + className}`}>{children}</p>;
}
