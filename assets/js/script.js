// function Sum(array){
//     let newArr=[];
//     for (let i = 0; i < array.length; i++) {
//         newArr.push(array[i]+5);
//     }   
//     console.log(newArr);
// }
// let arr=[1,2,3,4,5];
// Sum(arr);

const companies=[
    {
        name: "Company1",
        createdDate: 1996,
        terminateDate:2000,
        AnnualRevenue: 100000
    },
    {
        name: "Company2",
        createdDate: 2000,
        terminateDate:2010,
        AnnualRevenue: 10000
    },
    {
        name: "Company3",
        createdDate: 1999,
        terminateDate:2002,
        AnnualRevenue: 4000
    },
    {
        name: "Company4",
        createdDate: 2002,
        terminateDate:2018,
        AnnualRevenue: 5000000
    },
    {
        name: "Lorem5",
        createdDate: 2020,
        terminateDate:2023,
        AnnualRevenue: 2000000
    }
]

let arr =companies.filter(value=>value.name.startsWith("Com") && (value.createdDate<2000 && value.createdDate>1995) && value.terminateDate< 2010)
let sum = arr.reduce((prev, next)=>(prev.AnnualRevenue+=next.AnnualRevenue))
console.log(sum);


