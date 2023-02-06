import './Test.css'

function Test(props)
{
  return(
  
    <div>
        <h1>Welcome to the Test Component</h1>
        <h2>Add Result: </h2>
        <p>Value of A : {props.a}</p>
        <p>Value of B : {props.b}</p>
        <p>Add Result : {props.c}</p>
        <p>Add Result : {props.a + props.b }</p>

    </div>

  )
}

export default Test;