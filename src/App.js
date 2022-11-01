import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Page1 from './pages/Page1';
import Page4 from './pages/Page4';



function App () {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Page1/>} />
          <Route path='/seja-um-franqueado' element={<Page4/>} />
        </Routes>
      </BrowserRouter>
    
  )
}
export default App;

