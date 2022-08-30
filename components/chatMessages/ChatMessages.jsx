import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiImage } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';
import { VscSmiley } from 'react-icons/vsc';
import PerfectScrollBar from 'react-perfect-scrollbar';
import calenderEdit from '../../assets/icons/calender-edit.svg';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import ChatMgsItem from '../chatMgsItem/ChatMgsItem';
import styles from './chatMessages.module.scss';

const DynamicPicker = dynamic(() => import('emoji-picker-react'), {
    ssr: false,
});

export default function ChatMessages() {
    const [mgsBottomHeight, setMgsBottomHeight] = useState(0);
    const { chatHeaderHeight } = UseHeaderContext();
    const mgsBottomRef = useRef(null);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [isVisibleEmoji, setIsVisibleEmoji] = useState(false);

    const getMgsHeight = useCallback(() => {
        setMgsBottomHeight(mgsBottomRef.current.getBoundingClientRect().height);
    }, []);
    useEffect(() => {
        getMgsHeight();
        window.addEventListener('resize', getMgsHeight);
        return () => window.removeEventListener('resize', getMgsHeight);
    }, [getMgsHeight]);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };

    return (
        <main
            className={styles.mgsContainer}
            style={{
                paddingTop: chatHeaderHeight / 16 + 1.875 + 'rem',
                paddingBottom: mgsBottomHeight / 16 + 2 + 'rem',
            }}
        >
            <PerfectScrollBar>
                <div
                    className={styles.mgsInner}
                    style={{ height: `calc(100vh - ${chatHeaderHeight / 16 + 3.875}rem)` }}
                >
                    <header className={styles.mgsHeader}>
                        <h2 className={styles.onlineTitle}>ONLINE — 6</h2>
                    </header>
                    <div className={styles.mgsWrapper}>
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/1.png',
                                name: 'Devon Lane',
                                time: 'Today at 9:18 am',
                                para: "backing up the alarm won't do anything, we need to quantify the digital IB application!",
                                status: true,
                            }}
                        />
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/2.png',
                                name: 'Darlene Robertson',
                                time: 'Today at 9:18 am',
                                para: 'If we connect the alarm, we can get to the SQL port ',
                                status: true,
                            }}
                        />
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/3.png',
                                name: 'Ralph Edwards',
                                time: 'Today at 9:18 am',
                                para: 'If we synthesize the program, we can get to the TCP firewall through the auxiliary FTP application!',
                                status: true,
                            }}
                        />
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/4.png',
                                name: 'Ronald Richards',
                                time: 'Today at 9:18 am',
                                para: "backing up the alarm won't do anything, we need to quantify the digital IB application!",
                                status: true,
                            }}
                        />
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/5.png',
                                name: 'Cody Fisher',
                                time: 'Today at 9:18 am',
                                para: 'Use the wireless HTTP capacitor, then you can quantify the haptic firewall!',
                                status: true,
                            }}
                        />
                        <ChatMgsItem
                            mgsInfo={{
                                src: '/users/messages/6.png',
                                name: 'Cameron Williamson',
                                time: 'Today at 9:18 am',
                                para: 'We need to parse the redundant GB system!',
                                link: {
                                    href: 'http://eduzuka.com',
                                    img: '/eduzuka.png',
                                },
                                status: true,
                            }}
                        />
                    </div>
                </div>
            </PerfectScrollBar>
            <div className={styles.mgsBottom} ref={mgsBottomRef}>
                <div className={styles.mgsReacts}>
                    <div className={styles.reactBtnWrapper}>
                        <input type="file" name="mgsFile" id="mgsFile" hidden style={{ display: 'none' }} />
                        <button type="button" className={styles.reactBtn}>
                            <label htmlFor="mgsFile" className={styles.iconBx}>
                                <FiImage />
                            </label>
                            <span className={styles.tooltip}>Image</span>
                        </button>
                    </div>
                    <div className={styles.reactBtnWrapper}>
                        <div className={styles.emojiPicker}>
                            {isVisibleEmoji && (
                                <DynamicPicker onEmojiClick={onEmojiClick} searchPlaceholder="search emoji" />
                            )}
                        </div>
                        <button
                            type="button"
                            className={styles.reactBtn}
                            onClick={() => setIsVisibleEmoji((prevState) => !prevState)}
                        >
                            <span className={styles.iconBx}>
                                <VscSmiley />
                            </span>
                            <span className={styles.tooltip}>Emoji</span>
                        </button>
                    </div>
                    <div className={styles.reactBtnWrapper}>
                        <button type="button" className={styles.reactBtn}>
                            <label className={styles.iconBx}>
                                <Image src={calenderEdit} alt="Calender Edit" />
                            </label>
                            <span className={styles.tooltip}>Calender</span>
                        </button>
                    </div>
                    <div className={styles.reactBtnWrapper}>
                        <button type="button" className={styles.reactBtn}>
                            <span className={styles.iconBx}>
                                <AiOutlinePlus />
                            </span>
                            <span className={styles.tooltip}>Add</span>
                        </button>
                    </div>
                </div>
                <div className={styles.mgsWrite}>
                    <form className={styles.formBox}>
                        <input type="text" placeholder="Write message..." className={styles.input} required />
                        <button type="submit" className={styles.submitBtn}>
                            Send
                            <span className={styles.sIcon}>
                                <RiSendPlaneFill />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
