import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HomePage() {
  const [data, setData] = useState<number>(5);
  const [numberData, setNumberData] = useState<number>(5);

  const numberArray = [1,2,3,4,5,6,7,8];
  const people =
  [
    {name:"my",age: 19,status:"active"},
    {name:"you",age: 9,status:"inactive"},
    {name:"other",age: 19,status:"active"}
  ];
  useEffect(() =>
  {
    addData();
  },[numberData]);
  const addData = ()=>{
  const oldData = data ;
  const newData = oldData+1;
  setData (newData);
  };
const decrementData = () =>{
  setNumberData (numberData - 1);
};

  return (
    <>



<button title='student'>
    <Link to="/student">Student Details</Link>
</button>


    <hr />
    <br /><br />





    <button title = "title" onClick={addData } className={'number ${data}'}>
      add Data
    </button>

      <div>{data}</div>
      <div> Increment Data :{data}</div>
      <br/>
      <button onClick ={decrementData}>decrement</button>
      <div> decrement Data :{numberData}</div>
      {numberArray.map((item ,i ) => {
        return <div key= {i}>{item}</div>
       })}
{people.map ((item ,i)=>{
        return(
          <div key ={i}>
            {item.status === "active" &&(
            <>
          <div> name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br/>
          </>
            )}
            </div>
        );
      })}
      <hr/>
        
       {people.map ((item ,i)=>{
        return(
          <div key ={i}>
            {item.status === "active" ? (
            <>
          <div> name: {item.name}</div>
          <div> Age: {item.age}</div>
          <br/>
          </>
        ): (
        <>
        <div> inactive</div>
        <br/>
        </>
        )}
        </div>
        );
      })}
      </>
    );
  }

  export default HomePage;