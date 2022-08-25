import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaApple, FaFacebook, FaFacebookF, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';
import styles from './socials.module.scss';

// classNames
const styleNames = { facebook: 'facebook', linkedin: 'linkedin' };

export default function Socials({ variant, ulClass = '' }) {
    if (variant === 'style-2') {
        return (
            <ul className={`${styles.socialLists2}${ulClass && ' ' + styles[ulClass]}`}>
                {[
                    { link: 'https://apple.com', icon: <FaApple />, name: 'Apple' },
                    { link: 'https://google.com', icon: <FcGoogle />, name: 'Google' },
                    { link: 'https://fb.com', icon: <FaFacebook />, name: 'Facebook' },
                    { link: 'https://linkedin.com', icon: <GrLinkedinOption />, name: 'Linkedin' },
                ].map(({ link, icon, name }) => {
                    return (
                        <li key={name}>
                            <Link href={link}>
                                <a
                                    target="_blank"
                                    className={
                                        name.toLowerCase() === styleNames[name.toLowerCase()]
                                            ? styles[styleNames[name.toLowerCase()]]
                                            : ''
                                    }
                                >
                                    <span>{icon}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    } else if (variant === 'style-3') {
        return (
            <ul className={`${styles.socialLists3}${ulClass && ' ' + styles[ulClass]}`}>
                {[
                    { link: 'https://fb.com', icon: <FaFacebookF />, name: 'Facebook' },
                    { link: 'https://twitter.com', icon: <AiOutlineTwitter />, name: 'Twitter' },
                    { link: 'https://telegram.com', icon: <FaTelegramPlane />, name: 'Telegram' },
                    { link: 'https://whatsapp.com', icon: <FaWhatsapp />, name: 'Whatsapp' },
                    { link: 'https://mail.com', icon: <MdOutlineEmail />, name: 'envelope' },
                ].map(({ link, icon, name }) => {
                    return (
                        <li key={name}>
                            <Link href={link}>
                                <a target="_blank" className={styles[name.toLowerCase()]}>
                                    <span>{icon}</span>
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        );
    }

    return (
        <ul className={styles.socialLists}>
            {[
                { link: 'https://twitter.com', icon: <BsTwitter />, name: 'Twitter' },
                { link: 'https://instagram.com', icon: <AiFillInstagram />, name: 'Instagram' },
                { link: 'https://youtube.com', icon: <BsYoutube />, name: 'Youtube' },
            ].map(({ link, icon, name }) => {
                return (
                    <li key={name}>
                        <Link href={link}>
                            <a target="_blank">{icon}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
