import logo from './logo.svg';
import './App.css';

function App() {
  // let str = "hello"
// let str2 = "world"

// if (str === "hello" && str2 === "world")
//   {
//     console.log("hello world");
//   }
// const student1 = {
//   name:  "Nirbhay",
//   age: "5",
//   address:  "jamshedpur",
// };

// const student2 = {
//   name: "Nirbhay",
//   age: "5",
//   address: "Mumbai",
// }
// const fun1 =() => {
//   const num1 =1;
//   const num2 =2;
//   const sum = num1+ num2;
//   console.log(sum);
// };
// if(student1.name===student2.name){
//   fun1();
// }
// else{
//   console.log("hello")
// }
//const arr1 = [1,2,3,4,5,6]

//for (let item of arr1){
 // console.log(item);

 //const people = [
    //{name: "puja", age: "19"},
    //{name: "jake", age: "19"},
    //{name: "mike", age: "19"},
 // ];

  // for(let person of people){
  //   console.log(`Name: ${person.name},Age: ${person.age}`)
  // };
  
  //people.forEach((person) => {
     //console.log(`name:${person.name},age:${person.age}`);
  //});

  // const employee = {
  //   name: "prachi",
  //   age: 19 ,
  //   occupation: "wife",
  // };
  // console.log(employee.name);
  

  /* ===========using map to change any data in array===========*/


  const employees = [
    {name: "Alice", age: 30,salary:50000},
    {name: "Alice", age: 30,salary:50000},
    {name: "Alice", age: 30,salary:50000},
    {name: "Alice", age: 30,salary:50000},
  ];
  const mappedEmployees = employees.map((item) => {
    //console.log("item",item);

    return{
      ...item,
      salary: item.salary + 100,
    };
  },[]);
  console.log("employees",employees);
  console.log("mappedEmployees",mappedEmployees);




  /*=============filter and find for an object array========*/


  const products = [
    {id: "1001", name: "Laptop", price: "1000", category: "Electronics" },
    {id: "1002", name: "Shirt", price: "50", category: "Clothing" },
    {id: "1003", name: "Coffee Maker", price: "80", category: "Home Appliances" },
    {id: "1004", name: "Headphones", price: "200", category: "Electronics" },
    {id: "1005", name: "Pants", price: "60", category: "Clothing" },
  ];
  const filteredProducts = products.filter((item) => {
    return item.category === "Clothing";
  });
  console.log("filteredProducts", filteredProducts);

  const foundProducts = products.find((item) => {
    return item.id === "1002";
  });
  console.log("foundProducts", foundProducts);



/*========== ternary operator ==============*/



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
