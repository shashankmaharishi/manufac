import { handleMeasure, calculateMean, calculateMedian, calculateMode } from "./TableContent"

const FlavTable = () => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Measure</th>
          {handleMeasure}
        </tr>
        <tr>
          <th>Flavanoids Mean</th>
          {calculateMean}
        </tr>
        <tr>
          <th>Flavanoids Median</th>
          {calculateMedian}
        </tr>
        <tr>
          <th>Flavanoids Mode</th>
          {calculateMode}
        </tr>
      </tbody>
    </table>
  )
}
export default FlavTable