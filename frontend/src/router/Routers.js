import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import About from '../pages/About'
import Admin from '../pages/Admin'
import MyBookings from '../pages/MyBookings'
import AdminDashboard from '../components/Admin/Dashboard/AdminDashboard'
import Users from '../components/Admin/Dashboard/Users'
import Services from '../components/Admin/Dashboard/Services'


const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/admin' element={<Admin/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/mybookings' element={<MyBookings/>} />
         <Route path='/admindashboard' element={<AdminDashboard/>} />
         <Route path='/users' element={<Users/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
      </Routes>
   )
}

export default Routers