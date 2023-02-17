
const App = () => {

  const myName = `wasuchok Jainam`
  const mySalary = 50000
  const Money = 50000
  const randomNumber = Math.random()

  return (
    <>
    
    <div className="text-red-500">
      Name : { myName}
    </div>
    <div className="div">
      เงินเก็บ { mySalary + Money}
    </div>
    <div className="div">
      สุ่มตัวเลข { randomNumber }
    </div>
    <h1 className="text-3xl font-bold underline text-blue-900">
      Hello world!
    </h1>
    {
      randomNumber < 0.5 ? "่น้อยกว่า" : "มากกว่า"
    }

    </>
  )
}

export default App