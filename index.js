// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}
var bestCustomer;

function setBestCustomer(){
    bestCustomer = "not bob"
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob"
}
const leastFavoriteCustomer = 'Tony'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Winnie'
}

// the error is because you cannot overwrite a variable declare with const