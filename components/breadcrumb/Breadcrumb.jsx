import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';
import styles from './breadcrumb.module.scss';

export default function Breadcrumb() {
    return (
        <div className={styles.breadcrumb}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                    <span className={styles.separator}>
                        <BiChevronRight />
                    </span>
                </li>
                <li>
                    <Link href="/courses">Course category</Link>
                    <span className={styles.separator}>
                        <BiChevronRight />
                    </span>
                </li>
                <li>Course category name</li>
            </ul>
        </div>
    );
}
