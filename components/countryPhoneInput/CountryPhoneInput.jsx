import Image from 'next/image';
import { useRef } from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import countryNames from 'react-phone-number-input/locale/en.json';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { colors } from '../../styles/variables';
import Input from '../input/Input';
import styles from './countryPhoneInput.module.scss';

export default function CountryPhoneInput({ variant, inputPhoneCountry, setInputPhoneCountry }) {
    const selectRef = useRef(null);
    const listsRef = useRef(null);

    const onClickHandler = async (countryCode, index) => {
        setInputPhoneCountry({
            country: {
                code: countryCode,
                name: countryNames[countryCode],
            },
            phone: {
                code: '+' + getCountryCallingCode(countryCode),
            },
            index,
        });
    };

    const selectToggler = () => {
        const selBox = selectRef.current;
        if (selBox.classList.contains('is--open')) {
            selBox.style.height = 0;
            selBox.style.borderColor = 'transparent';
            selBox.style.opacity = 0;
            selBox.style.visibility = 'hidden';
            selBox.classList.remove('is--open');
        } else {
            selBox.style.borderColor = colors['$neutral-4'];
            selBox.style.height = '13rem';
            selBox.style.opacity = 1;
            selBox.style.visibility = 'visible';
            selBox.classList.add('is--open');
        }

        inputPhoneCountry.index && listsRef.current.scrollToItem(inputPhoneCountry.index, 'center');
    };

    // destructure
    const { phone, country } = inputPhoneCountry;

    function SelectOption() {
        return (
            <div ref={selectRef} className={styles.selectBox}>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            innerElementType="ul"
                            ref={listsRef}
                            className={`${styles.countryLists}`}
                            itemData={getCountries()}
                            height={height}
                            itemCount={getCountries().length}
                            itemSize={35}
                            width={width}
                        >
                            {({ style, data: cCodes, index }) => {
                                return (
                                    <li
                                        style={style}
                                        className={country.code === cCodes[index] ? styles.current : ''}
                                        onClick={() => onClickHandler(cCodes[index], index)}
                                    >
                                        <div className={styles.countryImg}>
                                            <Image
                                                src={`/flags/3x2/${cCodes[index]}.svg`}
                                                alt={cCodes[index]}
                                                width={14}
                                                height={10}
                                            />
                                        </div>
                                        <span>{countryNames[cCodes[index]]}</span>
                                        <span>+{getCountryCallingCode(cCodes[index])}</span>
                                    </li>
                                );
                            }}
                        </List>
                    )}
                </AutoSizer>
            </div>
        );
    }

    if (variant === 'country') {
        return (
            <div className={`${styles.group} ${styles.countries}`}>
                <div className={styles.cpG}>
                    <button type="button" onClick={selectToggler} className={`${styles.btn} ${styles.country}`}>
                        <div className={styles.countryImg}>
                            <Image src={`/flags/3x2/${country.code}.svg`} alt="US" width={16} height={12} />
                        </div>
                        <span className={styles.arrow}></span>
                    </button>
                    <SelectOption />
                </div>
                <Input
                    type="text"
                    inputGroupClass={styles.inputGroup}
                    className={styles.input}
                    placeholder="Country"
                    variant="style-2"
                    variantType="style--3"
                    readOnly
                    required
                    value={country.name}
                    onChange={() => {}}
                />
            </div>
        );
    }

    return (
        <div className={`${styles.group} ${styles.codes}`}>
            <div className={styles.cpG}>
                <button type="button" onClick={selectToggler} className={styles.btn}>
                    <span className={styles.code}>{phone.code}</span>
                    <span className={styles.arrow}></span>
                </button>
                <SelectOption />
            </div>
            <Input
                type="number"
                placeholder="Phone"
                inputGroupClass={styles.inputGroup}
                variant="style-2"
                variantType="style--2"
                required
            />
        </div>
    );
}
