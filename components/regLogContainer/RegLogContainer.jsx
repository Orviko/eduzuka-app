import Image from 'next/image';
import bgImg from '../../assets/img/bg.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import BgImg from '../bgImg/BgImg';
import Container from '../container/Container';
import Section from '../section/Section';
import styles from './regLogContainer.module.scss';

export default function RegLogContainer({ children }) {
    const { headerHeight } = UseHeaderContext();

    return (
        <Section style={{ paddingTop: headerHeight / 16 + 2.5 + 'rem' }}>
            <BgImg>
                <Image src={bgImg} alt="Banner Image" layout="fill" placeholder="blur" />
            </BgImg>
            <Container className={styles.container}>
                <div className={styles.formContainer}>
                    <div className={`row ${styles.row}`}>{children}</div>
                </div>
            </Container>
        </Section>
    );
}
