import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import audioBooks from '../../assets/icons/audiobook.svg';
import mediaPlayer from '../../assets/icons/media-player.svg';
import podCast from '../../assets/icons/podcast.svg';
import textIcon from '../../assets/icons/text.svg';
import Button from '../button/Button';
import Container from '../container/Container';
import Product from '../product/Product';
import Section from '../section/Section';
import Text from '../text/Text';
import styles from './products.module.scss';

export default function Products() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={`row ${styles.row}`}>
                    <div>
                        <Text variant="heading">Our Products</Text>
                        <Text className={styles.text}>
                            Eduzuka strives to make information accessible by consolidating current distribution media.
                            We want busy, corporate learners to keep up with their skills through audio content. We want
                            studious new graduates to be able to meticulously follow expert content through video. We
                            want rural learners to access all the information they want by providing it in low data text
                            versions and we want to keep the spirit of libraries alive for the lovely bookworms by
                            keeping ebooks.
                        </Text>
                        <Button variant="style-2" icon={<BsArrowRight />} iconPlacement="right">
                            Start learning
                        </Button>
                    </div>
                    <div className={styles.productContainer}>
                        <Product
                            icon={mediaPlayer}
                            title="Video"
                            desc="Engage deeply by following videos meticulously"
                        />
                        <Product
                            icon={textIcon}
                            title="Text"
                            desc="Learn anywhere with low data consumption text content"
                            className={styles.diff}
                        />
                        <Product
                            icon={audioBooks}
                            title="Audiobooks"
                            desc="Learn on the go with coherent audio content when your eyes are engaged"
                        />
                        <Product
                            icon={podCast}
                            title="Podcasts"
                            desc="Engage with the free flowing thoughts of the experts you love"
                            className={styles.diff}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
