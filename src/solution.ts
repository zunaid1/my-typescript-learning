type numStrBool = string | number | boolean;

const formatValue = (pharam:numStrBool ) => {

if(typeof(pharam) === 'string' )
{
	return pharam.toUpperCase();
}

if(typeof(pharam) === 'number' )
{
	return pharam * 10;
}
	if(typeof(pharam) === 'boolean' )
{
	return !pharam;
}
}


//--------------------------------------------------------
type StrArray = string | string [] | number [];
function getLength(value : StrArray){
	
	if(typeof value === 'string'){
		return value.length;
	}
	if(Array.isArray(value)){
		return value.length;
	}
}

//----------------------------------------
class Person {
	name : string;
	age: number

	constructor(name: string, age: number){
		this.name= name;
		this.age=age
	
}

public getDetails =()=> {
		return `Name: ${this.name}, Age: ${this.age}`
}

}
//--------------------------------------------------
type TcustomType = {
	title: string;
	rating: number;
}

function filterByRating(items: TcustomType[] ): TcustomType[]
{
return items.filter(item => item.rating >= 4);
}

//---------------------------------------------
type TUser = {
	id: string | number,
	name: string, 
	email: string,
	isActive: boolean
}

function filterActiveUsers(users : TUser[]){
	return users.filter(user => user.isActive=== true);

}

//-------------------------------------------
interface IBook  {
title: string,
author: string,
publishedYear:number,
isAvailable: boolean,
}

function printBookDetails(books : IBook): void{
	const isAvailable = books.isAvailable ? "Yes" : "No";

const result= `Title: ${books.title}, Author: ${books.author}, Published: ${books.publishedYear}, Available: ${isAvailable}`;
console.log(result);

}

//--------------------------------------------
function getUniqueValues<T extends number | string>(
  arr1: T[],
  arr2: T[]
): T[] {

  const result: T[] = [];

  const combined = [...arr1, ...arr2];

  for (let i = 0; i < combined.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === combined[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(combined[i]);
    }
  }

  return result;
}

//--------------------------------------------
type TProduct = {
name: string,
price: number,
quantity: number,
discount?: number
}

function calculateTotalPrice(products: TProduct[]){
 return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;

    const discountAmount = product.discount? (basePrice * product.discount) / 100
      : 0;

    return total + (basePrice - discountAmount);
  }, 0);
}

