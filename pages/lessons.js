import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import lessonStyles from '../styles/Lesson.module.css'

export default function Lessons() {
    return (
        <>
            <Head>
                <title>Piano Lessons</title>
            </Head>
            <Layout>
                    <div className={lessonStyles.lessonsHeader}>                        
                        <h1>Piano Lessons</h1>
                        <p>Since the onset of the pandemic, I have been teaching virtual piano
                            lessons to adults and children. Lessons are tailored
                            to your needs and interests.
                        </p>
                        <br/>
                        <p><Link href='/contact'><a>Contact me</a></Link> to discuss rates and options!</p>
                    </div>
                <div className={lessonStyles.bgImage}>
                    <div className={lessonStyles.comment}>
                        <p>
                            “Nona Invie has been an encouraging and conscientious instructor
                            in my path as an adult piano student. Nona has been consistent in
                            emphasizing the importance of keeping the fun of musical expression
                            alive while diving into areas of challenging techniques and practices.
                            Working with Nona has improved my abilities as a player and a composer
                            but most importantly I have used her teachings to spend the available
                            time I have to practice in the most effective ways. I would recommend
                            piano lessons with Nona to students of any age but especially to adults
                            who had maybe given up on learning the keyboard and reading notes on
                            the staff as I had, her lessons have given me a new confidence as a
                            musician and artist to build skills I had previously thought were
                            out of reach.” — D. Ritchie, STUDENT
                        </p>
                    </div>
                </div>
            </Layout>
        </>
    )
}