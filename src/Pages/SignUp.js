import React from 'react'
import '../assests/signup.css'
import {useForm} from "react-hook-form"
import useYupValidationResolver from '../utils/Validation'
import * as yup from 'yup';

const SignUp = () => {
    const validationSchema = yup.object({
    email: yup.string().email('Invalid email format').required('Required'),
    first_name: yup.string().required('Required'),
    last_name: yup.string().required('Required'),
    mobile: yup.number().required('Required'),
    password: yup.string().min(4),
   
  });
  const resolver = useYupValidationResolver(validationSchema)
  const {handleSubmit,reset, register,  formState:{ errors },} = useForm({ resolver});
  const onSubmit = (data, e) => {
    e.target.reset('')
}
  console.log(errors,"errors");
  return (

    <div className='container mt-2'>
      <div className="form">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center mt-2'>Sign Up Form</h2>
        <div className="form-group">
        <label htmlFor="example"  className="form-label fw-bold">First Name:</label>
        <input  {...register("first_name")}  />
        <p> {errors.first_name &&
                errors.first_name.message ? (
                  <small className="text-red">
                    {errors.first_name.message}
                  </small>
                ) : null}</p>
            
        </div>
       

        <div className="form-group">
        <label htmlFor="example"  className="form-label fw-bold">Last Name:</label>
        <input  {...register("last_name")}  />
        </div>
        <div className="form-group">
        <label htmlFor="example"  className="form-label fw-bold">Phone Number:</label>
        <input  {...register("mobile",{required:"true"})}  />
        </div>
        <div className="form-group">
        <label htmlFor="example"  className="form-label fw-bold">E-mail:</label>
        <input  {...register("email",{required:"true"})}  />
        <p> {errors.email?. ( <small className="text-red">{errors.email.message}</small>)}</p>
        </div>
        <div className="form-group">
        <label htmlFor="example"  className="form-label fw-bold">Password:</label>
        <input  {...register("password")}  />
        <p>{errors.password?.message}</p>
        </div>
        
        <input type="submit" value="Submit" />
        </form>
        </div>
      
    </div>
  )
}

export default SignUp
