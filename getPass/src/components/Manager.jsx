import React from 'react'
import { useRef, useState, useEffect } from 'react'

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])


  const showPassword = () => {
    if (ref.current.src.includes("/icons/eyecross.png")) {
      ref.current.src = "/icons/eye.png"
    } else {
      ref.current.src = "/icons/eyecross.png"
    }
  }

  const savePassword = () => {
    setpasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log(...passwordArray, form)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-40 opacity-20 blur-[100px]"></div>
      </div>

<div className="container mx-auto max-w-6xl px-40 py-16">

        <h1 className='text-4xl font-bold text-center'>

          <div className="logo font-bold text-2xl">
            <span className="text-green-600">&lt; </span>
            get
            <span className="text-green-600">Pass / &gt; </span>

          </div>
        </h1>
        <p className='text-green-900 text-center text-sm '>Your own Password Manager</p>

        <div className='text-black flex flex-col p-4 gap-8 items-center'>
          <input value={form.site} onChange={handleChange} placeholder='Enter website url' className=' bg-white rounded-full border border-green-500 w-full p-4 py-0.5' type="text" name="site" id="site" />
          <div className="flex w-full gap-8">
            <input value={form.username} onChange={handleChange} placeholder='Enter username' className=' bg-white rounded-full border border-green-500 w-full p-4 py-0.5' type="text" name="username" id="username" />

            <div className='relative'>
              <input value={form.password} onChange={handleChange} placeholder='Enter password' className=' bg-white rounded-full border border-green-500 w-full p-4 py-0.5' type="password" name="password" id="password" />
              <span className='absolute right-0 top-2 cursor-pointer' onClick={showPassword}>
                <img ref={ref} src="/icons/eye.png" alt="show" className='px-2' width={30} />
              </span>
            </div>

          </div>
          <button onClick={savePassword} className=' cursor-pointer flex justify-center gap-3 items-center text-sm bg-green-500 hover:bg-green-400 rounded-full px-3 py-0.5 w-fit  border border-green-900'>
            <lord-icon src="https://cdn.lordicon.com/jgnvfzqg.json" trigger="hover"></lord-icon>
            Add Password </button>
        </div>
        <div className="passwords">
          <h2 className='font-bold text-xl py-3'>Your Passwords</h2>
          {passwordArray.length===0 && <div>No passwords to show</div>}
          {passwordArray.length!=0 &&
          <table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-green-800 text-white '>
              <tr>
                <th className='p-2'>Site</th>
                <th className='p-2'>Username</th>
                <th className='p-2'>Passwords</th>
              </tr>
            </thead>
            <tbody className='bg-green-100'>

              {passwordArray.map((item,index) => {
                return <tr key={index}>
                <td className='p-1 border border-white text-center w-10'><a href={item.site} target='_blank'>{item.site}</a></td>
                <td className='p-1 border border-white text-center w-10'>{item.username}</td>
                <td className='p-1 border border-white text-center w-10'>{item.password}</td>
              </tr>
              })}
            </tbody>
          </table>}
        </div>

</div>
    </>
  )
}

export default Manager
