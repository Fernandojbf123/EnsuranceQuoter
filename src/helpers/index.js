export function yearDiff(year) {
    return new Date().getFullYear() - year;
}

export function brandPriceComputation(brand) {
    let brandPrice 
    //EUROPE
    if (brand === "1") {brandPrice=1.3}
    //USA 15%
    else if (brand === "2") {brandPrice=1.3}
    //ASIA 5%
    else if (brand === "3") {brandPrice=1.3}
    
    return brandPrice
}

export function typeOfEnsurancePrice (plan) {
    let planPrice
    //BASIC 20%
    if (plan === "1") {planPrice = 1.2}
    //FULL 50%
    else if (plan === "2") {planPrice = 1.5}

    return planPrice
}

export const formatMoney = (number) =>{
    return number.toLocaleString('en-US',{
        style: 'currency', 
        currency:'USD'
    })
  }