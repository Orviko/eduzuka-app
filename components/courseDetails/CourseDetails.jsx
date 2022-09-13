import Image from 'next/image';
import { Sticky, StickyContainer } from 'react-sticky';
import bgImg from '../../assets/img/bg.png';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import BgImg from '../bgImg/BgImg';
import Container from '../container/Container';
import CourseDetailsContents from '../courseDetailsContents/CourseDetailsContents';
import CourseDetailsRight from '../courseDetailsRight/CourseDetailsRight';
import Section from '../section/Section';
import styles from './courseDetails.module.scss';

export default function CourseDetails() {
    const { headerHeight } = UseHeaderContext();
    const { windowWidth } = UseWindowContext();

    return (
        <Section style={{ paddingTop: headerHeight / 16 + 2.5 + 'rem' }}>
            <BgImg maxHeight={837}>
                <Image src={bgImg} alt="Banner Image" layout="fill" placeholder="blur" />
            </BgImg>
            <Container>
                <div className={styles.courseDetails}>
                    <CourseDetailsContents />
                    {windowWidth > 992 ? (
                        <StickyContainer>
                            <Sticky topOffset={-(headerHeight + 30)}>
                                {({ style }) => (
                                    <div style={{ ...style, top: style.top === 0 ? headerHeight + 30 : style.top }}>
                                        <CourseDetailsRight />
                                    </div>
                                )}
                            </Sticky>
                        </StickyContainer>
                    ) : (
                        <CourseDetailsRight />
                    )}
                </div>
            </Container>
        </Section>
    );
}
