import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Mapview } from './views/MapPage'
import { CreatPointView } from './views/CreatePointPage'
import { CreatStateView } from './views/CreateStatePage'
import { CreatCityView } from './views/CreateCityPage'
import { CreateTypeView } from './views/CreateTypePage'
import { ListPointPage } from './views/ListPointPage'
import { DashboardVew } from './views/DashboardPage'


function App() {


  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardVew/>}  />  
          <Route path='/map' element={<Mapview/>}  />
          <Route path='/create-point' element={<CreatPointView/>} />
          <Route path='/list-point' element={<ListPointPage/>} />
          <Route path='/create-state' element={<CreatStateView/>} />    
          <Route path='/create-city' element={<CreatCityView/>} />   
          <Route path='/create-type' element={<CreateTypeView/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
