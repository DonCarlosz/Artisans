import React from 'react'

const Notfound = () => {

  const reload = () =>{
    return window.location.reload()
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center mx-[10vw]'>
      <div>
        <h2>Oops, No Projects Found!</h2>
      </div>
      <div>
        <div  className="text-lg my-4 max-w-2xl">

        
        <p> It seems we couldn't find any prjects matching your search.</p>
        <p> Try adjusting your filters or search items.
        </p>
        </div>
      </div>
      <button onClick={reload} className='bg-primary text-white'>Try Again</button>
    </div>
  )
}

export default Notfound
