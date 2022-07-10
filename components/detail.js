
export default function Detail({ estimate }) {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Ticker</th>
          <th>{estimate.date4}</th>
          <th>{estimate.date3}</th>
          <th>{estimate.date2}</th>
          <th>{estimate.date1}</th>
          <th>{estimate.trail_date}</th>
          <th>fw1</th>
          <th>fw2</th>
        </tr>
      </thead>
      <tbody>
        <tr key={1000}>
          <th>Revenue</th>
          <td>{estimate.rev4}</td>
          <td>{estimate.rev3}</td>
          <td>{estimate.rev2}</td>
          <td>{estimate.rev1}</td>
          <td>{estimate.trail_rev}</td>
          <td>{estimate.fwd_rev}</td>
          <td>{estimate.fwd2_rev}</td>
        </tr>
        <tr key={1001}>
          <th>Ebitda</th>
          <td>{estimate.ebitda4}</td>
          <td>{estimate.ebitda3}</td>
          <td>{estimate.ebitda2}</td>
          <td>{estimate.ebitda1}</td>
          <td>{estimate.trail_ebitda}</td>
          <td>{1}</td>
          <td>{2}</td>
        </tr>
        <tr key={1002}>
          <th>CFO</th>
          <td>{estimate.cfo4}</td>
          <td>{estimate.cfo3}</td>
          <td>{estimate.cfo2}</td>
          <td>{estimate.cfo1}</td>
          <td>{estimate.trail_cfo}</td>
          <td>{1}</td>
          <td>{2}</td>
        </tr>
        <tr key={1003}>
          <th>Capex</th>
          <td>{estimate.capex4}</td>
          <td>{estimate.capex3}</td>
          <td>{estimate.capex2}</td>
          <td>{estimate.capex1}</td>
          <td>{estimate.trail_capex}</td>
          <td>{1}</td>
          <td>{2}</td>
        </tr>
        <tr key={1004}>
          <th>EPS</th>
          <td>{estimate.eps4}</td>
          <td>{estimate.eps3}</td>
          <td>{estimate.eps2}</td>
          <td>{estimate.eps1}</td>
          <td></td>
          <td>{estimate.fwd_eps}</td>
          <td>{estimate.fwd2_eps}</td>
        </tr>
      </tbody>
    </table>
  )
}
