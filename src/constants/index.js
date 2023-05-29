export const BRANDS = [
    {id:1, name: 'Europe'},
    {id:2, name: 'USA'},
    {id:3, name: 'ASIA'},
]

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from( new Array (20), (value, idx) => YEARMAX - idx)

export const PLANS = [
    {id:1, name: 'Basic'},
    {id:2, name: 'Full'},
]