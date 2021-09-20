import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function RealEstate() {
    return (
        <Layout>
            <Head>
                <title>Real Estate</title>
            </Head>
            <h1>Real Estate</h1>
            <div>
                <div>
                    <p>I got my real estate salesperson license in 2017. Since then I have been
                    able to assist my friends and community members in navigating the world of
                    real estate by helping to find low-income and first-time homebuyers grants,
                    consulting on housing issues and, for some, purchasing homes. Check here
                    for updated testimonials from my clients
                    <br/>
                    Feel free to contact me with any questions around housing. It can be a daunting
                    experience and I am happy to help!</p>
                </div>
                <div>
                    <button></button>
                </div>
            </div>
            <div>
                <Image
                    priority
                    className={utilStyles.centerImage}
                    src="/images/sarah.jpeg"
                    height={800}
                    width={800}
                    layout='intrinsic'
                    alt='sarah'
                />
                <Image
                    priority
                    className={utilStyles.centerImage}
                    src="/images/noodle.jpg"
                    height={800}
                    width={800}
                    layout='intrinsic'
                    alt='noodle'
                />
            </div>
        </Layout>
    )
}