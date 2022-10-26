import React from 'react'

const Developers = () => {
  return (
    <div className='container mx-auto p-5'>
        <h1>Developers</h1>
        <div className='p-5 m-5 grid grid-cols-6'>            
                {/* Add your profile here. You can upload your image to the repo under "images"  directory
                    and link it here.                
                */}


                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://avatars.githubusercontent.com/u/69896582?s=400&u=9e9492c195c37e3cb3bca6d08da58ed75760c18d&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>Aran Glore C. Peliña </h3>
                    <p className='font-thin italic'>Junior Developer</p>
                </div>           
                {/* grid item */}               
               

        </div>
    </div>
  )
}

export default Developers