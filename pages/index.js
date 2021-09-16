import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
        priority
        className={utilStyles.centerImage}
        src="/images/cats.png"
        height={800}
        width={800}
        layout='intrinsic'
        alt='cats'
      />
    </Layout>
  )
}
