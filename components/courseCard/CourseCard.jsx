import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import Button from '../button/Button';
import Socials from '../socials/Socials';
import Text from '../text/Text';
import styles from './courseCard.module.scss';

export default function CourseCard() {
    const [isMediaOpen, setIsMediaOpen] = useState(false);

    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isMediaOpen}
                videoId="YE7VzlLtp-4"
                onClose={() => setIsMediaOpen(false)}
            />

            <div className={styles.card}>
                <div className={styles.imgBox}>
                    <Image src="/courses/1.png" alt="Course 1" width={339} height={220} objectFit="cover" />
                    <button className={styles.playBtn} onClick={() => setIsMediaOpen(true)}>
                        <BsFillPlayFill />
                    </button>
                    <span className={styles.courseTime}>7 min</span>
                </div>
                <div className={styles.cardBody}>
                    <header className={styles.header}>
                        <h4 className={`${styles.subtitle} ${styles['--2']}`}>Eduzuka online bootcamp</h4>
                        <Text variant="title-5" className={styles.title}>
                            The science of learning
                        </Text>
                        <h4 className={styles.subtitle}>Tailor experience to solve your problems</h4>
                    </header>
                    <div className={styles.instructor}>
                        <div className={styles.instructorImg}>
                            <Image src="/users/instructor.png" alt="Instructor Image" width={55} height={55} />
                        </div>
                        <div>
                            <h3 className={styles.name}>Eric fairweather</h3>
                            <h5 className={styles.title}>Ceo: Lviah Energy, eduzuka education</h5>
                        </div>
                    </div>
                    <Button variant="style-7">Enroll!</Button>
                    <div className={styles.shareWrapper}>
                        <div className={styles.shareBtn}>
                            <AiOutlineShareAlt />
                            Share
                        </div>
                        <Socials variant="style-3" />
                    </div>
                </div>
            </div>
        </>
    );
}
