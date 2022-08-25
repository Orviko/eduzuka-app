import Container from '../container/Container';
import Input from '../input/Input';
import Section from '../section/Section';
import Text from '../text/Text';
import styles from './newsletter.module.scss';

export default function Newsletter() {
    return (
        <Section className={styles.section}>
            <Container>
                <div className={styles.newsletter}>
                    <div>
                        <Text variant="heading-2" className={styles['heading-2']}>
                            Newsletter
                        </Text>
                        <Text>Interdum lectus volutpat nulla elit. In sit mattis aliquam.</Text>
                    </div>
                    <div>
                        <form>
                            <Input type="email" label="Subscribe" placeholder="Email address" required />
                        </form>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
