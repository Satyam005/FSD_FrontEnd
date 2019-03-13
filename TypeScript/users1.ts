interface Emp{
    id: number,
    name: string,
    salary: number
}
const emps:Emp[] = [
    {
        id: 1,
        name: 'John',
        salary: 10000
    },
    {
        id: 2,
        name: 'Roger',
        salary: 50000
    },
    {
        id: 3,
        name: 'Steve',
        salary: 1000
    },
    {
        id: 4,
        name: 'Pete',
        salary: 5300
    },
    {
        id: 5,
        name: 'Andrews',
        salary: 25000
    }
]
let empSals =(emps:Emp[],salaryFrom:number,salaryTo:number):string[]=>{ 
    return emps
    .filter(u=>u.salary>salaryFrom && u.salary<salaryTo)
    .map(u=>{ return u.name + "=>" + u.salary})
}
console.log(empSals(emps,1000,50000));