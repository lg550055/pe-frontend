
export default function Detail({ e, close }) {
  
  return (
    <table>
      <caption>{e.symbol} summary financials &nbsp; &nbsp;
        <button onClick={()=>close()}>X</button>
      </caption>
      <thead>
        <tr>
          <th>{e.symbol}</th>
          <th>{e.date4}</th>
          <th>{e.date3}</th>
          <th>{e.date2}</th>
          <th>{e.date1}</th>
          <th>{e.trail_date}</th>
          <th>fw1</th>
          <th>fw2</th>
        </tr>
      </thead>
      <tbody>
        <tr key={1000}>
          <th>Revenue</th>
          <td>{e.rev4}</td>
          <td>{e.rev3}</td>
          <td>{e.rev2}</td>
          <td>{e.rev1}</td>
          <td>{e.trail_rev}</td>
          <td>{e.fwd_rev}</td>
          <td>{e.fwd2_rev}</td>
        </tr>
        <tr key={1001}>
          <th>rev g</th>
          <td></td>
          <td>{((e.rev3/e.rev4-1)*100).toFixed(1)}%</td>
          <td>{((e.rev2/e.rev3-1)*100).toFixed(1)}%</td>
          <td>{((e.rev1/e.rev2-1)*100).toFixed(1)}%</td>
          <td></td>
          <td>{(e.fwd_rev_g*100).toFixed(1)}%</td>
          <td>{(e.fwd2_rev_g*100).toFixed(1)}%</td>
        </tr>
        <tr key={1002}>
          <th>Ebitda</th>
          <td>{e.ebitda4}</td>
          <td>{e.ebitda3}</td>
          <td>{e.ebitda2}</td>
          <td>{e.ebitda1}</td>
          <td>{e.trail_ebitda}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr key={1003}>
          <th>ebitda mgn</th>
          <td>{(e.ebitda4/e.rev4*100).toFixed(1)}%</td>
          <td>{(e.ebitda3/e.rev3*100).toFixed(1)}%</td>
          <td>{(e.ebitda2/e.rev2*100).toFixed(1)}%</td>
          <td>{(e.ebitda1/e.rev1*100).toFixed(1)}%</td>
          <td>{(e.trail_ebitda/e.trail_rev*100).toFixed(1)}%</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr key={1004}>
          <th>CFO</th>
          <td>{e.cfo4}</td>
          <td>{e.cfo3}</td>
          <td>{e.cfo2}</td>
          <td>{e.cfo1}</td>
          <td>{e.trail_cfo}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr key={1006}>
          <th>Capex</th>
          <td>{e.capex4}</td>
          <td>{e.capex3}</td>
          <td>{e.capex2}</td>
          <td>{e.capex1}</td>
          <td>{e.trail_capex}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
        <tr key={1008}>
          <th>Net debt</th>
          <td>{e.ndebt4}</td>
          <td>{e.ndebt3}</td>
          <td>{e.ndebt2}</td>
          <td>{e.ndebt1}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr key={1009}>
          <th>nDebt/e-c</th>
          <td>{(e.ndebt4/(e.ebitda4-e.capex4)).toFixed(1)}x</td>
          <td>{(e.ndebt3/(e.ebitda3-e.capex3)).toFixed(1)}x</td>
          <td>{(e.ndebt2/(e.ebitda2-e.capex2)).toFixed(1)}x</td>
          <td>{(e.ndebt1/(e.ebitda1-e.capex1)).toFixed(1)}x</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr key={1010}>
          <th>EPS</th>
          <td>{e.eps4}</td>
          <td>{e.eps3}</td>
          <td>{e.eps2}</td>
          <td>{e.eps1}</td>
          <td></td>
          <td>{e.fwd_eps}</td>
          <td>{e.fwd2_eps}</td>
        </tr>
      </tbody>
    </table>
  )
}
