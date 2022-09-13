import Link from 'next/link';
import { FaEnvelope, FaEyeSlash } from 'react-icons/fa';
import Button from '../button/Button';
import FormSlider from '../formSlider/FormSlider';
import Input from '../input/Input';
import RegLog from '../regLog/RegLog';
import RegLogContainer from '../regLogContainer/RegLogContainer';
import Text from '../text/Text';
import styles from './login.module.scss';

export default function Login() {
    return (
        <RegLogContainer>
            <div>
                <FormSlider />
            </div>
            <div className={styles.formBox}>
                <RegLog title="Login to Eduzuka" withText="Login with" orText="Or Login">
                    <form className={styles.form}>
                        <Input type="email" icon={<FaEnvelope />} placeholder="Email" variant="style-2" required />
                        <Input
                            type="password"
                            icon={<FaEyeSlash />}
                            placeholder="Password"
                            variant="style-2"
                            variantType="password"
                            required
                        />
                        <Button type="submit">Submit</Button>
                        <div>
                            <Text className={styles.text2}>
                                <Link href="/login">Forgot Password?</Link>
                            </Text>
                            <Text className={styles.text}>
                                New to Eduzuka? <Link href="/register">Register now</Link>
                            </Text>
                        </div>
                    </form>
                </RegLog>
            </div>
        </RegLogContainer>
    );
}
