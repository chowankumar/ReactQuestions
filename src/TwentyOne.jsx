import React from 'react'

export const TwentyOne =()=>{

  //use case of Copying Array

  
  const number =[1,2,3];
  const copiedNumber = number;
  copiedNumber[1] = 5;
  console.log("============case number 1=========")
  console.log(" without spread : number" , number);
  console.log("copiedNumber",copiedNumber);
  // In js simply assigning an array to new vairable create a reference, not a copy. this means that if you modify a reference not a copy. this mean that if you modify the new array, the orignal array will also be changed.
  const number1 =[1,2,3];
  const copiedNumber1 = [...number1];
  copiedNumber1[1] = 5;
  console.log("with spread : number" , number1);
  console.log("copiedNumber",copiedNumber1);


  //usecase 2 : Concatenating Arrays 


  const arr1 = [1,2,3];
  const arr2 = [4,5,6];
  const arr3 = [...arr1,...arr2];
  console.log("========case number 2 =========")
  console.log(arr3);


  //usecase 3 : Adding elements to an array
  const arr = [1,2,3];
  const newArr = [...arr,4,5,6];
  console.log("======case number 3====")
  console.log(newArr)

  //useCase 4 : Speading object properties
  //? write a js function that takes an object respresding a person with name and age properties. the function should use the spread operator (...) to create a new object where the age property of the perosn is increased by 1.

  const person = {name:"chowan", age:30};
  const updatePerson = {...person,age:person.age+1};
  console.log("=====use case 4 =======")
  console.log(person);
  console.log(updatePerson)



  return (
    <>

    </>
  )
}