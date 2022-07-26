import "./register.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import * as Yup from 'yup'

function Register() {
  const navigate = useNavigate()
  const initialvalues = {
    email:"",
    username:"",
    password: ""
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(3).max(15).required(),
  })

  const OnSubmit=(data)=>{
    axios.post("http://127.0.0.1:8000/api/user/register",data).then((response)=>{
        if (!response.data.error) {
            navigate("/login")
        }
        else{
            alert(response.data.error)
        }
    })
  }
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
               <h3 className="loginLogo">CanIGo?</h3>
               <span className="loginDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam recusandae, quas sed ut itaque quidem?</span>
            </div>
            <div className="loginRight">
            <Formik initialValues={initialvalues} onSubmit={OnSubmit} validationSchema={validationSchema}>
          <Form>
               <div className="loginBox">
               
                <Field type="email" className="loginInput" name="email" placeholder="Email"/>
                <ErrorMessage name="email" component="span" />

                <Field type="text" className="loginInput" name="username" placeholder="UserName"/>
                <ErrorMessage name="username" component="span" />


                <Field type="password" className="loginInput" name="password" placeholder="Password"/>
                <ErrorMessage name="password" component="span" />

                

                <button className="loginButton">Sign Up</button>
                <span className="loginForgot">Log into Your Account.</span>
               
               </div>
               </Form>
               </Formik>
            </div>
        </div>
    </div>
  )
}

export default Register