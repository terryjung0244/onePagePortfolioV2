import React from 'react'
import './../Style/home.css'
import bgImage from './../../resources/image/homeBg.jpg';

const Home = () => {

  let obj ={
    name: "sungjun",
    age: 30,
    hobby: "badminton"
  };

  // console.log(Object.keys(obj))
  


  let arr = ["apple", "banana", "mango"];

  return (
    <div className='homeMainCon' style={{ backgroundImage: `url(${bgImage})`}}>
      

        <div className='homeMyNameCon'>
          I'm Terry
        </div>

        <div className='homeTitleCon'>
          A Front-end Developer
        </div>

        <div className='homeProjectCon'>
          View Project
        </div>

          <div style={{color: '#fff'}}>
            {Object.entries(obj).map((fruit, index) => {
              console.log(fruit[0]);
              console.log(fruit[1]);
              return (
                <div key={index}>
                  {fruit[0]} : {fruit[1]}
                </div>  
              )
            })}
          </div>
      
    </div>
  )
}

export default Home

// let array = [
//   {
//     fruitName: "apple",
//     count: [
//       {

//       },
//       {

//       }
//     ]
//   },
//   {
//     fruitName: "banana",
//     count: 11,
//   },
//   {
//     fruitName: "mango",
//     count: 12,
//   },
// ];

// array.findIndex((data) => data.fruitName === "banana");
// array.map((data) => )
// array.filter((data) => );

// let obj = {
//   name: "hello",
//   age: 10,
//   price: 50,
//   desc: "greeting"
// };

// Object.keys = ["name", "age", "price", "desc"]
// Object.values(obj).indexOf(50)

// console.log()

