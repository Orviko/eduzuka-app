import Image from 'next/image';
import bgImg from '../../assets/img/bg-card.png';
import BgImg from '../bgImg/BgImg';
import Button from '../button/Button';
import styles from './offerCard.module.scss';

export default function OfferCard({ offer }) {
    // destructure
    const { title, desc } = offer;

    return (
        <div className={styles.offer}>
            <BgImg>
                <Image src={bgImg} alt="Bg Image" layout="fill" placeholder="blur" />
            </BgImg>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.desc}>{desc}</p>
            <Button variant="style-5">Learn more</Button>
        </div>
    );
}
