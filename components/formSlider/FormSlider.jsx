import Image from 'next/image';
import learningImg from '../../assets/img/learning.svg';
import { colors } from '../../styles/variables';
import Button from '../button/Button';
import Slider from '../slider/Slider';
import Text from '../text/Text';
import styles from './formSlider.module.scss';

export default function FormSlider() {
    return (
        <>
            <style>
                {`
                    .carousel .control-dots {
                        margin: 0;
                    }
                    .carousel .control-dots .dot {
                        margin: 0 0.688rem;
                        opacity: 1;
                    }
                    .carousel .control-dots .dot.selected,
                    .carousel .control-dots .dot:hover {
                        background-color: ${colors.$secondary}
                    }
                `}
            </style>
            <Slider>
                <div>
                    <Text variant="title-3">Hac urna in nunc gravida sed hac aliquam tortor arcu</Text>
                    <div className={styles.imgBox}>
                        <Image src={learningImg} alt="Learning" />
                    </div>
                    <Text variant="body-3">
                        Dignissim lectus a, elementum arcu est arcu elementum. Dolor sit vitae ac varius ut mattis
                        phasellus facilisis. Interdum lectus volutpat nulla elit. In sit mattis aliquam.
                    </Text>
                    <Button className={styles.button} variant="style-3" btnHelper="center">
                        Learn more
                    </Button>
                </div>
                <div>
                    <Text variant="title-3">Hac urna in nunc gravida sed hac aliquam tortor arcu</Text>
                    <div className={styles.imgBox}>
                        <Image src={learningImg} alt="Learning" />
                    </div>
                    <Text variant="body-3">
                        Dignissim lectus a, elementum arcu est arcu elementum. Dolor sit vitae ac varius ut mattis
                        phasellus facilisis. Interdum lectus volutpat nulla elit. In sit mattis aliquam.
                    </Text>
                    <Button className={styles.button} variant="style-3" btnHelper="center">
                        Learn more
                    </Button>
                </div>
                <div>
                    <Text variant="title-3">Hac urna in nunc gravida sed hac aliquam tortor arcu</Text>
                    <div className={styles.imgBox}>
                        <Image src={learningImg} alt="Learning" />
                    </div>
                    <Text variant="body-3">
                        Dignissim lectus a, elementum arcu est arcu elementum. Dolor sit vitae ac varius ut mattis
                        phasellus facilisis. Interdum lectus volutpat nulla elit. In sit mattis aliquam.
                    </Text>
                    <Button className={styles.button} variant="style-3" btnHelper="center">
                        Learn more
                    </Button>
                </div>
            </Slider>
        </>
    );
}
