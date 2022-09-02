import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import PerfectScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useSwipeable } from 'react-swipeable';
import bgImg from '../../assets/img/bg-chat.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import BgImg from '../bgImg/BgImg';
import ChatHeader from '../chatHeader/ChatHeader';
import ChatLeftSide from '../chatLeftSide/ChatLeftSide';
import ChatMessages from '../chatMessages/ChatMessages';
import ChatRightSide from '../chatRightSide/ChatRightSide';
import ChatServer from '../chatServer/ChatServer';
import styles from './chat.module.scss';

export default function Chat() {
    const [mgsStyles, setMgsStyles] = useState({});
    const refsEl = { leftSidebar: useRef(null), chatMgs: useRef(null), rightSidebar: useRef(null) };
    const { chatHeaderHeight } = UseHeaderContext();
    const { windowWidth } = UseWindowContext();
    const swipeHandlers = useSwipeable({
        onSwipedLeft: (eventData) => {
            setMgsStyles((prevState) => ({
                ...prevState,
                ml: 0,
                left: '1rem',
                leftTtX: '-100%',
                mgsPointer: 'auto',
            }));
        },
        preventScrollOnSwipe: true,
    });

    useEffect(() => {
        setMgsStyles((prevState) => ({
            ...prevState,
            leftSidebarW: refsEl.leftSidebar.getBoundingClientRect().width,
            mgsPointer: windowWidth < 992 ? 'none' : 'auto',
        }));
    }, [refsEl.leftSidebar, setMgsStyles, windowWidth]);

    const refPassthrough = (el) => {
        swipeHandlers.ref(el);
        refsEl.leftSidebar = el;
    };

    return (
        <section className={styles.section}>
            <BgImg>
                <Image src={bgImg} alt="Bg Image" layout="fill" placeholder="blur" />
            </BgImg>
            <ChatHeader />
            <div
                className={styles.leftSidebar}
                style={{ top: chatHeaderHeight, transform: `translateX(${mgsStyles.leftTtX})` }}
                {...swipeHandlers}
                ref={refPassthrough}
            >
                <PerfectScrollBar>
                    <ChatLeftSide />
                </PerfectScrollBar>
                <PerfectScrollBar>
                    <ChatServer />
                </PerfectScrollBar>
            </div>
            <ChatMessages refsEl={refsEl} mgsStyles={mgsStyles} setMgsStyles={setMgsStyles} />
            <ChatRightSide
                chatHeaderHeight={chatHeaderHeight}
                refsEl={refsEl}
                mgsStyles={mgsStyles}
                setMgsStyles={setMgsStyles}
            />
        </section>
    );
}
