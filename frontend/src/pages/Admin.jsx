// import React from 'react'

// const Admin = () => {
//   return (
//     <div>
//       <h1>Admin Page</h1>
//     </div>
//   )
// }

// export default Admin

import React, { useContext, useState } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'
import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Admin = () => {
    const [credentials, setCredentials] = useState({
       email: undefined,
       password: undefined
    })
 
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()
 
    const handleChange = e => {
       setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }
 
    const handleClick = async e => {
       e.preventDefault()
 
       dispatch({type:'LOGIN_START'})
 
       try {
          const res = await fetch(`${BASE_URL}/auth/login`, {
             method:'post',
             headers: {
                'content-type':'application/json'
             },
             credentials:'include',
             body: JSON.stringify(credentials)
          })
 
          const result = await res.json()
          if(!res.ok) alert(result.message)
          console.log(result.data)
 
          dispatch({type:"LOGIN_SUCCESS", payload:result.data})
          navigate('/')
       } catch(err) {
          dispatch({type:"LOGIN_FAILURE", payload:err.message})
       }
    }

  return (
    <section>
        {/* <h1 className='admin'>Admin Login</h1> */}
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="login__container d-flex justify-content-between">
                     <div className="login__img">
                        <img src={loginImg} alt="" />
                     </div>

                     <div className="login__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Admin Login</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>
                        </Form>
                        <p>Admin Dashboard <Link to='/admindashboard'>Admin</Link></p>
                        {/* <p>Don't have an account? <Link to='/register'>Create</Link></p> */}
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
  )
}

export default Admin



// import React, { useState } from 'react';

// const Admin = () => {
//   // State variables to store email and password
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   // Hardcoded admin credentials
//   const adminEmail = 'admin@gmail.com';
//   const adminPassword = 'admin';

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if entered credentials match admin credentials
//     if (email === adminEmail && password === adminPassword) {
//       // For now, let's just log in successful
//       console.log('Login successful');
//     } else {
//       console.log('Login failed. Incorrect email or password.');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Admin;
