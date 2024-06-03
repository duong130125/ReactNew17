import { Route, Routes } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import Student from './components/Student'
import Employee from './components/Employee'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/product/:id' element={<ProductDetail/>} />
      <Route path='/student/:name' element={<Student/>} />
      <Route path="/employee" element={<Employee/>} />
    </Routes>
    </>
  )
}
