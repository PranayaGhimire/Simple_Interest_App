import React, { useState } from 'react'

const App = () => {
  const [principal,setPrincipal]=useState('');
  const [time,setTime]=useState('');
  const [rate,setRate]=useState('');
  const [simpleInterest,setSimpleInterest]=useState('');
  const [error,setError]=useState('');
  const calculateSimpleInterest=(e)=>{
      e.preventDefault();
      if(principal>=0 && time>=0 && rate>=0)
            return setSimpleInterest(((principal*time*rate)/100));
      else 
          return setError('Cannot calculate Simple Interest..Try again!!')
  };
  return (
    <div className='flex min-h-screen items-center justify-center bg-zinc-700 bg-gradient-to-bl from-zinc-600 to-zinc-900 text-white'>
      <div className='w-80'>
        <h1 className='mb-5 text-xl font-bold text-green-500 text-center'>Simple Interest App</h1>
        <form action="" className='flex flex-col space-y-5'>
          <input
          onChange={(e)=>setPrincipal(e.target.value)}
          value={principal}
          type="number" placeholder='Principal' className='bg-zinc-500 outline-none p-2 rounded-lg' />
          <input
          onChange={(e)=>setTime(e.target.value)}
          value={time}
          type="number" placeholder='Time' className='bg-zinc-500 outline-none p-2 rounded-lg' />
          <input
          onChange={(e)=>setRate(e.target.value)}
          value={rate}
           type="number" placeholder='Rate' className='bg-zinc-500 outline-none p-2 rounded-lg' />
          <input
          onClick={(e)=>calculateSimpleInterest(e)}
          type="submit" value="Calculate Simple Interest" className='  bg-gradient-to-b from-violet-600 to-blue-600 p-2 rounded-md text-sm cursor-pointer hover:bg-gradient-to-r' />
         
        </form>
        {
          simpleInterest?(
            <h1 className=' mt-3  text-amber-400 text-center'>{`Simple Interest is ${simpleInterest}`}</h1>

          ):null
        }
        {
          error && (
            <h1 className='mt-3 text-red-400'>{error}</h1>
          )
        }
        
      </div>
    </div>
  )
}

export default App
