import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';
import ChatChannel from '../chatChannel/ChatChannel';
import styles from './chatServer.module.scss';

export default function ChatServer() {
    return (
        <div className={styles.server}>
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
                        { channel: 'Quam interdum enim.', isActive: true },
                        { channel: 'Est suspendisse.', isActive: false },
                        { channel: 'Rhoncus nisl eget.', isActive: false },
                    ]}
                />
            </div>
        </div>
    );
}
