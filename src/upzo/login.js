import React from 'react';
//import "../styles/Login.scss";
//import LocalStorageService from "../utilities/localStorageService";
import {Link, Redirect } from "react-router-dom";
//import axios from "axios";
//import Cookies from "js-cookie";
//import {rootUrl} from "../utilities/constants";
//import * as yup from "yup";
import {useForm} from "react-hook-form";



export default function Login(props)
{
  const { register, handleSubmit, errors,getValues } = useForm(
    
  );
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };


  return(<form onSubmit={handleSubmit(onSubmit)}>
  <div>
    <label>First Name</label>
    <input type="text" name="firstName" ref={register} />
    {errors.firstName && <p>{errors.firstName.message}</p>}
  </div>
  <div style={{ marginBottom: 10 }}>
    <label>Last Name</label>
    <input type="text" name="lastName" ref={register} />
    {errors.lastName && <p>{errors.lastName.message}</p>}
  </div>
  <div>
    <label>Age</label>
    <input type="text" name="age" ref={register({required:true})} />
    {errors.age && <p>{errors.age.message}</p>}
  </div>
  <div>
    <label>Website</label>
    <input type="text" name="website" ref={register} />
    {errors.website && <p>{errors.website.message}</p>}
  </div>
  <input type="submit" />
</form>);
}