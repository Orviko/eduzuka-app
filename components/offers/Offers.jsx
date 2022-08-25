import OfferCard from '../offerCard/OfferCard';
import offerStyles from '../offerCard/offerCard.module.scss';
import Text from '../text/Text';
import styles from './offers.module.scss';

export default function Offers() {
    return (
        <div>
            <Text variant="title-4">
                <span>Special</span> Offers
            </Text>
            <div className={styles.Offers}>
                <OfferCard
                    offer={{
                        title: (
                            <span>
                                <span className={offerStyles.highlight}>50 days</span>of Premium!
                            </span>
                        ),
                        desc: 'Get it before 01 february 2022',
                    }}
                />
                <OfferCard
                    offer={{
                        title: (
                            <span>
                                50 days<span className={offerStyles.highlight}>of Premium!</span>
                            </span>
                        ),
                        desc: 'Get it before 01 february 2022',
                    }}
                />
                <OfferCard
                    offer={{
                        title: (
                            <span>
                                <span className={offerStyles.highlight}>50 days</span>of Premium!
                            </span>
                        ),
                        desc: 'Get it before 01 february 2022',
                    }}
                />
            </div>
        </div>
    );
}
