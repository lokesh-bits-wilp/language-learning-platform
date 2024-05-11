export default function Navbar(data) {

  return (
    <header className="bg-white">
      <nav className="mx-auto w-full flex justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-col items-center">
        <a href="/" className="-m-1.5 p-1.5">
          <img className="h-8 w-auto bg-blue-200" src={data.logo} alt="logo" />
          </a>
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-bold bg-blue-200 border-b-2 border-t-2 border-blue-700">Language Learning Platform</span>
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {(data.flag!=="home")?((data.flag==="signup")?
          <a href="/login"   className="text-sm font-semibold leading-6 text-[#0799FB]">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>:<a  href="/signup" className="text-sm font-semibold leading-6 text-[#0799FB]">
            Signup <span aria-hidden="true">&rarr;</span>
          </a>):<a  href="/login" className="text-sm font-semibold leading-6 text-[#0799FB]">
            Signout <span aria-hidden="true">&rarr;</span>
          </a>}
        </div>
      </nav>
            
    </header>
  )
}
