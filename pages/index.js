import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {

  const url = process.env.NEXT_PUBLIC_RESOURCE_URL

  let data = async () => await axios.get(url)

  let d = data()
  // d.then(e => console.log(e[0].fwd_eps))
  let r = []
  d.then(e => {
    e.data.forEach( k => console.log(k.symbol))
  })

  console.log(r.length)

  return (
    <div className={styles.container}>
      <Head>
        <title>Simplified</title>
        <meta name="description" content="Front end deployment test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>Hello!</h2>
        {/* <p>{d.data[0].symbol}</p> */}
        {/* {d.map(e => <p>e</p>)} */}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
