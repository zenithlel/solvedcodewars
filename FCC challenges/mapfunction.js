//seeing how the map() function work


let users = [{name : "Ali", age : 25},
{name: "Seleen", age: 33},
{name: "Haifa", age: 41},
{name: "Monica", age: 21}]


let agesplusfive = users.map(user => user.age + 5)

console.log(agesplusfive)


let morethanthirty = users.filter(user => user.age >=30)

console.log(morethanthirty)



//slicing life 

let cities = ["chicago", "Islamabad", "CasaBlanca", "Demascus"]


let slicedcities = cities.slice(0,2)
let arbiancities = cities.slice(-2)

console.log("foreign cities", slicedcities, "Arabian Cities **", arbiancities)
