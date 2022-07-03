
export default function Estimates({ estimates, prices }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>Price</th>
          <th>eps22</th>
          <th>eps23</th>
          <th>r_g22</th>
          <th>r_g23</th>
          <th>p/e22</th>
          <th>p/e23</th>
        </tr>
      </thead>
      <tbody>
        {estimates.map(e => 
          <tr key={e.id}>
            <th>{e.symbol}</th>
            <td>{prices[e.symbol]}</td>
            <td>{e.fwd_eps}</td>
            <td>{e.fwd2_eps}</td>
            <td>{(e.fwd_rev_g * 100).toFixed()}%</td>
            <td>{(e.fwd2_rev_g * 100).toFixed()}%</td>
            <td>{(prices[e.symbol]/e.fwd_eps).toFixed(1)}</td>
            <td>{(prices[e.symbol]/e.fwd2_eps).toFixed(1)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
