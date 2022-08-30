import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsHeadphones } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { IoIosSettings, IoMdMic, IoMdMicOff } from 'react-icons/io';
import { MdHeadsetOff } from 'react-icons/md';
import ChatChannel from '../chatChannel/ChatChannel';
import styles from './chatServer.module.scss';

export default function ChatServer() {
    const [interactions, setInteractions] = useState({ muted: false, deafen: false });
    const [profileHeight, setProfileHeight] = useState(0);
    const profileRef = useRef(null);

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
                <ChatChannel
                    title="Resource"
                    channels={[
                        { channel: 'Amet amet ultrices.', isActive: false },
                        { channel: 'Tortor mi proin feugiat.', isActive: false },
                    ]}
                />
                <ChatChannel
                    title="Student lounge"
                    channels={[
                        { channel: 'Laoreet facilisis egestas.', isActive: true },
                        { channel: 'Scelerisque sagittis.', isActive: false },
                        { channel: 'Sit rhoncus tortor diam.', isActive: false },
                        { channel: 'In a volutpat volutpat.', isActive: false },
                    ]}
                />
                <ChatChannel
                    title="Off topic/School"
                    channels={[
                        { channel: 'Quam interdum enim.', isActive: false },
                        { channel: 'Est suspendisse.', isActive: false },
                        { channel: 'Rhoncus nisl eget.', isActive: false },
                    ]}
                />
            </div>
            <div className={styles.userProfile} ref={profileRef}>
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
