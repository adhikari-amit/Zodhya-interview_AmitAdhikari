import "./login.css"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import * as Yup from 'yup'
import { Link } from "react-router-dom"



function Login() {  
  const navigate = useNavigate()

  const initialvalues = {
    username:"",
    password: ""
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(3).max(15).required(),
  })

  const OnSubmit=(data)=>{
    axios.post("http://127.0.0.1:8000/api/user/login",data).then((response)=>{
        if (!response.data.error) {
            navigate("/")
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
                <Field  type="username" className="loginInput" name="username" placeholder="Username" autoComplete="false"/>
                <ErrorMessage name="username" component="span" />
                <Field  type="password" className="loginInput" name="password" placeholder="Password" autoComplete="false"/>
                <ErrorMessage name="password" component="span" />
                <button className="loginButton" type="submit" >Log In</button>
                <Link className="loginRegisterButton" to="/register" style={{"text-decoration":"none"}}>Create a New Account</Link> 
               </div>
               </Form>
               </Formik>
            </div>
        </div>
    </div>
  )
}

export default Login