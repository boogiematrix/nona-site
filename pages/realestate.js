import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function RealEstate() {
    return (
        <Layout>
            <Head>
                <title>Real Estate</title>
            </Head>
            <h1>Real Estate</h1>
            <p>I got my real estate salesperson license in 2017. Since then I have been
                able to assist my friends and community members in navigating the world of
                real estate by helping to find low-income and first-time homebuyers grants,
                consulting on housing issues and, for some, purchasing homes. Check here
                for updated testimonials from my clients
                <br/>
                Feel free to contact me with any questions around housing. It can be a daunting
                experience and I am happy to help!</p>
        </Layout>
    )
}