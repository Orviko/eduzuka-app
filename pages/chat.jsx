import Head from 'next/head';
import Chat from '../components/chat/Chat';

export default function ChatPage() {
    return (
        <>
            <Head>
                <title>Chat || Eduzuka</title>
            </Head>
            <Chat />
        </>
    );
}
