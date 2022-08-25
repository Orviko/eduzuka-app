import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './slider.module.scss';

export default function Slider({ children }) {
    return (
        <div className={styles.slider}>
            <Carousel
                autoPlay
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                showStatus={false}
                stopOnHover={false}
                swipeable={false}
            >
                {children}
            </Carousel>
        </div>
    );
}
