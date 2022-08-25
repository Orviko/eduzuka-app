import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { UseWindowContext } from '../../contexts/WindowContext';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import CourseCard from '../courseCard/CourseCard';
import RatingReviews from '../ratingReviews/RatingReviews';
import ReadMoreLess from '../readMoreLess/ReadMoreLess.jsx';
import Text from '../text/Text';
import styles from './courseDetailsContents.module.scss';

export default function CourseDetailsContents() {
    const { windowWidth } = UseWindowContext();

    return (
        <div>
            <Breadcrumb />
            {windowWidth < 992 && (
                <div className={styles.courseCard}>
                    <CourseCard />
                </div>
            )}
            <div className={styles.courseContents}>
                <Text variant="heading-2" className={styles['heading-2']}>
                    The Science Of Learning - Tailoring Your Learning Lifestyle!
                </Text>
                <div className={styles.courseOverview}>
                    <ul className={styles.overviewLists}>
                        <li>
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
                        </li>
                        <li>
                            <span>Instructor:</span>Mark Eric Fairweather
                        </li>
                        <li>
                            <span>Last updated:</span>3/1/2022
                        </li>
                        <li>
                            <span>Category:</span> Course
                        </li>
                        <li className={styles.priceLi}>
                            <span className={styles.priceText}>Price:</span>
                            <span className={styles.price}>$15.00</span>
                            <span className={styles.beforePrice}>$18.00</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.contents}>
                    <div className={styles.contentBox}>
                        <h2 className={styles.contentTitle}>
                            About the <span>course</span>
                        </h2>
                        <ReadMoreLess limitHeight="4.25rem">
                            <p className={styles.contentText}>
                                This is an apprenticeship course. You will get to interact with me, the instructor, to
                                problem-solve your current learning situation as well as continue to consult with the
                                instructor and the rest of the community for enhanced and continuous growth.
                            </p>
                            <p className={styles.contentText}>
                                Learn the best practices to maximize your learning effectiveness and efficiency within
                                the Kenyan education system. You will learn how to develop a learning lifestyle that
                                guarantees more retention and application of the information you have learned, whilst
                                also providing foundational information for anyone to self-diagnose their current
                                learning situation
                            </p>
                        </ReadMoreLess>
                    </div>
                    <div className={styles.contentBox}>
                        <h2 className={styles.contentTitle}>
                            About the <span>course</span>
                        </h2>
                        <ReadMoreLess limitHeight="8.15rem">
                            <ul className={styles.contentLists}>
                                <li>Internet Marketing 101</li>
                                <li>First Steps</li>
                                <li>The Evolution of Online Marketing</li>
                                <li>Types of Internet Marketing</li>
                                <li>Terms Ideas and Concepts</li>
                                <li>Top internet Marketing Channels</li>
                                <li>How ClickBank fits in</li>
                            </ul>
                        </ReadMoreLess>
                    </div>
                    <div className={styles.contentBox}>
                        <h2 className={styles.contentTitle}>
                            About the <span>Instructor</span>
                        </h2>
                        <ReadMoreLess>
                            <p className={`${styles.contentText} ${styles['--2']}`}>
                                Kacey Duncan is ClickBank&#8217;s lead instructor and she&#8217;ll be your 1&#215;1
                                coach for this course. She will guide you step-by-step through every important milestone
                                and building block to see that first ClickBank paycheck in your account.
                            </p>
                            <p className={`${styles.contentText} ${styles['--2']}`}>
                                Kacey Duncan is ClickBank&#8217;s lead instructor and she&#8217;ll be your 1&#215;1
                                coach for this course. She will guide you step-by-step through every important milestone
                                and building block to see that first ClickBank paycheck in your account.
                            </p>
                        </ReadMoreLess>
                    </div>
                    <div className={styles.ratingReviewsBox}>
                        <RatingReviews />
                    </div>
                </div>
            </div>
        </div>
    );
}
