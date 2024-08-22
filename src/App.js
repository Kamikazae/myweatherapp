import React from 'react'
import { useEffect } from 'react'
import { fetchBackgroundImage } from './features/unsplash/unsplashSlice'
import { useDispatch,useSelector} from 'react-redux'
import './App.css'

const App = ({children}) => {
  const dispatch=useDispatch();
  const imageUrl=useSelector((state)=>state.background.imageUrl)
  useEffect(()=>{
    dispatch(fetchBackgroundImage())
  },[dispatch])
  return (
    <div className='App'style={{backgroundImage:`url(${imageUrl})`}}>
      <header className='header'>
        Weather & Quotes App
        </header>
      <main className='main-content'>
        {children}
      </main>
  
    </div>
  )
}

export default App
