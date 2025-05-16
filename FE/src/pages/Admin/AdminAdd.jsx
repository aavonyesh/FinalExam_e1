import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
function AdminAdd() {
    const URL = "http://localhost:3000/"
  return (
    <div>
        <Formik
       initialValues={{ image: '', name: '', price: '' }}
       validationSchema={Yup.object({
         image: Yup.string()
           .required('Required'),
         name: Yup.string()
           .required('Required'),
         price: Yup.number()
         .required('Required'),
       })}
       onSubmit={async (values, { resetForm }) => {
         try {
            const res = await axios.post(URL,values)
            console.log("Success")
            resetForm()
         } catch (error) {
            console.log(error)
         }
       }}
     >
       <Form>
         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">price</label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
     </Formik>

    </div>
  )
}

export default AdminAdd