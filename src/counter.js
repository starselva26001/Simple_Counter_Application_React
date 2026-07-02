import { useState } from "react"

function Counter(){

    const [count,setCount] = useState(0)

    
    function increment()
    {
        setCount(count+1)
    }
    
    function decrement()
    {
        
        if(count>0){
            setCount(count-1)
    
        }
        else{
            setCount(0)
        }

        


        
       
    }

    function reset()
    {
        setCount(0)
        
    }

    

    return(
        <div className="main-card">
            <h1>Counter Application</h1>
            <div>
                <h2>{count}</h2>
            </div>


                <div className="btn-container">

                    <button onClick={increment}>Inc(+) by 1</button>
                    <button onClick={reset}>Reset</button>
                    <button onClick={decrement} disabled = {count===0} >Dec(-) by 1</button>
                    
                </div>
                <p>{count===0 && "Minimum Limit Reached"}</p>
                
                
            
        </div>
    )
}

export default Counter