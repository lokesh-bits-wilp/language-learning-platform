import React from 'react'
import { useEffect } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Home(data) {

    const user=localStorage.getItem("user")

    useEffect(
        ()=>{
            data.updateFlag("home")
        }
    )
  return (
    <div className="container w-full flex flex-col justify-center items-center">
    <div className='container w-full mx-10 flex justify-between shadow-xl h-[18]'>
           <div className='container-full ml-4 text-center font-bold text-2xl'>
               <AccountCircleRoundedIcon style={{ fontSize: 48 }}/>
               <h1 className='inline-block'>Hello {user}</h1>
           </div>
           <div>
           <a href='update'
                     className="flex justify-center rounded-md bg-indigo-600 mr-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                   >
                     update profile
                   </a>
           </div>
       </div>
       <div><h1 className='text-3xl font-mono font-bold mt-10'>Available Languages</h1></div>
       <div className="container w-max m-40 grid grid-cols-2 gap-8">
         <div className="text-center p-2 container-sm w-60 h-10 bg-blue-200 shadow-blue-800 shadow-md rounded-2xl border-2 border-blue-800"><a href="/language/hindi"><h1 className="font-mono font-extrabold">Hindi</h1></a></div>
          <div className="text-center p-2 container-sm w-60 h-10 bg-blue-200 shadow-blue-800 shadow-md rounded-2xl border-2 border-blue-800"><a href="/language/english"><h1 className="font-mono font-extrabold">English</h1></a></div>
           <div className="text-center p-2 container-sm w-60 h-10 bg-blue-200 shadow-blue-800 shadow-md rounded-2xl border-2 border-blue-800"><a href="/language/tamil"><h1 className="font-mono font-extrabold">Tamil</h1></a></div>
            <div className="text-center p-2 container-sm w-60 h-10 bg-blue-200 shadow-blue-800 shadow-md rounded-2xl border-2 border-blue-800"><a href="/language/marathi"><h1 className="font-mono font-extrabold">Marathi</h1></a></div>
       </div>
       
     </div>
  )
}

export default Home