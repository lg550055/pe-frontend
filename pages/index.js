import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Estimates from '../components/estimates'
import Detail from '../components/detail'


export default function Home() {

  const [estimates, setEstimates] = useState([])
  const [prices, setPrices] = useState({})
  const [sortedField, setSortedField] = useState(null)
  const [estimate, setEstimate] = useState()

  let sortedEstimates = [...estimates]
  if (sortedField != null) {
    sortedEstimates.sort((a,b) => {
      if (a[sortedField] < b[sortedField]) return -1;
      if (a[sortedField] > b[sortedField]) return 1;
      return 0
    })
  }

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

  async function addStock(e) {
    console.log(e.target.ticker.value)
    await axios.get(url+`stock?ticker=${e.target.ticker.value}`)
    e.target.reset()
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
        <h3>P/E on concensus eps estimates</h3>
        { estimate && <Detail e={estimate} close={setEstimate} /> }
        { prices && <Estimates estimates={sortedEstimates} sortf={setSortedField} loadit={setEstimate} prices={prices} /> }
        <p>Note: r_g22 and 23 = est rev growth, T/ebitda: TEV/ttm ebitda, T/e-cpx: TEV/ttm ebitda-capex</p>
        <button onClick={()=>get_prices(estimates)}>Get Current Prices</button>
        <div>
          <form onSubmit={addStock}>
            <input placeholder="Enter symbol" name="ticker" />
            <button>Add stock</button>
          </form>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  )
}
