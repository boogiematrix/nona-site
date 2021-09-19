import Head from 'next/head'
import Layout from '../components/layout'
import utilStyle from '../styles/utils.module.css'

export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
            </Head>
            <div>
                <h1>Contact</h1>
                <p>Keep in touch! Let me know if you are interested in real estate news or music and art updates or videos of my animals being wild and I will periodically send out some info.
                    <br/>
                    nonainvie@gmail.com
                    <br/>
                    <a href='https://linktr.ee/nonainvie'>Mutual Aid and Community Care Links</a>
                </p>
            </div>
            <form className={utilStyle.flexColumn}>
                <label>Name *</label>
                <div className={utilStyle.flexRow}>
                    <div className={utilStyle.flexColumn}>
                        <input></input>
                        <label>first name</label>
                    </div>
                    <div className={utilStyle.flexColumn}>
                        <input></input>
                        <label>last name</label>
                    </div>
                </div>
                <label>Email *</label>
                <input></input>
                <label>Message</label>
                <textarea></textarea>
            </form>
        </Layout>
    )
}