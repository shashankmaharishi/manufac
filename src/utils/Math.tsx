import { AlcoholClassesInterface } from "interfaces";

export const handleMeasureFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => <th key={index}>{el}</th>)

    )
}
export const calculateMeanFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Flavanoids
            let num = 0
            newArr.map(e => num = num + e)
            num = Math.round(num * 1000) / 1000
            let mean = num / newArr.length
            return <td key={index}>{Math.round(mean * 1000) / 1000}</td>
        })
    )
}
export const calculateGammaMeanFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Gamma
            let num = 0
            newArr.map(e => num = num + e)
            num = Math.round(num * 1000) / 1000
            let mean = num / newArr.length
            return <td key={index}>{Math.round(mean * 1000) / 1000}</td>
        })
    )
}
export const calculateMedianFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Flavanoids.sort()
            let median = 0
            if (newArr.length % 2 == 0) {
                median = (newArr[newArr.length / 2] + newArr[(newArr.length / 2) + 1]) / 2
            } else {
                median = newArr[(newArr.length + 1) / 2]
            }
            return <td key={index}>{median}</td>

        })
    )
}
export const calculateGammaMedianFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Gamma.sort()
            let median = 0
            if (newArr.length % 2 == 0) {
                median = (newArr[newArr.length / 2] + newArr[(newArr.length / 2) + 1]) / 2
            } else {
                median = newArr[(newArr.length + 1) / 2]
            }
            return <td key={index}>{Math.round(median * 1000) / 1000}</td>

        })
    )
}
function getMaxOcurrences(arr: number[] = []) {
    let item = arr[0];
    let ocurrencesMap: { [key: string | number]: number } = {};

    for (let i in arr) {
        const current = arr[i];

        if (ocurrencesMap[current]) ocurrencesMap[current]++;
        else ocurrencesMap[current] = 1;

        if (ocurrencesMap[item] < ocurrencesMap[current]) item = current;
    }

    return item

}
export const calculateModeFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Flavanoids.sort()
            const mode = getMaxOcurrences(newArr)
            return <td key={index}>{mode}</td>

        })
    )
}
export const calculateGammaModeFn = (obj: AlcoholClassesInterface) => {
    return (
        Object.keys(obj).map((el, index) => {
            const newArr = obj[el].Gamma.sort()
            const mode = getMaxOcurrences(newArr)
            return <td key={index}>{Math.round(mode * 1000) / 1000}</td>

        })
    )
}