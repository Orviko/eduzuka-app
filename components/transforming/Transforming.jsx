import Image from 'next/image';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import bgImg from '../../assets/img/bg-2.png';
import transformingImg from '../../assets/img/transforming-img.png';
import BgImg from '../bgImg/BgImg';
import Button from '../button/Button';
import Container from '../container/Container';
import MediaPlayer from '../mediaPlayer/MediaPlayer';
import Section from '../section/Section';
import Text from '../text/Text';
import styles from './transforming.module.scss';

export default function Transforming() {
    return (
        <Section>
            <BgImg>
                <Image src={bgImg} alt="Banner Image" layout="fill" priority />
            </BgImg>
            <Container>
                <div className={`row ${styles.row}`}>
                    <div>
                        <MediaPlayer src={transformingImg} alt="Transforming Img" />
                    </div>
                    <div>
                        <Text variant="heading" variantType="--2">
                            Transforming The Social <span>Education Landscape</span>
                        </Text>
                        <Text className={styles.text}>
                            We believe that education began to fail when it seized to be a participatory, and communal
                            affair. We want to change that by fully integrating the necessary tools that will allow
                            learners to collaborate, ideate and connect in order to thoroughly solve their own problems,
                            become experts within their own right and build scalable solutions! Using our comprehensive
                            learning interface, you can tap into rich learning resources and meet the most enthusiastic,
                            like-minded people and perhaps even publish your own knowledge!
                        </Text>
                        <Button variant="style-2" icon={<BsArrowRight />} iconPlacement="right">
                            Contact us
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
