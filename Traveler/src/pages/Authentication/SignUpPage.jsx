import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
    const [agreedToTerms, setAgreedToTerms] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-lg border border-white/20 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-gray-300">Join us for your next adventure</p>
                </div>

                <form className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="username" className="text-sm font-medium text-gray-200">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Choose a username"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-200">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="flex items-center space-x-2 py-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            className="h-4 w-4 rounded border-gray-300 bg-black/20 text-purple-600 focus:ring-purple-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-300">
                            Agree with our <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Use</a> and <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                        </label>
                    </div>

                    <div className="pt-2">
                        <div className={`transition-all duration-300 ${formData.email && formData.username && formData.password && formData.confirmPassword && agreedToTerms ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                            <Button asChild className="w-full h-12 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-purple-900/20">
                                <Link to="/login">Create Account</Link>
                            </Button>
                        </div>
                    </div>
                </form>

                <div className="mt-6 text-center text-sm text-gray-300">
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage