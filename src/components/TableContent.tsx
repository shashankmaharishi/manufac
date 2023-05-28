import data from "apis/ApiData";
import { makeClassData } from "utils/MakeClassData";
import { AlcoholClassesInterface } from "interfaces";
import {
  handleMeasureFn, calculateMeanFn,
  calculateGammaMeanFn,
  calculateMedianFn,
  calculateGammaMedianFn,
  calculateModeFn,
  calculateGammaModeFn
} from "utils/Math";


const alcoholClassesObject: AlcoholClassesInterface = makeClassData(data)

export const handleMeasure = handleMeasureFn(alcoholClassesObject)

export const calculateMean = calculateMeanFn(alcoholClassesObject)
export const calculateGammaMean = calculateGammaMeanFn(alcoholClassesObject)

export const calculateMedian = calculateMedianFn(alcoholClassesObject)
export const calculateGammaMedian = calculateGammaMedianFn(alcoholClassesObject)

export const calculateMode = calculateModeFn(alcoholClassesObject)

export const calculateGammaMode = calculateGammaModeFn(alcoholClassesObject)


