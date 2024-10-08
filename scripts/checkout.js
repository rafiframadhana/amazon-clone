import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkOutHeader.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart, loadCartFetch } from '../data/cart.js';
// import '../data/cart-class.js';
// import '../data/car.js';
//import '../data/backend-practice.js'


async function loadPage() {               //using async await and loadCartFetch
    try {
        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ])


    } catch(error){
        console.log('Unexpected Error. Please try again');
    }

    
    renderOrderSummary();
    renderPaymentSummary();
    renderCheckoutHeader();

}

loadPage();



// async function loadPage() {    //using async await and using loadCart()
//     try {
//         //throw 'error1';

//         await loadProductsFetch();

//         const value = await new Promise((resolve, reject) => {
//             //throw 'error2';
//             loadCart(() => {
//                 //reject('error3');
//                 resolve('value1');
//             });
//         });

//     } catch(error){
//         console.log('Unexpected Error. Please try again');
//     }

    
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();

// }

// loadPage();


// Promise.all([                          //using Promise.all
//     loadProductsFetch(),
//     new Promise((resolve) => {
//         loadCart(() => {
//             resolve('value2');
//         });
//     })

// ]).then((values)=>{
//     console.log(values);

//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });




// new Promise((resolve) => {                     ////using normal Promise
//     loadProducts(() => {
//         resolve('value1');
//     });

// }).then((value) => {
//     console.log(value)
//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//     renderCheckoutHeader();
// });

// loadProducts(() => {
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//         renderCheckoutHeader();
//     });
// });
