import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { removeFromData } from '../redux/slices/DataSlice';
import { Link } from 'react-router-dom'
function SaveData() {
  
  const data =useSelector((state)=>state.datareducer)
  const dispatch=useDispatch()
  const handleDelete = (name) => {
    dispatch(removeFromData(name));
  }
  return (
    <div>
   { 
   
   
    data.length>0?
      <table className='table shadow border'>
        <thead>
          <tr>
            <th>Sl no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
                data.map((item,index)=>(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumber}</td>
                    <td><button  onClick={()=>handleDelete(item.name)} className='btn'><i className="fa-solid fa-trash text-danger fa-2x"></i></button></td>
  
                  </tr>
                ))
              }
        </tbody>
      </table>
   
    :<div style={{height:'60vh'}} className='w-100 d-flex flex column justify-content-center align-items-center'>
    <img height={'230px'} src="https://cdn.dribbble.com/users/1753953/screenshots/3818675/media/f59ed80d5c527e2461d8ba49adc36160.gif" alt="" />
    <h3 className='fw-bolder text-primary'>no data added</h3><br />
    <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link>
  </div>
  
  }
  </div>
  );
}


export default SaveData;