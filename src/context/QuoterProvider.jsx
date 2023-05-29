import { useState, createContext } from "react";
import { yearDiff, brandPriceComputation, typeOfEnsurancePrice, formatMoney} from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({children}) => {

    //ACA VAN LAS FUNCIONES O VARIABLES

    const [data, setData] = useState({
        brand:"",
        year:"",
        plan: "",
    })

    const [error, setError] = useState("");
    const [price, setPrice] = useState(0)
    const [loading, setLoading] = useState(false);

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const quoteEnsurance = () => {
        const diff = yearDiff(data.year)
        const {brand, plan} = data;
        //Base
        let ensurancePrice = 2000;

        //3% less each year
        const discount = 1-(diff*3/100)
        ensurancePrice = ensurancePrice*discount;

        //Brand price computation
        const brandPrice = brandPriceComputation(brand)
        ensurancePrice = ensurancePrice*brandPrice;

        //Type of ensurance price computation
        const planPrice = typeOfEnsurancePrice(plan)
        ensurancePrice = ensurancePrice*planPrice;
        
        ensurancePrice = formatMoney(ensurancePrice)
        
        setLoading(true)

        setTimeout ( () => {
            setPrice(ensurancePrice)
            setLoading(false)
        },2000)
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleChangeData, 
                error,
                setError,
                quoteEnsurance,
                price,
                loading,
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export {QuoterProvider}
export default QuoterContext