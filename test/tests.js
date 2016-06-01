var assert = require('assert');
var weeklySales = require('../routes/weeklySales');
var mostPopularProduct = require('../routes/mostPopularProduct');
var leastPopularProduct = require('../routes/leastPopularProduct');
var mostPopularCategory = require('../routes/mostPopularCategory');
var leastPopularCategory = require('../routes/leastPopularCategory');
var mostProfitableProduct = require('../routes/mostProfitableProduct');
var mostProfitableCategory = require('../routes/mostProfitableCategory');
var purchases = require("../routes/purchases");
describe("weeklySales",function(){
  it("should return a map of the sales for the month",function(){
    var result = weeklySales.weeklySales(1);
    assert.deepEqual(result,
   [ { stockItem: 'Bananas - loose', sold: 47,income: 2 },
     { stockItem: 'Bread', sold: 45,income: 12},
     { stockItem: 'Chakalaka Can', sold: 23,income: 10},
     { stockItem: 'Coke 500ml', sold: 54, income: 6.5},
     { stockItem: 'Cream Soda 500ml', sold: 22,income: 7.5},
     { stockItem: 'Fanta 500ml', sold: 33, income: 6.5 },
     { stockItem: 'Gold Dish Vegetable Curry Can', sold: 17, income: 9 },
     { stockItem: 'Imasi', sold: 30, income: 25 },
     { stockItem: 'Iwisa Pap 5kg', sold: 17, income: 30 },
     { stockItem: 'Milk 1l', sold: 39, income: 10 },
     { stockItem: 'Mixed Sweets 5s', sold: 49, income: 3 },
     { stockItem: 'Shampoo 1 litre', sold: 3, income: 30 },
     { stockItem: 'Soap Bar', sold: 12, income: 6 },
     { stockItem: 'Top Class Soy Mince', sold: 22, income: 12 } ]
);
});
});
describe("mostPopularProduct",function(){
  it("should return the most popular product of each week",function(){
    var result = mostPopularProduct.mostPopularProduct(1);
    assert.equal(result,"Coke 500ml");
  });
});
describe("leastPopularProduct",function(){
  it("should return the least popular product of each week",function(){
    var result = leastPopularProduct.leastPopularProduct(1);
    assert.equal(result,"Shampoo 1 litre");
  });
});
describe("mostPopularCategory",function(){
  it("should return the most popular category of each week",function(){
    var result = mostPopularCategory.mostPopularCategory(1);
    assert.equal(result,"Sweets");
  });
});
describe("leastPopularCategory",function(){
  it("should return the least popular category of each week",function(){
    var result = leastPopularCategory.leastPopularCategory(1);
    assert.equal(result,"Hygiene");
  });
});
describe("mostProfitableCategory",function(){
  it("should return the most profitable category of each week",function(){
    var result = mostProfitableCategory.mostProfitableCategory(1);
    assert.equal(result,"Dairy");
  });
});
describe("mostProfitableProduct",function(){
  it("should return the most profitable product of each week",function(){
    var result = mostProfitableProduct.mostProfitableProduct(1);
    assert.equal(result,"Imasi");
  });
});
describe("Purchases",function(){
  it("should return a map of all purchases for each week",function(){
    var result = purchases.Purchases(1);
    assert.deepEqual(result,[ { item: 'Chakalaka Can', quantity: '3', totalCost: 'R21,00' },
  { item: 'Coke 500ml', quantity: '3', totalCost: 'R10,50' },
  { item: 'Cream Soda 500ml', quantity: '4', totalCost: 'R18,00' },
  { item: 'Fanta 500ml', quantity: '2', totalCost: 'R9,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '2',
    totalCost: 'R10,00' },
  { item: 'Imasi', quantity: '1', totalCost: 'R17,00' },
  { item: 'Iwisa Pap 5kg', quantity: '3', totalCost: 'R60,00' },
  { item: 'Milk 1l', quantity: '4', totalCost: 'R28,00' },
  { item: 'Top Class Soy Mince',
    quantity: '5',
    totalCost: 'R40,00' },
  { item: 'Bananas - loose', quantity: '4', totalCost: 'R4,00' },
  { item: 'Mixed Sweets 5s', quantity: '60', totalCost: 'R180,00' },
  { item: 'Shampoo 1 litre', quantity: '1', totalCost: 'R20,00' },
  { item: 'Soap Bar', quantity: '3', totalCost: 'R9,00' },
  { item: 'Bread', quantity: '30', totalCost: 'R270,00' },
  { item: 'Chakalaka Can', quantity: '15', totalCost: 'R105,00' },
  { item: 'Coke 500ml', quantity: '36', totalCost: 'R126,00' },
  { item: 'Cream Soda 500ml',
    quantity: '24',
    totalCost: 'R108,00' },
  { item: 'Fanta 500ml', quantity: '24', totalCost: 'R108,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '15',
    totalCost: 'R75,00' },
  { item: 'Imasi', quantity: '15', totalCost: 'R255,00' },
  { item: 'Iwisa Pap 5kg', quantity: '15', totalCost: 'R300,00' },
  { item: 'Milk 1l', quantity: '25', totalCost: 'R175,00' },
  { item: 'Top Class Soy Mince',
    quantity: '10',
    totalCost: 'R80,00' },
  { item: 'Shampoo 1 litre', quantity: '1', totalCost: 'R20,00' },
  { item: 'Soap Bar', quantity: '3', totalCost: 'R9,00' },
  { item: 'Bananas - loose', quantity: '12', totalCost: 'R12,00' },
  { item: 'Mixed Sweets 5s',
    quantity: '240',
    totalCost: 'R720,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Bread', quantity: '4', totalCost: 'R44,00' },
  { item: 'Imasi', quantity: '4', totalCost: 'R96,00' },
  { item: 'Bananas - loose', quantity: '8', totalCost: 'R8,00' },
  { item: 'Mixed Sweets 5s',
    quantity: '150',
    totalCost: 'R450,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Bread', quantity: '30', totalCost: 'R270,00' },
  { item: 'Chakalaka Can', quantity: '15', totalCost: 'R105,00' },
  { item: 'Coke 500ml', quantity: '36', totalCost: 'R126,00' },
  { item: 'Cream Soda 500ml', quantity: '18', totalCost: 'R81,00' },
  { item: 'Fanta 500ml', quantity: '24', totalCost: 'R108,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '15',
    totalCost: 'R75,00' },
  { item: 'Imasi', quantity: '25', totalCost: 'R425,00' },
  { item: 'Iwisa Pap 5kg', quantity: '5', totalCost: 'R100,00' },
  { item: 'Milk 1l', quantity: '10', totalCost: 'R70,00' },
  { item: 'Top Class Soy Mince',
    quantity: '10',
    totalCost: 'R80,00' },
  { item: 'Milk 1l', quantity: '3', totalCost: 'R28,50' },
  { item: 'Bananas - loose', quantity: '4', totalCost: 'R4,00' },
  { item: 'Mixed Sweets 5s',
    quantity: '150',
    totalCost: 'R450,00' },
  { item: 'Bread', quantity: '10', totalCost: 'R90,00' },
  { item: 'Chakalaka Can', quantity: '15', totalCost: 'R105,00' },
  { item: 'Coke 500ml', quantity: '18', totalCost: 'R63,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '5',
    totalCost: 'R25,00' },
  { item: 'Imasi', quantity: '10', totalCost: 'R170,00' },
  { item: 'Iwisa Pap 5kg', quantity: '5', totalCost: 'R100,00' },
  { item: 'Milk 1l', quantity: '10', totalCost: 'R70,00' },
  { item: 'Top Class Soy Mince',
    quantity: '15',
    totalCost: 'R120,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Milk 1l', quantity: '3', totalCost: 'R28,50' },
  { item: 'Bananas - loose', quantity: '4', totalCost: 'R4,00' },
  { item: 'Mixed Sweets 5s', quantity: '50', totalCost: 'R150,00' },
  { item: 'Shampoo 1 litre', quantity: '3', totalCost: 'R60,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '5',
    totalCost: 'R42,50' },
  { item: 'Bread', quantity: '5', totalCost: 'R45,00' },
  { item: 'Coke 500ml', quantity: '12', totalCost: 'R42,00' },
  { item: 'Fanta 500ml', quantity: '12', totalCost: 'R54,00' },
  { item: 'Imasi', quantity: '20', totalCost: 'R340,00' },
  { item: 'Milk 1l', quantity: '15', totalCost: 'R105,00' },
  { item: 'Top Class Soy Mince',
    quantity: '5',
    totalCost: 'R40,00' },
  { item: 'Shampoo 1 litre', quantity: '1', totalCost: 'R20,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '2',
    totalCost: 'R17,00' },
  { item: 'Chakalaka Can', quantity: '2', totalCost: 'R17,00' },
  { item: 'Cream Soda 500ml', quantity: '2', totalCost: 'R15,00' },
  { item: 'Fanta 500ml', quantity: '1', totalCost: 'R6,50' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '2',
    totalCost: 'R17,00' },
  { item: 'Iwisa Pap 5kg', quantity: '1', totalCost: 'R30,00' },
  { item: 'Milk 1l', quantity: '6', totalCost: 'R57,00' },
  { item: 'Mixed Sweets 5s', quantity: '12', totalCost: 'R36,00' },
  { item: 'Bread', quantity: '15', totalCost: 'R135,00' },
  { item: 'Chakalaka Can', quantity: '10', totalCost: 'R70,00' },
  { item: 'Coke 500ml', quantity: '24', totalCost: 'R84,00' },
  { item: 'Cream Soda 500ml', quantity: '12', totalCost: 'R54,00' },
  { item: 'Fanta 500ml', quantity: '12', totalCost: 'R54,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '10',
    totalCost: 'R50,00' },
  { item: 'Imasi', quantity: '15', totalCost: 'R255,00' },
  { item: 'Iwisa Pap 5kg', quantity: '5', totalCost: 'R100,00' },
  { item: 'Milk 1l', quantity: '15', totalCost: 'R105,00' },
  { item: 'Top Class Soy Mince',
    quantity: '5',
    totalCost: 'R40,00' },
  { item: 'Shampoo 1 litre', quantity: '1', totalCost: 'R20,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Milk 1l', quantity: '1', totalCost: 'R9,50' },
  { item: 'Bananas - loose', quantity: '20', totalCost: 'R20,00' },
  { item: 'Mixed Sweets 5s', quantity: '20', totalCost: 'R60,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Soap Bar', quantity: '3', totalCost: 'R9,00' },
  { item: 'Bread', quantity: '10', totalCost: 'R90,00' },
  { item: 'Imasi', quantity: '10', totalCost: 'R170,00' },
  { item: 'Iwisa Pap 5kg', quantity: '5', totalCost: 'R100,00' },
  { item: 'Milk 1l', quantity: '15', totalCost: 'R105,00' },
  { item: 'Top Class Soy Mince',
    quantity: '10',
    totalCost: 'R80,00' },
  { item: 'Chakalaka Can', quantity: '3', totalCost: 'R27,00' },
  { item: 'Bananas - loose', quantity: '10', totalCost: 'R10,00' },
  { item: 'Mixed Sweets 5s', quantity: '8', totalCost: 'R24,00' },
  { item: 'Bread', quantity: '15', totalCost: 'R135,00' },
  { item: 'Chakalaka Can', quantity: '10', totalCost: 'R70,00' },
  { item: 'Coke 500ml', quantity: '18', totalCost: 'R63,00' },
  { item: 'Cream Soda 500ml', quantity: '6', totalCost: 'R27,00' },
  { item: 'Fanta 500ml', quantity: '6', totalCost: 'R27,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '10',
    totalCost: 'R50,00' },
  { item: 'Imasi', quantity: '15', totalCost: 'R255,00' },
  { item: 'Milk 1l', quantity: '20', totalCost: 'R140,00' },
  { item: 'Top Class Soy Mince',
    quantity: '15',
    totalCost: 'R120,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Bread', quantity: '1', totalCost: 'R11,00' },
  { item: 'Fanta 500ml', quantity: '2', totalCost: 'R13,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '1',
    totalCost: 'R8,50' },
  { item: 'Iwisa Pap 5kg', quantity: '1', totalCost: 'R30,00' },
  { item: 'Bananas - loose', quantity: '10', totalCost: 'R10,00' },
  { item: 'Shampoo 1 litre', quantity: '5', totalCost: 'R100,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Bread', quantity: '20', totalCost: 'R180,00' },
  { item: 'Chakalaka Can', quantity: '15', totalCost: 'R105,00' },
  { item: 'Coke 500ml', quantity: '24', totalCost: 'R84,00' },
  { item: 'Cream Soda 500ml', quantity: '12', totalCost: 'R54,00' },
  { item: 'Fanta 500ml', quantity: '12', totalCost: 'R54,00' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '15',
    totalCost: 'R75,00' },
  { item: 'Imasi', quantity: '15', totalCost: 'R255,00' },
  { item: 'Iwisa Pap 5kg', quantity: '10', totalCost: 'R200,00' },
  { item: 'Milk 1l', quantity: '20', totalCost: 'R140,00' },
  { item: 'Top Class Soy Mince',
    quantity: '15',
    totalCost: 'R120,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Soap Bar', quantity: '3', totalCost: 'R9,00' },
  { item: 'Chakalaka Can', quantity: '3', totalCost: 'R25,50' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '2',
    totalCost: 'R17,00' },
  { item: 'Top Class Soy Mince',
    quantity: '5',
    totalCost: 'R55,00' },
  { item: 'Shampoo 1 litre', quantity: '2', totalCost: 'R40,00' },
  { item: 'Soap Bar', quantity: '5', totalCost: 'R15,00' },
  { item: 'Chakalaka Can', quantity: '3', totalCost: 'R25,50' },
  { item: 'Gold Dish Vegetable Curry Can',
    quantity: '2',
    totalCost: 'R17,00' },
  { item: 'Top Class Soy Mince',
    quantity: '3',
    totalCost: 'R33,00' } ]
);
});
});