import Image from 'next/image';
import { BsArrowRight, BsFillStarFill } from 'react-icons/bs';
import bgImg from '../../assets/img/bg.png';
import personImg from '../../assets/img/person.png';
import personBg from '../../assets/img/personBg.png';
import reviewImg from '../../assets/img/review-img.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import BgImg from '../bgImg/BgImg';
import Button from '../button/Button';
import Container from '../container/Container';
import Section from '../section/Section';
import Socials from '../socials/Socials';
import Text from '../text/Text';
import styles from './hero.module.scss';

export default function Hero() {
    const { headerHeight } = UseHeaderContext();

    return (
        <Section className={styles.section} style={{ paddingTop: headerHeight / 16 + 3.875 + 'rem' }}>
            <BgImg>
                <Image src={bgImg} alt="Banner Image" layout="fill" placeholder="blur" />
            </BgImg>
            <Container className={styles.container}>
                <div className={`row ${styles.row}`}>
                    <div>
                        <Text variant="title-2" className={styles.subtitle}>
                            An apprentice education from experts
                        </Text>
                        <Text variant="heading" className={styles.heading}>
                            Consultation based learning
                        </Text>
                        <Text className={styles.text}>
                            We believe that solution-centric education should be the most accessible resource in the
                            digital age. Eduzuka is committed to building this reality and propagating communities of
                            like minded, skilled and action oriented people to realize their success! ...
                        </Text>
                        <div className={styles.buttonsGroup}>
                            <Button variant="style-2" icon={<BsArrowRight />} iconPlacement="right">
                                Start learning
                            </Button>
                            <Button>About us</Button>
                        </div>
                        <div className={styles.followUs}>
                            <h4 className={styles.followText}>Follow us</h4>
                            <Socials />
                        </div>
                    </div>
                    <div>
                        <div className={styles.heroImgPart}>
                            <div className={styles.heroImgBg}>
                                <div className={styles.personBg}>
                                    <Image src={personBg} alt="bg" />
                                </div>
                                <Image src={personImg} alt="Person" />
                                <div className={styles.aboutPerson}>
                                    <div>
                                        <div className={styles.reviewImg}>
                                            <Image src={reviewImg} alt="Review Image" />
                                        </div>
                                    </div>
                                    <div>
                                        <Text variant="body-3">Esther Howard</Text>
                                        <Text className={styles.aboutText}>325k Total Participants</Text>
                                        <div className={styles.aboutRating}>
                                            <span className={styles.ratingCount}>4.5</span>
                                            <ul className={styles.ratings}>
                                                <li>
                                                    <BsFillStarFill />
                                                </li>
                                                <li>
                                                    <BsFillStarFill />
                                                </li>
                                                <li>
                                                    <BsFillStarFill />
                                                </li>
                                                <li>
                                                    <BsFillStarFill />
                                                </li>
                                                <li>
                                                    <BsFillStarFill />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
