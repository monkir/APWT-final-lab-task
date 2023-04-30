import MyLayout from "../component/layout"
import Header from "../component/header"
import Link from "next/link"
import React from 'react';
import { useForm } from 'react-hook-form';

export default function mngCustomers({data}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <>
    
    <MyLayout title="Employee Login"/>
    <div>
      <Link href={"#"}>Index</Link>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="email" {...register("email", {required: true})} />
      <input type="password" placeholder="password" {...register("password", {required: true})} />

      <input type="submit" />
    </form>
    </>
  )
}

