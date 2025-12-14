import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    return (
        <>
            <div>SignUpPage</div>
            <Button asChild variant="outline" className='bg-white text-black hover:bg-grey hover:text-black'>
                <Link to="/login">Login</Link>
            </Button>
        </>
    )
}

export default SignUpPage