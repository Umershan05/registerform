import React ,{ useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import {addTodata, removeFromData} from "../redux/slices/DataSlice";
import { useNavigate } from 'react-router-dom'



import { useDispatch } from 'react-redux';


function Home() {
  
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  
  const handleSaveData =  (e) => {
    e.preventDefault()
    if (!name) {
      alert('Please enter a name.');
      return;
    }
  
    // Check if the email is empty
    if (!email) {
      alert('Please enter an email address.');
      return;
    }
  
    // Check if the phone number is empty
    if (!phonenumber) {
      alert('Please enter a phone number.');
      return;
    }
    // name validation
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
      alert('Name can only contain letters and spaces.');
      return;
    }
    // emailvalidation
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }
    // phone validation
    const phoneRegex = /^[0-9]{10}$/;

    if (!phonenumber.match(phoneRegex)) {
      alert('Please enter a 10 digit phone number');
      return;
    }
    dispatch(addTodata({name ,email, phonenumber}))
   
    navigate('/SaveData');
   
  };
  
  
  
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div style={{width:'400px'}} className='bg-light p-3 rounded'>
    <h1 className='d-flex justify-content-center align-items-center' >Register</h1>
      <hr />
      <>
      <Form.Floating className="mb-3">
      <Form.Control
          id="floatingInputCustom"
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          
        />
        <label htmlFor="floatingInputCustom">Name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingnumberCustom"
          type="tel"
          placeholder="phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="floatingnumberCustom">Phone number</label>
      </Form.Floating>
      <div className='d-flex justify-content-center align-items-center '>  <Button onClick={handleSaveData}   type="submit" className='bg-dark text-light w-75 rounded' variant="">Save data</Button>
      </div>
      </>

     </div>
    </div>
  )
}

export default Home