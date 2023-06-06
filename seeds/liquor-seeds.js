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





const liquorData = [
    {
        product_name: 'Jack Daniels',
        price: 29.99,
        stock: 802,
        category_id: 1,
        brand_id: 1,
    },
    {
        product_name: 'Grey Goose',
        price: 29.99,
        stock: 15.64,
        category_id: 2,
        brand_id: 2,
    },
    {
        product_name: 'Captain Morgan',
        price: 29.99,
        stock: 182,
        category_id: 3,
        brand_id: 3,
    },
    {
        product_name: 'Jose Cuervo',
        price: 32.99,
        stock: 121,
        category_id: 4,
        brand_id: 4,
    },
    {
        product_name: 'Tanqueray',
        price: 26.99,
        stock: 1479,
        category_id: 4,
        brand_id: 5,
    },
    {
        product_name: 'Hennessy',
        price: 28.99,
        stock: 241,
        category_id: 6,
        brand_id: 6,
    },
    {
        product_name: 'Bacardi',
        price: 28.99,
        stock: 315,
        category_id: 3, 
        brand_id: 1,
    },
    {
        product_name: 'Patron',
        price: 54.99,
        stock: 529,
        category_id: 4,
        brand_id: 2,
    },
    {
        product_name: 'Bombay Sapphire',
        price: 28.99,
        stock: 240,
        category_id: 5,
        brand_id: 3,
    },
    {
        product_name: 'Remy Martin',
        price: 54.99,
        stock: 511,
        category_id: 6,
        brand_id: 4,
    },
    {
        product_name: 'Jameson',
        price: 32.99,
        stock: 512,
        category_id: 1,
        brand_id: 5,
    },
    {
        product_name: 'Ciroc',
        price: 29.99,
        stock: 371,
        category_id: 2,
        brand_id: 6,
    },
   /* {
        product_name: 'Malibu',
        price: 19.99,
        stock: 180,
        category_id: 3,
        brand_id: 13,
    },
    {
        product_name: 'Don Julio',
        price: 63.99,
        stock: 422,
        category_id: 4,
        brand_id: 14,
    },
    {
        product_name: 'Ketel One',
        price: 29.99,
        stock: 732,
        category_id: 5,
        brand_id: 15,
    },
    {
        product_name: 'Baileys',
        price: 30.99,
        stock: 236,
        category_id: 6,
        brand_id: 16,
    },
    {
        product_name: 'Johnnie Walker',
        price: 28.99,
        stock: 261,
        category_id: 1,
        brand_id: 17,
    },
    {
        product_name: 'Smirnoff',
        price: 17.29,
        stock: 163,
        category_id: 2,
        brand_id: 18,
    },
    {
        product_name: 'Bacardi',
        price: 28.99,
        stock: 315,
        category_id: 3,
        brand_id: 19,
    },
    {
        product_name: '1800',
        price: 39.99,
        stock: 170,
        category_id: 4,
        brand_id: 20,
    },
    {
        product_name: 'Beefeater',
        price: 44.99,
        stock: 61,
        category_id: 5,
        brand_id: 21,
    },
    {
        product_name: 'Courvoisier',
        price: 46.99,
        stock: 287,
        category_id: 6,
        brand_id: 22,
    },
    {
        product_name: 'Sky',
        price: 10.06,
        stock: 726,
        category_id: 2,
        brand_id: 23,
    },
    {
        product_name: 'Absolut',
        price: 18.99,
        stock: 451,
        category_id: 3,
        brand_id: 24,
    },
    {
        product_name: 'Crown Royal',
        price: 38.99,
        stock: 205,
        category_id: 4,
        brand_id: 25,
    }, 
    {
        product_name: 'Tito',
        price: 36.99,
        stock: 240,
        category_id: 5,
        brand_id: 26,
    },
    {
        product_name: 'Martell',
        price: 42.99,
        stock: 142,
        category_id: 6,
        brand_id: 27,
    },
    {
        product_name: 'Fireball',
        price: 20.99,
        stock: 640,
        category_id: 1,
        brand_id: 28,
    },
    {
        product_name: 'Herradura',
        price: 28.99,
        stock: 260,
        category_id: 4,
        brand_id: 29,
    },
    {
        product_name: 'Stoli',
        price: 18.99,
        stock: 260,
        category_id: 5,
        brand_id: 30,
    },
    {
        product_name: 'Courvoisier',
        price: 16.99,
        stock: 340,
        category_id: 6,
        brand_id: 31,
    },
    {
        product_name: 'Black Velvet',
        price: 24.99,
        stock: 782,
        category_id: 1,
        brand_id: 32,
    },
    {
        product_name: 'canadian host',
        price: 16.99,
        stock: 936,
        category_id: 1,
        brand_id: 33,
    },
    {
        product_name: 'buron',
        price: 13.99,
        stock: 364,
        category_id: 2,
        brand_id: 34,
    },
    {
        product_name: 'Five wives Heavenly',
        price: 20.99,
        stock: 1080,
        category_id: 2,
        brand_id: 35,
    },
    {
        product_name: 'Five wives Sinful',
        price: 17.99,
        stock: 451,
        category_id: 2,
        brand_id: 36,
    },
    {
        product_name: 'Beehive',
        price: 26.99,
        stock: 205,
        category_id: 5,
        brand_id: 37,
    },
    {
        product_name: 'cabo wabo',
        price: 39.99,
        stock: 29,
        category_id: 4,
        brand_id: 38,
    },
    {
        product_name: 'Cuervo',
        price: 41.99,
        stock: 89,
        category_id: 4,
        brand_id: 39,
    },
    {
        product_name: 'Don Julio',
        price: 28.99,
        stock: 164,
        category_id: 4,
        brand_id: 40,
    },
    {
        product_name: 'Hornitos',
        price: 29.99,
        stock: 203,
        category_id: 4,
        brand_id: 41,
    },
    {
        product_name: 'El Charro',
        price: 14.99,
        stock: 108,
        category_id: 4,
        brand_id: 42,
    },
    {
        product_name: 'El Jimador',
        price: 24.99,
        stock: 74,
        category_id: 4,
        brand_id: 43,
    },
    {
        product_name: 'Herradura',
        price: 22.99,
        stock: 62,
        category_id: 4,
        brand_id: 44,
    },
    {
        product_name: 'Jose Cuervo',
        price: 24.99,
        stock: 48,
        category_id: 4,
        brand_id: 45,
    },
    {
        product_name: 'El Mayor',
        price: 38.99,
        stock: 82,
        category_id: 4,
        brand_id: 46,
    },
    {
        product_name: 'Arrow Blackberry',
        price: 14.99,
        stock: 108,
        category_id: 6,
        brand_id: 47,
    },
    {
        product_name: 'E&J',
        price: 24.99,
        stock: 74,
        category_id: 6,
        brand_id: 48,
    },
    {
        product_name: 'E&J Apple',
        price: 22.99,
        stock: 62,
        category_id: 6,
        brand_id: 49,
    },
    {
        product_name: 'Clear water Josephine',
        price: 54.99,
        stock: 72,
        category_id: 6,
        brand_id: 50,
    },
*/



function showProduct() {
    console.log(productData);
}

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;


