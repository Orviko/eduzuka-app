import Head from 'next/head';
import { useRouter } from 'next/router';
import CourseDetails from '../../components/courseDetails/CourseDetails';
import NewsLetter from '../../components/newsletter/Newsletter';

export default function CoursePage() {
    const router = useRouter();

    // destructure
    const { courseId } = router.query;

    return (
        <>
            <Head>
                <title>Course Details || Eduzuka</title>
            </Head>
            <CourseDetails />
            <NewsLetter />
        </>
    );
}
