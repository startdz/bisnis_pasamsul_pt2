import React from 'react'
import y3 from '/y3.jpg'

const Tailw = () => {
    return (
        <React.Fragment>
            <div className='container mx-auto p-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
                <div className="aspect-[5/3] bg-rose-200 shadow-lg rounded-lg mb-6">
                    <div className='flex flex-col justify-between items-center'>
                        <img src={y3} alt="" className='w-1/2 rounded-t-lg' />
                        <h4 className='text-4xl font-bold ml-4'>BH MANTAP</h4>
                        <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit excepturi possimus officiis laboriosam, rerum dolorum nulla quam quis vero eum, error nisi delectus minus?</p>
                    </div>
                </div>
                <div className="aspect-[5/3] bg-rose-200 shadow-lg rounded-lg mb-6">
                    <div className='flex flex-col justify-between items-center'>
                        <img src={y3} alt="" className='w-1/2 rounded-t-lg' />
                        <h4 className='text-4xl font-bold ml-4'>BH MANTAP</h4>
                        <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit excepturi possimus officiis laboriosam, rerum dolorum nulla quam quis vero eum, error nisi delectus minus?</p>
                    </div>
                </div>
                <div className="aspect-[5/3] bg-rose-200 shadow-lg rounded-lg mb-6">
                    <div className='flex flex-col justify-between items-center'>
                        <img src={y3} alt="" className='w-1/2 rounded-t-lg' />
                        <h4 className='text-4xl font-bold ml-4'>BH MANTAP</h4>
                        <p className='ml-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit excepturi possimus officiis laboriosam, rerum dolorum nulla quam quis vero eum, error nisi delectus minus?</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Tailw