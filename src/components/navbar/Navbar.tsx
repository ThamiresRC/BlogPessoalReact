import React from 'react'

const Navbar = () => {
  return (

    <>
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className='container flex justify-between text-lg'>
          <div className='text-2x1 front-bold uppercase'>Blog pessoal</div>
          <div className='flex gap-4'>
            <div className='houver:underline'>Postagens</div>
            <div className='houver:underline'>Temas</div>
            <div className='houver:underline'>Cadastrar tema</div>
            <div className='houver:underline'>Perfil</div>
            <div className='houver:underline'>Sair</div>

          </div>

        </div>

      </div>




    </>

  )
}

export default Navbar