import Head from 'next/head'
import Main from '@/pages/main'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Full Stack Web Developer Portfolio - Łukasz Fujarski</title>
            </Head>

            <Main></Main>
        </>
    )
}
