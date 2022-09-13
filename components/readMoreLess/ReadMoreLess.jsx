import { useEffect, useRef, useState } from 'react';
import styles from './readMoreLess.module.scss';

export default function ReadMoreLess({ limitHeight = '5rem', children }) {
    const [haveMore, setHaveMore] = useState(true);
    const [moreHeight, setMoreHeight] = useState(null);
    const readMoreRef = useRef(null);

    useEffect(() => {
        setMoreHeight(readMoreRef.current.scrollHeight);
    }, []);

    const onBtnClick = () => {
        setHaveMore((prevState) => !prevState);
    };

    return (
        <div>
            <div
                ref={readMoreRef}
                className={styles.readMore}
                style={{ maxHeight: !haveMore ? moreHeight : limitHeight }}
            >
                {children}
            </div>
            <button type="button" className={styles.readMoreBtn} onClick={onBtnClick}>
                {haveMore ? 'Read more' : 'Read Less'}
            </button>
        </div>
    );
}
