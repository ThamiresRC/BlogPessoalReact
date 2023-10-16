import { useNavigate, Link } from 'react-router-dom'
import React from 'react'



const Home = () => {
    let navigate = useNavigate()
    return (

        <div>
            <h2 className="text-slate-900 text-5x1  m-4">Home</h2>
            <div>

                <button type='submit'
                className='houver:underline mx-4'
                onClick={() => { navigate('/login') }}>
                    Login useNavigate
                </button>
                <Link to='/login' className='houver:underline mx-4'>Login por Link</Link>
            </div>
        </div>
    )
}


export default Home