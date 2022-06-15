import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  const [estimates, setEstimates] = useState([])

  const url = process.env.NEXT_PUBLIC_RESOURCE_URL

  useEffect(() => {
    axios.get(url).then(e => setEstimates(e.data))
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Simplified</title>
        <meta name="description" content="Front end deployment test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Simple eps estimates</h2>
        <h3>Current eps estimates for 2022 and 2023</h3>
        {estimates.map(e => <p key={e.id}>{e.symbol} : {e.fwd_eps}, {e.fwd2_eps}</p>)}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
