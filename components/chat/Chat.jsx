import Image from 'next/image';
import PerfectScrollBar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import bgImg from '../../assets/img/bg-chat.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import BgImg from '../bgImg/BgImg';
import ChatHeader from '../chatHeader/ChatHeader';
import ChatLeftSide from '../chatLeftSide/ChatLeftSide';
import ChatMessages from '../chatMessages/ChatMessages';
import ChatRightSide from '../chatRightSide/ChatRightSide';
import ChatServer from '../chatServer/ChatServer';
import styles from './chat.module.scss';

export default function Chat() {
    const { chatHeaderHeight } = UseHeaderContext();

    return (
        <section className={styles.section}>
            <BgImg>
                <Image src={bgImg} alt="Bg Image" layout="fill" placeholder="blur" />
            </BgImg>
            <ChatHeader />
            <div className={styles.leftSidebar} style={{ top: chatHeaderHeight }}>
                <PerfectScrollBar>
                    <ChatLeftSide />
                </PerfectScrollBar>
                <PerfectScrollBar>
                    <ChatServer />
                </PerfectScrollBar>
            </div>
            <ChatMessages />
            <ChatRightSide chatHeaderHeight={chatHeaderHeight} />
        </section>
    );
}
