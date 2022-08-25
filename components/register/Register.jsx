import Link from 'next/link';
import { useState } from 'react';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { FaEnvelope, FaEyeSlash, FaUserPlus } from 'react-icons/fa';
import Button from '../button/Button';
import CountryPhoneInput from '../countryPhoneInput/CountryPhoneInput';
import FormSlider from '../formSlider/FormSlider';
import Input from '../input/Input';
import InputGroup from '../inputGroup/InputGroup';
import RegLog from '../regLog/RegLog';
import RegLogContainer from '../regLogContainer/RegLogContainer';
import Text from '../text/Text';
import styles from './register.module.scss';

export default function Register() {
    const [inputPhoneCountry, setInputPhoneCountry] = useState({
        country: {
            code: 'US',
            name: 'United States',
        },
        phone: {
            code: '+1',
        },
    });

    return (
        <RegLogContainer>
            <div>
                <FormSlider />
            </div>
            <div className={styles.formBox}>
                <RegLog title="Sign Up to Eduzuka" withText="Signup with" orText="Or signup">
                    <form className={styles.form}>
                        <Input type="text" icon={<FaUserPlus />} placeholder="Full name" variant="style-2" required />
                        <InputGroup>
                            <Input type="email" icon={<FaEnvelope />} placeholder="Email" variant="style-2" required />
                            <CountryPhoneInput
                                inputPhoneCountry={inputPhoneCountry}
                                setInputPhoneCountry={setInputPhoneCountry}
                            />
                        </InputGroup>
                        <InputGroup>
                            <CountryPhoneInput
                                variant="country"
                                inputPhoneCountry={inputPhoneCountry}
                                setInputPhoneCountry={setInputPhoneCountry}
                            />
                            <Input
                                type="number"
                                placeholder="Age"
                                icon={<BsFillCalendarCheckFill />}
                                variant="style-2"
                                required
                            />
                        </InputGroup>
                        <Input
                            type="password"
                            icon={<FaEyeSlash />}
                            placeholder="Password"
                            variant="style-2"
                            variantType="password"
                            required
                        />
                        <Input
                            type="password"
                            icon={<FaEyeSlash />}
                            placeholder="Confirm Password"
                            variant="style-2"
                            variantType="password"
                            required
                        />
                        <Input type="checkbox" variant="checkbox" id="acceptTerms" required>
                            I have read and agree to <Link href="/">Terms & Conditions, </Link>{' '}
                            <Link href="/">Privacy Policy</Link> and <Link href="/">Cookie Policy</Link>.
                        </Input>
                        <Button type="submit">Submit</Button>
                        <Text className={styles.text}>
                            Already a member? <Link href="/login">Log in</Link>
                        </Text>
                    </form>
                </RegLog>
            </div>
        </RegLogContainer>
    );
}
