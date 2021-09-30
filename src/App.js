import React, {useState, useEffect} from "react"
import './App.css';
import {fetchRequest, logIn, tokenLogin} from "./utils"
import {Login} from "./components/login"
import {SignUp} from "./components/signUp"
import {NoteCard} from "./components/noteCard"

const App = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [account, setAccount] = useState()
  const [arr, setArr] = useState([
    {title: "Note 1", content: "First Note"},
    {title: "Note 2", content: "Second Note"},
    {title: "Note 3", content: "Third Note"}
  ])

  useEffect(() => {
    tokenLogin(setAccount)
  }, [setAccount])

  const submitHandler = async (e) => {
    e.preventDefault()
    fetchRequest(username, password, setAccount)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    logIn(username, password, setAccount)
  }

  const addArray = (e) => {
    e.preventDefault()
    const tempArr = arr
    tempArr.push({title: "Note 4", content: "Fourth Note"})
    setArr(tempArr)
  }

  return (
    <div className="App">
      <SignUp setUsername={setUsername} setPassword={setPassword} submitHandler={submitHandler}/>
      <Login setPassword={setPassword} setUsername={setUsername} loginHandler={loginHandler}/>
      <h1>{account ? account.name : "No User"}</h1>
      <button onClick={addArray}>Click Here</button>
      {arr.map((item, index) => (
        <NoteCard key={index} title={item.title} content={item.content}/>
      ))}
    </div>
  )
}

export default App;
