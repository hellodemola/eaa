import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">EAA</a>
        </h1>

        <p className={styles.description}>
         Website is under development  {' '}
          <code className={styles.code}>Coming soon</code>
        </p>

        <div className={styles.grid}>
          <a href="mailto:eaderinto@eaa.com.ng" className={styles.card}>
            <h3>Send us an Email &rarr;</h3>
            <p>eaderinto@eaa.com.ng</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Business &rarr;</h3>
            <p>Accounting</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Location &rarr;</h3>
            <p>Abuja, Lagos</p>
          </a>

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
