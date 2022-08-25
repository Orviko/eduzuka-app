import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import Button from '../button/Button';
import Text from '../text/Text';
import styles from './course.module.scss';

export default function Course({ course, bodyHeight, setBodyHeight }) {
    const bodyRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            const bodyH = bodyRef.current.getBoundingClientRect().height;
            setBodyHeight((prevState) => (prevState < bodyH ? bodyH : prevState));
        }, 100);
    }, [setBodyHeight]);

    // destructure
    const { src, title, time, desc, status } = course;

    return (
        <div className={styles.course}>
            <div className={styles.imgBox}>
                <Image src={src} alt={title} layout="fill" objectFit="cover" />
                <span className={styles.time}>{time}</span>
            </div>
            <div
                ref={bodyRef}
                className={`${styles.body} ${styles[status]}`}
                style={{ height: bodyHeight === 0 ? 'auto' : bodyHeight + 'px' }}
            >
                <header className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    <span className={styles.icon}>
                        {status === 'active' ? <IoIosCheckmarkCircle /> : <IoIosCloseCircle />}
                    </span>
                </header>
                <Text className={styles.desc}>{desc}</Text>
                <Button variant="style-4" btnHelperClass={styles.btnHelper}>
                    Edit now
                </Button>
            </div>
        </div>
    );
}
