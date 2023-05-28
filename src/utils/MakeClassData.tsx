import { AlcoholClassesInterface, ApiDataInterface } from "interfaces";

export const makeClassData = (data: ApiDataInterface[]) => {
    const alcoholClassesObject: AlcoholClassesInterface = {}
  
    data.map((el) => {
      const count = el.Alcohol
      const gamma = ((el.Ash as number) * (el.Hue as number)) / (el.Magnesium as number)
  
      if (`Class ${count}` in alcoholClassesObject) {
        alcoholClassesObject[`Class ${count}`] = {
          Flavanoids: [...alcoholClassesObject[`Class ${count}`].Flavanoids, parseFloat(el.Flavanoids as string)],
          Gamma: [...alcoholClassesObject[`Class ${count}`].Gamma, gamma]
        }
      } else {
        alcoholClassesObject[`Class ${count}`] = {
          Flavanoids: [parseFloat(el.Flavanoids as string)],
          Gamma: [gamma]
        }
      }
    })
    return alcoholClassesObject
  }