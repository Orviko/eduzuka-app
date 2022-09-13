import Image from 'next/image';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import playBtn from '../../assets/img/play-btn.png';
import styles from './mediaPlayer.module.scss';

export default function MediaPlayer({ src, alt }) {
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    return (
        <>
            <div className={styles.mediaPlayer}>
                <div className={styles.mediaPoster}>
                    <Image src={src} alt={alt || 'Media Player'} placeholder="blur" />
                </div>
                <button className={styles.playBtn} onClick={() => setIsMediaOpen(true)}>
                    <Image src={playBtn} alt="Play Button" />
                </button>
            </div>

            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isMediaOpen}
                videoId="YE7VzlLtp-4"
                onClose={() => setIsMediaOpen(false)}
            />
        </>
    );
}
