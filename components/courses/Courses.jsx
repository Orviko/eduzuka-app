import { useState } from 'react';
import Course from '../course/Course';
import Text from '../text/Text';
import styles from './courses.module.scss';

export default function Courses() {
    const [bodyHeight, setBodyHeight] = useState(0);

    return (
        <div>
            <Text variant="title-4">
                <span>Your</span> Course
            </Text>
            <div className={styles.courses}>
                <Course
                    course={{
                        src: '/courses/1.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'You require more than 3 lessons of over 10 mins each to publish a course',
                        status: 'error',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
                <Course
                    course={{
                        src: '/courses/2.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'Course is live!',
                        status: 'active',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
                <Course
                    course={{
                        src: '/courses/3.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'Course is live!',
                        status: 'active',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
                <Course
                    course={{
                        src: '/courses/3.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'Course is live!',
                        status: 'active',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
                <Course
                    course={{
                        src: '/courses/1.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'Course is live!',
                        status: 'active',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
                <Course
                    course={{
                        src: '/courses/2.png',
                        time: '10 min',
                        title: 'Introduction to sales',
                        desc: 'Course is live!',
                        status: 'active',
                    }}
                    bodyHeight={bodyHeight}
                    setBodyHeight={setBodyHeight}
                />
            </div>
        </div>
    );
}
