import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {

  const [estimates, setEstimates] = useState([])
  const [prices, setPrices] = useState({})

  const url = process.env.NEXT_PUBLIC_RESOURCE_URL
  const token = process.env.NEXT_PUBLIC_TOKEN

  function get_prices(estimates) {
    let temp_p = {}
    estimates.forEach(async e => {
      try {
        let p_data = await axios.get(`https://finnhub.io/api/v1/quote?token=${token}&symbol=${e.symbol}`)
        temp_p[e.symbol] = p_data.data.c  
      } catch (e) {
        console.log(e)
      }
    })
    setPrices(temp_p)
  }

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
        { prices && estimates.map(e => <p key={e.id}>{e.symbol} {prices[e.symbol]} {e.fwd_eps} {prices[e.symbol]/e.fwd_eps} {e.fwd2_eps} {prices[e.symbol]/e.fwd2_eps}</p>)}
        <button onClick={()=>get_prices(estimates)}>Prices</button>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
