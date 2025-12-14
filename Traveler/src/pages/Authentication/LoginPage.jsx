import React from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 backdrop-blur-lg border border-white/20 shadow-xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300">Please sign in to your account</p>
                </div>

                <form className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-200">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-200">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full rounded-lg bg-black/20 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 bg-black/20 text-purple-600 focus:ring-purple-500" />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-purple-900/20">
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-300">
                    Don't have an account?{' '}
                    <Link to="/signup" className="font-medium text-purple-400 hover:text-purple-300 transition-colors">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage