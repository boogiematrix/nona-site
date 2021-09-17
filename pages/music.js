import Head from 'next/head';
import Layout from '../components/layout.js';
import Link from 'next/link';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css'

export default function Music() {
    return (
        <Layout>
            <Head>
                <title>Music</title>
            </Head>
                <h1 className={utilStyles.headingLg}>Music Composition & Performance</h1>
                <section className={utilStyles.musicLayout}>
                    <Link href='/'><a>
                    <article className={utilStyles.musicCard}>
                        <div className={utilStyles.musicImage}>
                            <div className={ utilStyles.musicImageWrapper}>
                                <Image
                                    priority
                                    src="/images/nonas.jpg"
                                    height={350}
                                    width={300}
                                    layout='intrinsic'
                                    alt='nonas'
                                    />
                            </div>
                        </div>
                        <div className={utilStyles.headingMd}>
                            <h2>Current Projects</h2>
                        </div>
                        </article>
                    </a></Link>
                    <Link href='/'><a>
                    <article className={utilStyles.musicCard}>
                        <div className={utilStyles.musicImage}>
                            <div className={utilStyles.musicImageWrapper}>
                                <Image
                                    priority
                                    src="/images/dddogs.jpeg"
                                    height={840}
                                    width={750}
                                    layout='intrinsic'
                                    alt='dark dark dark'
                                    />
                            </div>
                        </div>
                        <div className={utilStyles.headingMd}>
                            <h2>Former Projects</h2>
                        </div>
                        </article>
                    </a></Link>
                    <Link href='/'><a>
                    <article className={utilStyles.musicCard}>
                        <div className={utilStyles.musicImage}>
                            <div className={utilStyles.musicImageWrapper}>
                                <Image
                                    priority
                                    src="/images/valentine.jpeg"
                                    height={800}
                                    width={800}
                                    layout='intrinsic'
                                    alt='valentine piano'
                                    />
                            </div>
                        </div>
                        <div className={utilStyles.headingMd}>
                            <h2>Selected Compositions & Collaborations</h2>
                        </div>
                        </article>
                    </a></Link>
                </section>
        </Layout>
     )
}