
export default function Estimates({ estimates, prices, sortf, loadit, dels }) {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>
            <button onClick={()=>sortf('industry')}>Industry</button>
          </th>
          <th>Price</th>
          <th>MCap</th>
          <th>TEV</th>
          {/* <th>eps22</th> */}
          {/* <th>eps23</th> */}
          <th>r_g22</th>
          <th>r_g23</th>
          <th>p/e22</th>
          <th>p/e23</th>
          <th>T/ebitda</th>
          <th>T/e-cpx</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {estimates.map((e,i) => 
          <tr key={e.id} bgcolor={i%2 ? 'white' : 'transparent'}>
            <th>
              <button onClick={()=>loadit(e)}>{e.symbol}</button>
            </th>
            <td>{e.industry ? e.industry.slice(0,11) : null}</td>
            <td>{(prices[e.symbol]*1).toFixed(2)}</td>
            <td>{(prices[e.symbol]*e.shrs_out).toFixed()}</td>
            <td>{e.ndebt1 ? (prices[e.symbol]*e.shrs_out + e.ndebt1*1).toFixed() : null}</td>
            {/* <td>{e.fwd_eps}</td> */}
            {/* <td>{e.fwd2_eps}</td> */}
            <td>{(e.fwd_rev_g * 100).toFixed()}%</td>
            <td>{(e.fwd2_rev_g * 100).toFixed()}%</td>
            <td>{(prices[e.symbol]/e.fwd_eps).toFixed(1)}</td>
            <td>{(prices[e.symbol]/e.fwd2_eps).toFixed(1)}</td>
            <td>{e.ndebt1 ? ((prices[e.symbol]*e.shrs_out + e.ndebt1*1)/e.trail_ebitda).toFixed(1) : null}</td>
            <td>{e.ndebt1 ? ((prices[e.symbol]*e.shrs_out + e.ndebt1*1)/(e.trail_ebitda-e.trail_capex)).toFixed(1) : null}</td>
            <td><button onClick={()=>dels(e)}>X</button></td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
