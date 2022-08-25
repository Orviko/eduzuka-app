import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Button from '../button/Button';
import Input from '../input/Input';
import styles from './ratingReviews.module.scss';

export default function RatingReviews() {
    return (
        <div className={styles.ratingReviews}>
            <h2 className={styles.title}>Rating & Reviews</h2>
            <form>
                <Input
                    type="text"
                    label="Full name"
                    placeholder="Your Full name here"
                    id="fullName"
                    variant="style-3"
                    variantType="--2"
                    required
                />
                <Input
                    type="email"
                    label="Email"
                    placeholder="Your e-mail here"
                    id="userEmail"
                    variant="style-3"
                    variantType="--2"
                    required
                />
                <Input
                    as="textarea"
                    label="Message"
                    placeholder="Type your comment here"
                    id="message"
                    variant="style-3"
                    variantType="--2"
                    required
                />
                <div className={styles.ratingReviewsFooter}>
                    <div className={styles.reviewsWrapper}>
                        <span>Review</span>
                        <ul className={styles.reviews}>
                            <li>
                                <AiFillStar />
                            </li>
                            <li>
                                <AiFillStar />
                            </li>
                            <li>
                                <AiFillStar />
                            </li>
                            <li>
                                <AiFillStar />
                            </li>
                            <li>
                                <AiOutlineStar />
                            </li>
                        </ul>
                    </div>
                    <Button type="submit" className={styles.submitBtn} variant="style-6">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
