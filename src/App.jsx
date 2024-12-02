
import { Provider } from 'react-redux'
import './App.css'
import chatStore from './redux/chatStore'

import { useEffect, useState } from 'react'
import socket from './socket'
import ChatInput from './components/ChatInput'


function App() {

  const [isGetStarted, setIsGetStarted] = useState(false)

  useEffect(() => {
    socket.connect()

    return () => {
      socket.disconnect()
    }
  }, [])

  return (
    <>
      <Provider store={chatStore}>
        <div className="d-flex flex-column justify-content-center align-items-center main" style={{ minHeight: "100vh" }}>
          {
            isGetStarted ?
              <div className="d-flex flex-column justify-content-center align-items-center ">
                <ChatInput />

              </div>
              :
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fw-bolder text-success" style={{ fontFamily: "monospace" }}>Let's Chat</h1>
                <img style={{width:"80%"}} src="https://i.pinimg.com/originals/9f/3a/a6/9f3aa6aad56a186236e021522ba8baa4.gif" alt="" />
                <h3 className="fw-bolder"> Where Conversations Come Alive!</h3>
                <p>Communicate with your friends quickly and easily</p>
                <button onClick={() => setIsGetStarted(true)} className='btn btn-success mt-2 fw-bolder hover:btn hover:rounded-5 px-4'>GET STARTED</button>
              </div>
          }
        </div>

      </Provider>
    </>
  )
}

export default App