import React from 'react';

import Image from 'next/image';

export default function PageNotFound() {
  return (
    <div className='place-items-center'>
        <h1 className='text-red-custom font-bold text-6xl'> 404</h1>
        <h2 className='text-primary-text font-semibold'>Ops! Conteúdo não localizado!</h2>
        <Image
              src="/erro.jpg"
              alt="Como a IA pode ajudar a solucionar problemas?"
              height={100}
              width={600}
              
            />
    </div>
  )
}
