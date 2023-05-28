import { handleMeasure, calculateGammaMean, calculateGammaMedian, calculateGammaMode } from "./TableContent"

const GammaTable = () => {

  return (
    <table className="gammaTable">
      <tbody>
        <tr>
          <th>Measure</th>
          {handleMeasure}
        </tr>
        <tr>
          <th>Gamma Mean</th>
          {calculateGammaMean}
        </tr>
        <tr>
          <th>Gamma Median</th>
          {calculateGammaMedian}
        </tr>
        <tr>
          <th>Gamma Mode</th>
          {calculateGammaMode}
        </tr>
      </tbody>
    </table>
  )
}
export default GammaTable