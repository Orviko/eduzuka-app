import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Container from '../../components/container/Container';
import ECard from '../../components/eCard/ECard';
import Section from '../../components/section/Section';
import Text from '../../components/text/Text';
import { UseHeaderContext } from '../../contexts/HeaderContext';
import { UseWindowContext } from '../../contexts/WindowContext';
import { colors } from '../../styles/variables';

export default function CoursesPage() {
    const { headerHeight } = UseHeaderContext();
    const { windowWidth } = UseWindowContext();

    return (
        <Section style={{ paddingTop: headerHeight / 16 + 5 + 'rem' }}>
            <Head>
                <title>All Courses || Eduzuka</title>
            </Head>
            <Container>
                <div className="row" style={{ alignItems: 'flex-start' }}>
                    <div>
                        <Text variant="heading">All Courses</Text>
                        <div style={{ marginTop: '3rem' }}>
                            <Link href="/courses/course-1">
                                <a style={{ color: colors.$primary, fontWeight: 600 }}>👉 See course details page</a>
                            </Link>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: windowWidth < 992 ? 'center' : 'flex-end' }}>
                        <ECard />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
