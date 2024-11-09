import { useEffect, useRef, useState } from "react"


enum Operator{
    add = '+',
    substract = '-',
    multiply = 'x',
    divide = '/',
}


export const useCalculator = ()=>{

    const [formula, setFormula] = useState('0')

    const [number, setNumber] = useState('0')
    const [prevNumber, setPrevNumber] = useState('0')

    const lastOperation = useRef<Operator>();

    useEffect(()=>{
        if(lastOperation.current){
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula( `${firstFormulaPart} ${lastOperation.current} ${number}`)
        }else{
            setFormula(number)
        }
    },[number])
    
    useEffect(()=>{
        // TODO: calcular subresultado
        const subResult = claculateResult()
        setPrevNumber(`${subResult}`)
    },[formula])

    const result = () => {
        const result = claculateResult();
        setFormula(`${result}`)
        lastOperation.current = undefined
        setPrevNumber('0')
    }

    const buildNumber = (numberString:string) =>{
        console.log('buildNumber: ', numberString)
        if (number.includes('.') && numberString === '.') return;

        if(number === '0' && numberString === '0') return

        if (number.startsWith('0') || number.startsWith('-0')){
            if (numberString === '.'){
                return setNumber(number + numberString)
            }
            
            if(numberString !== '0' && number.includes('.')){
                return setNumber(number + numberString)
            }
            
            if (numberString !== '0' && number === '0'){
                return setNumber(numberString)
            }
            
            if (numberString === '0' && number.includes('.')){
                return setNumber(number + numberString)
            }


        }

        

        setNumber(number + numberString)
    }

    const resetCalculator = () => {
        setFormula('')
        setNumber('0')
        setPrevNumber('0')
        lastOperation.current = undefined
    }

    const toggleSign = ()=> {
        if(number.includes('-')){
            return setNumber(number.replace('-',''))
        }
        setNumber('-' + number)
    }

    const delLast = () => {
        if(number.length === 1) return setNumber('0')
        if(number.length === 2 && number.startsWith('-')) return setNumber('0')
        setNumber(number.slice(0,-1))
    }

    const setLastNumber = () => {
        if(number.endsWith('.')){
            setPrevNumber(number.slice(0,-1))
            setNumber('0')
            return
        }
        setPrevNumber(number)
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.divide
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.multiply
    }

    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.add
    }

    const substractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.substract
    }

    const claculateResult = () => {

        const [firstValue, operation, secondValue] = formula.split(' ')
        const num1 = Number(firstValue)
        const num2 = Number(secondValue)

        if(isNaN(num2)) return num1
        if((num2 === 0 && operation === '/') || (num2 === 0 && operation === 'x')) return 0

        switch(operation){
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '/':
                return num1 / num2;
            case 'x':
                return num1 * num2;
            default:
                throw new Error(`Operation ${operation} not implemented`)
        }
    }

    return {
        // Props
        formula,
        number,
        prevNumber,

        //Methods 
        buildNumber,
        resetCalculator,
        toggleSign,
        delLast,
        divideOperation,
        multiplyOperation,
        addOperation,
        substractOperation,
        result
    }
}