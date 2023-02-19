
import Main_Layout from "../layouts/main_layout"
import { useState, useEffect } from "react"

const Counter_Page = () => {
   const [counter, setCounter] = useState(0)

   const increment = async () => setCounter(counter+1)


   const decrement = async () => setCounter(counter-1)

   useEffect(() => {
    setCounter(50)
   }, [])


  return (
    <>
    <Main_Layout />
    <div className="mt-10 mx-36">
        <h1>Counter : { counter }</h1>
        <button className="btn btn-primary mt-2 mr-2" onClick={ increment }>เพิ่ม</button>
        <button className="btn btn-primary mt-2" onClick={ decrement }>ลบ</button>
    </div>
    </>
  )
}

export default Counter_Page