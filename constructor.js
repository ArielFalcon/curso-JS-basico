function car (brand, model, year){
    this.brand = brand
    this.model = model
    this.year = year
}
let cars = [["Toyota", "Corola", 2016], ["Audi", "A3", 2018], ["Tesla", "Model 3", 2020]]

let objets = cars.map((i)=> new car(i[0], i[1], i[2]))

console.log(objets)