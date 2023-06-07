const {Liquor} = require('../seeds/category-seeds/models'); 
let showProducts = document.querySelector('#showProducts');

let AlcoholBtn1 = document.querySelector('#AlcoholBtn1');
let AlcoholBtn2 = document.querySelector('#AlcoholBtn2');
let AlcoholBtn3 = document.querySelector('#AlcoholBtn3');
let AlcoholBtn4 = document.querySelector('#AlcoholBtn4');
let AlcoholBtn5 = document.querySelector('#AlcoholBtn5');
let AlcoholBtn6 = document.querySelector('#AlcoholBtn6');



AlcoholBtn1.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 1
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

AlcoholBtn2.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 2
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

AlcoholBtn3.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 3
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

AlcoholBtn4.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 4
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

AlcoholBtn5.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 5
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})

AlcoholBtn6.addEventListener('click', function(){
    console.log('hello moto')
    Liquor.findAll({
        where: {
            category_id: 6
        }
    })
    .then((liquorData) => {
        console.log(liquorData)
        for (let i = 0; i < liquorData.length; i++) {
            let liquorName = document.createElement('p');
            liquorName.textContent = liquorData[i].product_name;
            let liquorPrice = document.createElement('p');
            liquorPrice.textContent = liquorData[i].price;
            let liquorStock = document.createElement('p');
            liquorStock.textContent = liquorData[i].stock;
            let liquorCategory = document.createElement('p');
            liquorCategory.textContent = liquorData[i].category_id;
            let liquorBrand = document.createElement('p');
            liquorBrand.textContent = liquorData[i].brand_id;
            let liquorDiv = document.createElement('div');
            liquorDiv.appendChild(liquorName);
            liquorDiv.appendChild(liquorPrice);
            liquorDiv.appendChild(liquorStock);
            liquorDiv.appendChild(liquorCategory);
            liquorDiv.appendChild(liquorBrand);
            document.body.appendChild(liquorDiv);
        }
    })
    .catch((err) => {
        console.log(err)
    })
})