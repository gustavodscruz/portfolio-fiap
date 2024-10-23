import React from 'react';

import Image from 'next/image';

export default function PageNotFound() {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-red-custom font-bold text-6xl mb-2'>404</h1> 
      <h2 className='text-primary-text font-semibold mb-7'>Ops! Conteúdo não localizado!</h2> 
      <Image
          src="/morreu.gif"
          alt="Como a IA pode ajudar a solucionar problemas?"
          height={100}
          width={600}
          className='object-contain border-4 border-red-custom rounded-md bg-red-100 max-w-1/2 m-auto rounded-lg'
      />
    </div>



  )
}
