import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BiHash } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
import styles from './chatChannel.module.scss';

export default function ChatChannel({ title, channels }) {
    const [conBoxHeight, setConBoxHeight] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const conBoxRef = useRef(null);

    const onClickHandler = () => {
        setIsVisible((prevState) => !prevState);
    };

    function getConBoxHeight() {
        setConBoxHeight(conBoxRef.current.scrollHeight);
    }
    useEffect(() => {
        getConBoxHeight();
        window.addEventListener('resize', getConBoxHeight);
        return () => window.removeEventListener('resize', getConBoxHeight);
    }, []);

    return (
        <div className={styles.channel}>
            <h2 className={styles.titleBtn} onClick={onClickHandler}>
                <span className={styles.icon}>
                    <FiChevronDown />
                </span>
                <span className={styles.tText}>{title}</span>
            </h2>
            <div
                ref={conBoxRef}
                className={`${styles.contentsBox}${!isVisible ? ' ' + styles.toggle : ''}`}
                style={{ height: conBoxHeight }}
            >
                <ul className={styles.chLists}>
                    {channels.map(({ channel, isActive }, i) => {
                        return (
                            <li key={i}>
                                <Link href="/">
                                    <a className={isActive ? styles.active : ''}>
                                        <span className={styles.icon}>
                                            <BiHash />
                                        </span>
                                        <p>{channel}</p>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
