import React from 'react'

const Developers = () => {
  return (
    <div className='container mx-auto p-5'>
        <h1>Developers</h1>
        <div className='p-5 m-5 grid grid-cols-6'>            
                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                    <img src="images\jules.jpg" width="90" height="90">
                    <h3 className='font-bold mr-1'>Jonathan Jules L. Serato </h3>
                    <p className='font-thin italic'> Developer</p>
                </div>           
                {/* grid item */}               

                {/* grid item */}
                <div className="flex flex-wrap justify-center">
                    <div className="w-64 sm:w-64 px-4">
                        <img src="https://avatars.githubusercontent.com/u/74034797?s=400&u=8d250db9bceb4f7415526ea5b276c203f10e3fa9&v=4" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
                    </div>
                    <h3 className='font-bold mr-1'>John Paulin, </h3>
                    <p className='font-thin italic'> Lead Developer</p>
                </div>           
                {/* grid item */}               
               

        </div>
    </div>
  )
}

export default Developers