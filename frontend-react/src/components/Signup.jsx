import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup(data) {
  const [form,updateForm]=useState({"email":"","password":"","firstName":"","lastName":""})
  const navigate =useNavigate()

  function formUpdate(e){
    updateForm(
      {
        ...form,
        [e.target.name]:e.target.value
      }
    )
  }
  async function sendForm(e){
    e.preventDefault()
    // data.updateMes(true)
    try{
      const formData=new FormData()
      console.log(form)
      formData.append("formData",JSON.stringify(form))
      const response = await axios.post(
        "http://localhost:4000/language-backend/v1/auth/signup",
        {
          "email": form.email,
          "password": form.password,
          "firstName": form.firstName,
          "lastName": form.lastName
        }
      );
      if(response){
        data.updateMes(true)
        data.updatePref([response.data.message,'green'])
      }
      navigate("/")
    }catch(e){
      console.log(e);
      toast.error("Failed to signup. Please check your details.");
    }
  }

    useEffect(
        ()=>{
            data.updateFlag("signup")
        }
    )
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={data.logo}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create an Account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={sendForm}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e)=>formUpdate(e)}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                  onChange={(e)=>formUpdate(e)}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                  onChange={(e)=>formUpdate(e)}
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                  onChange={(e)=>formUpdate(e)}
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{' '}
              <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign in here
              </a>
            </p>
          </div>
        </div>
        <ToastContainer />
      </>
    )
  }
  