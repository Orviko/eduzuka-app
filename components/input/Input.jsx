import { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './input.module.scss';

export default function Input({
    as,
    type,
    label,
    icon,
    id,
    variant,
    variantType = '',
    inputGroupClass = '',
    className = '',
    children,
    ...res
}) {
    const inputRef = useRef(null);
    const [passIcon, setPassIcon] = useState(null);

    useEffect(() => {
        if (variantType === 'password') {
            setPassIcon(icon);
        }
    }, [icon, variantType]);

    const passToggler = () => {
        if (inputRef.current.type === 'password') {
            inputRef.current.type = 'text';
            setPassIcon(<FaEye />);
        } else {
            inputRef.current.type = 'password';
            setPassIcon(<FaEyeSlash />);
        }
    };

    if (variant) {
        return (
            <div className={`${styles.inputGroup}${inputGroupClass && ' ' + inputGroupClass}`}>
                <div
                    className={`${styles.inputGroupInner} ${styles[variant]}${
                        variantType && ' ' + styles[variantType]
                    }`}
                >
                    {label && (
                        <label className={`${styles.label} ${styles['style-3']}`} htmlFor={id}>
                            {label}
                        </label>
                    )}
                    {as === 'textarea' ? (
                        <textarea
                            className={`${styles.input} ${styles[variant]}${className && ' ' + className}`}
                            id={id}
                            cols="30"
                            rows="6"
                            {...res}
                        ></textarea>
                    ) : (
                        <input
                            ref={inputRef}
                            type={type || 'text'}
                            className={`${styles.input} ${styles[variant]}${variantType && ' ' + styles[variantType]}${
                                className && ' ' + className
                            }`}
                            id={id}
                            {...res}
                        />
                    )}
                    {icon && (
                        <label
                            className={`${styles.label} ${styles[variant]}${variantType && ' ' + styles[variantType]}`}
                            onClick={passToggler || undefined}
                        >
                            {variantType === 'password' ? passIcon : icon}
                        </label>
                    )}
                    {children && (
                        <label className={`${styles.label} ${styles[variant]}`} htmlFor={id}>
                            {children}
                        </label>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.inputGroup}>
            <label htmlFor={label.toLowerCase()} className={styles.label}>
                {label}
            </label>
            <div className={styles.inputGroupInner}>
                <input type={type || 'text'} className={styles.input} id={label.toLowerCase()} {...res} />
                <button type="submit" className={styles.submitBtn}>
                    <BsArrowRightShort />
                </button>
            </div>
        </div>
    );
}
