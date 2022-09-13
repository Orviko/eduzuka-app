import AffiliateCard from '../affiliateCard/AffiliateCard';
import Text from '../text/Text';
import styles from './affiliates.module.scss';

export default function Affiliates() {
    return (
        <div>
            <Text variant="title-4">
                <span>Become</span> Affiliate
            </Text>
            <div className={styles.affiliates}>
                <AffiliateCard
                    affiliate={{
                        src: '/courses/3.png',
                        time: '62 min',
                        desc: 'Learn how to create beautiful scence in illustrator in 60 minutes',
                        user: {
                            name: 'Luna marandina',
                            title: 'Fanamara',
                            src: '/users/1.png',
                        },
                    }}
                />
                <AffiliateCard
                    affiliate={{
                        src: '/courses/3.png',
                        time: '62 min',
                        desc: 'Learn how to create beautiful scence in illustrator in 60 minutes',
                        user: {
                            name: 'Luna marandina',
                            title: 'Fanamara',
                            src: '/users/1.png',
                        },
                    }}
                />
                <AffiliateCard
                    affiliate={{
                        src: '/courses/3.png',
                        time: '62 min',
                        desc: 'Learn how to create beautiful scence in illustrator in 60 minutes',
                        user: {
                            name: 'Luna marandina',
                            title: 'Fanamara',
                            src: '/users/1.png',
                        },
                    }}
                />
            </div>
        </div>
    );
}
