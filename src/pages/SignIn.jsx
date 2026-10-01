import { Link } from "react-router";
import navbarLogo from "../assets/svg/logoIcon.svg";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import AuthHero from "../components/AuthHero";
import socialIcon1 from "../assets/svg/facebook.svg";
import socialIcon2 from "../assets/svg/gmail.svg";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: 'onTouched',
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmittedData(data);
    };
    return (
        <div className="relative w-full min-h-screen bg-[#0338E3] poppins-font select-text overflow-hidden pt-6 pb-20">
            {/* Background blueprint grid */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.09) 1px, transparent 1px)",
                    backgroundSize: "97.6px 97.6px",
                    backgroundPosition: "center top",
                }}
            />

            <div className="w-full max-w-7xl mx-auto px-4 pb-2 sm:pb-0 sm:py-5 text-white">
                {/* Header */}
                <Link to="/" className="">
                    <img src={navbarLogo} alt="ByteSpace Logo" className="h-7 md:h-8.5 w-auto" />
                </Link>

                <div className="flex items-center justify-between gap-5">
                    {/* left side content */}
                    <AuthHero
                        title={'Sign in with ease'}
                        description={'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'} />
                    {/* rigt side form */}
                    <div className="w-full max-w-145 mx-auto bg-white rounded-xl p-4 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 mt-12 md:mt-0">

                        {/* Header Section */}
                        <div className="my-5 md:my-8">
                            <p className="text-[#003BE2] font-thin text-base mb-1 tracking-tight">
                                Sign In
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.15] max-w-177.5 mx-auto">
                                Welcome Back
                            </h1>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                            {/* Email Field */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="email"
                                    className="block text-base text-[#242528]"
                                >
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="designer@example.com"
                                        className={`w-full px-4 py-3 md:py-3.5 text-gray-900 bg-white placeholder-gray-400 border text-base rounded-xl outline-none transition-all duration-200 ${errors.email
                                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                            : 'border-[#e5e5ea] focus:border-[#3b7bf6] focus:ring-2 focus:ring-blue-100'
                                            }`}
                                        {...register('email', {
                                            required: 'Email address is required',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid email address'
                                            }
                                        })}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-xs text-red-500 flex items-center gap-1 pt-0.5">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="password"
                                    className="block text-base text-[#242528]"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="********"
                                        className={`w-full px-4 py-3 md:py-3.5 pr-11 text-gray-900 bg-white placeholder-gray-400 border text-base rounded-xl outline-none transition-all duration-200 ${errors.password
                                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                            : 'border-[#e5e5ea] focus:border-[#3b7bf6] focus:ring-2 focus:ring-blue-100'
                                            }`}
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters'
                                            }
                                        })}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-4 h-4" />
                                        ) : (
                                            <Eye className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-xs text-red-500 flex items-center gap-1 pt-0.5">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button aligned to the right */}
                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#d2fb00] hover:bg-[#c5ec00] active:scale-95 text-[#1a1a1a] font-semibold text-base px-8 py-3 rounded-full shadow-sm hover:shadow transition-all duration-150 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        'Sign In'
                                    )}
                                </button>
                            </div>
                        </form>

                        {/* Footer Link Section */}
                        <div className="mt-8 w-full">
                            <div className="flex items-center justify-center gap-3 w-full">
                                <div className="flex-1 h-px bg-[#D9D9D9]" />
                                <span className="text-sm text-[#8a8585]">or</span>
                                <div className="flex-1 h-px bg-[#D9D9D9]" />
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <Link to="#" className="h-14 w-14 p-2 border border-[#D9D9D9] rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                    <img src={socialIcon1} alt="Facebook Icon" className="w-7 h-7" />
                                </Link>
                                <Link to="#" className="h-14 w-14 p-2 border border-[#D9D9D9] rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                    <img src={socialIcon2} alt="Google Icon" className="w-7 h-7" />
                                </Link>
                            </div>
                            <p className="text-sm text-center mt-12">
                                <Link to="/signup" className="text-[#8a8585] font-normal">
                                    New user? <span className="text-[#3b7bf6]">Create an account</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;