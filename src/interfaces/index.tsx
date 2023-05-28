export interface AlcoholClassesInterface {
    [key: string|number]: {
        Flavanoids:any[],
        Gamma:any[]
    };
  }
  export interface ApiDataInterface {
    Alcohol:number|string,
    Ash: number|string,
    Hue: number|string,
    Magnesium: number|string,
    Flavanoids: number|string,
  }