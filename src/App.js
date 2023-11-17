import React, { useState } from 'react'
import './App.css'

const App = () => {
  const[formData,setFormData]=useState({
    fname:'',
    lname:'',
    email:'',
    num:'',
  })

  const[errors,setErrors]=useState({})

  const [isDarkTheme, setIsDarkTheme] = useState(false);


  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  
  const validateForm=()=>{
    let isValid=true;
    const newErrors={};

    if (!formData.fname.trim()) {
      newErrors.fname = 'First Name is required';
      isValid = false;
    }
    if(!formData.lname.trim()){
      newErrors.lname='Last Name is required';
      isValid=false;
    }
    if(!formData.email.trim()){
      newErrors.email="Email is required";
      isValid=false
    }
    if (!formData.num.trim()) {
      newErrors.num = 'Mobile Number is required';
      isValid = false;
    } else if (formData.num.length !== 10 || isNaN(formData.num)) {
      newErrors.num = 'Mobile Number should have 10 digits';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(validateForm()){
      console.log('Form Submitted:' ,formData)
    }else{
      console.log('Form validate Failed')
    }
  }

  const handleChange=(e)=>{
    const{id,value}=e.target 
    setFormData({
      ...formData,
      [id]:value,
    })
  };

  return (
    
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <div className='card-cont'>
        <h1>Form Validation</h1>
        <form className='form' onSubmit={handleSubmit}>
          <label htmlFor='fname' className='label'>First Name</label>
          <input type="text" id="fname" className='input' placeholder='First Name' value={formData.fname} onChange={handleChange}/>
          {errors.fname&&<p className='error'>{errors.fname}</p>}
          <label htmlFor='lname' className='label'>Last Name</label>
          <input type="text" id="lname" className='input' placeholder='Last Name' value={formData.lname} onChange={handleChange}/>
          {errors.lname&&<p className='error'>{errors.lname}</p>}
          <label htmlFor='email' className='label'>Email</label>
          <input type="text" id="email" className='input' placeholder='Email' value={formData.email} onChange={handleChange}/>
          {errors.email&&<p className='error'>{errors.email}</p>}
          <label htmlFor='num' className='label'>Mobile Number</label>
          <input type="number" id="num" className='input' placeholder='Mobile Number' value={formData.num} onChange={handleChange}/>
          {errors.num&&<p className='error'>{errors.num}</p>}
          <div className='btn-cls'>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
        <div className='btn-cls'>
        <button className='btn' type='button' onClick={toggleTheme}>Theme</button>
        </div>
      </div>
      </div> 
  )
}

export default App