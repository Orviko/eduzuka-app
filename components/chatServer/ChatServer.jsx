import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsHeadphones } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosSettings, IoMdMic, IoMdMicOff } from 'react-icons/io';
import { MdHeadsetOff } from 'react-icons/md';
import { UseWindowContext } from '../../contexts/WindowContext';
import ChatChannel from '../chatChannel/ChatChannel';
import styles from './chatServer.module.scss';

export default function ChatServer({ mgsStyles, setMgsStyles, goMgsEnd }) {
    const [interactions, setInteractions] = useState({ muted: false, deafen: false });
    const [profileHeight, setProfileHeight] = useState(0);
    const profileRef = useRef(null);
    const { windowWidth } = UseWindowContext();

    const getProfileHeight = useCallback(() => {
        setProfileHeight(profileRef.current.getBoundingClientRect().height);
    }, []);

    useEffect(() => {
        getProfileHeight();
        window.addEventListener('resize', getProfileHeight);
        return () => window.removeEventListener('resize', getProfileHeight);
    }, [getProfileHeight]);

    const onInteractionsHandler = (typeName) => {
        setInteractions((prevState) => ({
            ...prevState,
            [typeName]: prevState[typeName] ? false : true,
        }));
    };

    const chatServerClickHandler = () => {
        windowWidth < 992 &&
            setMgsStyles((prevState) => ({
                ...prevState,
                leftTtX: '-100%',
                left: '1rem',
                mgsPointer: 'auto',
                ml: 0,
                mgsOverlay: false,
            }));

        setTimeout(goMgsEnd, 500);
    };

    return (
        <div className={styles.server} style={{ marginBottom: profileHeight }}>
            <div className={styles.serverView}>
                <div className={styles.overlay}></div>
                <div className={styles.imgBox}>
                    <Image
                        src="/chat-servers/server-cover.png"
                        alt="Server name"
                        width={263}
                        height={200}
                        objectFit="cover"
                    />
                </div>
                <div className={styles.viewBottom}>
                    <div className={styles.viewTxt}>
                        <p>Bio study Plan</p>
                        <span className={styles.icon}>
                            <FiChevronDown />
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.channels}>
                {[
                    {
                        title: 'Resource',
                        channels: [
                            { channel: 'Amet amet ultrices.', isActive: false },
                            { channel: 'Tortor mi proin feugiat.', isActive: false },
                        ],
                    },
                    {
                        title: 'Student lounge',
                        channels: [
                            { channel: 'Laoreet facilisis egestas.', isActive: true },
                            { channel: 'Scelerisque sagittis.', isActive: false },
                            { channel: 'Sit rhoncus tortor diam.', isActive: false },
                            { channel: 'In a volutpat volutpat.', isActive: false },
                        ],
                    },
                    {
                        title: 'Off topic/School',
                        channels: [
                            { channel: 'Quam interdum enim.', isActive: false },
                            { channel: 'Est suspendisse.', isActive: false },
                            { channel: 'Rhoncus nisl eget.', isActive: false },
                        ],
                    },
                ].map(({ title, channels }, index) => {
                    return (
                        <ChatChannel
                            key={index}
                            title={title}
                            channels={channels}
                            chatServerClickHandler={chatServerClickHandler}
                        />
                    );
                })}
            </div>
            <div
                className={styles.userProfile}
                ref={profileRef}
                style={{ transform: `translateX(${mgsStyles.leftTtX || 0})` }}
            >
                <div className={styles.userInfo}>
                    <div className={styles.imgBox}>
                        <Image src="/users/chat-profile.png" alt="User" width={35} height={35} />
                        <span className={styles.active}></span>
                    </div>
                    <div className={styles.details}>
                        <h2 className={styles.userName}>Jhon Doe</h2>
                        <h5 className={styles.userTitle}>Designation</h5>
                    </div>
                </div>
                <div className={styles.interactions}>
                    <button type="button" className={styles.inter} onClick={() => onInteractionsHandler('muted')}>
                        {interactions.muted ? <IoMdMicOff /> : <IoMdMic />}
                    </button>
                    <button type="button" className={styles.inter} onClick={() => onInteractionsHandler('deafen')}>
                        {interactions.deafen ? <MdHeadsetOff /> : <BsHeadphones />}
                    </button>
                    <button type="button" className={styles.inter}>
                        <IoIosSettings />
                    </button>
                </div>
            </div>
        </div>
    );
}
