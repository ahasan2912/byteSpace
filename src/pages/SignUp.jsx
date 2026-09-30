import { Link } from "react-router";
import navbarLogo from "../assets/svg/logoIcon.svg";
import signInBgImag1 from "../assets/login_1.png";
import signInBgImage2 from "../assets/login_2.png";
import signInBgImag3 from "../assets/login_3.png";
import signInBgImag4 from "../assets/login_4.png";
import signInBgImag5 from "../assets/login_5.png";
import avatarsRow from "../assets/avatarsRow2.png";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);

    // Initialize React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm({
        mode: 'onTouched',
        defaultValues: {
            fullName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data) => {
        // Simulate API network request delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmittedData(data);
    };

    const handleReset = () => {
        setSubmittedData(null);
        reset();
    };
    return (
        <div className="relative w-full min-h-screen bg-[#0338E3] poppins-font select-text overflow-hidden pt-6 pb-20 pb-0">
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
                    <div className="hidden md:block mt-10 max-w-118.75">
                        <h1 className="text-xl font-semibold text-[#F5F5F6]">Sign up and come in</h1>
                        <p className="text-[#F5F5F6] font-thin text-sm sm:text-base mt-4">The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost</p>

                        <div className="mt-32 relative flex shrink-0 origin-top-left scale-[0.577] min-[420px]:scale-[0.673] sm:scale-[0.846] md:scale-100 lg:h-auto lg:w-full lg:origin-top">
                            <div
                                className="w-95 h-97.5 overflow-hidden"
                                style={{
                                    backgroundImage: `url(${signInBgImage2})`,
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <div className="absolute left-[25%] top-[-25%]">
                                <img src={signInBgImag1} alt="Sign In Background" className="w-full h-full object-cover" />
                            </div>

                            <div className="hidden lg:block absolute left-[8%] top-[-18%]">
                                <img src={signInBgImag3} alt="Sign In Background" className="w-full h-full object-cover" />
                            </div>

                            <div className="hidden lg:block absolute left-[-5%] bottom-[-28%]">
                                <img src={signInBgImag4} alt="Sign In Background" className="w-full h-full object-cover" />
                            </div>

                            <div className="hidden lg:block absolute right-[-10%] bottom-[0%] z-50">
                                <img src={signInBgImag5} alt="Sign In Background" className="w-full h-full object-cover" />
                            </div>

                            {/* Badge 3: Happy Students */}
                            <div className="absolute right-[0%] bottom-[-10%] h-auto rounded-xl bg-[#D4FB20] p-2.5 sm:p-3.5 md:p-3.5 shadow-[0_10px_25px_rgba(0,0,0,0.10)] transition-transform hover:-translate-y-0.5 w-50 z-20">
                                <p className="text-[11px] sm:text-[13px] font-semibold leading-tight text-[#111]">
                                    Happy Students
                                </p>
                                <div className="mt-0.5 flex items-center gap-1">
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-[#444]">4.5</span>
                                    <span className="text-[9px] sm:text-[10px] font-normal text-[#8A8A8A]">(240)</span>
                                    <svg
                                        width="12"
                                        height="12"
                                        viewBox="0 0 24 24"
                                        fill="#D4FB20"
                                        className="ml-0.5 inline-block"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div className="mt-1.5">
                                    <img
                                        src={avatarsRow}
                                        alt="Student Avatars"
                                        className="h-5 sm:h-7 md:h-8 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* rigt side form */}
                    <div className="w-full max-w-145 mx-auto bg-white rounded-xl p-4 sm:p-8 md:p-10 relative overflow-hidden transition-all duration-300 mt-12 md:mt-0">

                        {/* Header Section */}
                        <div className="my-5 md:my-8">
                            <p className="text-[#003BE2] font-thin text-base mb-1 tracking-tight">
                                Create an Account
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-[#242528] tracking-tight leading-[1.15] max-w-177.5 mx-auto">
                                Welcome to<br />ByteSpace
                            </h1>
                        </div>

                        {submittedData ? (
                            <div className="py-8 text-center space-y-4 animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-10 h-10" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Account Created!</h2>
                                <p className="text-gray-600 text-sm">
                                    Welcome aboard, <span className="font-semibold text-gray-900">{submittedData.fullName}</span>. Check your inbox at <span className="font-medium text-gray-800">{submittedData.email}</span>.
                                </p>
                                <button
                                    onClick={handleReset}
                                    className="mt-4 px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-full text-sm transition-colors"
                                >
                                    Back to Sign Up
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

                                {/* Full Name Field */}
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="fullName"
                                        className="block text-base text-[#242528]"
                                    >
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="fullName"
                                            type="text"
                                            placeholder="Jamie Davis"
                                            className={`w-full px-4 py-3.5 text-gray-900 bg-white placeholder-gray-400 border text-base rounded-xl outline-none transition-all duration-200 ${errors.fullName
                                                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                                                : 'border-[#e5e5ea] focus:border-[#3b7bf6] focus:ring-2 focus:ring-blue-100'
                                                }`}
                                            {...register('fullName', {
                                                required: 'Full name is required',
                                                minLength: {
                                                    value: 2,
                                                    message: 'Name must be at least 2 characters'
                                                }
                                            })}
                                        />
                                    </div>
                                    {errors.fullName && (
                                        <p className="text-xs text-red-500 flex items-center gap-1 pt-0.5">
                                            <AlertCircle className="w-3.5 h-3.5" />
                                            {errors.fullName.message}
                                        </p>
                                    )}
                                </div>

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
                                            className={`w-full px-4 py-3.5 text-gray-900 bg-white placeholder-gray-400 border text-base rounded-xl outline-none transition-all duration-200 ${errors.email
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
                                            className={`w-full px-4 py-3.5 pr-11 text-gray-900 bg-white placeholder-gray-400 border text-base rounded-xl outline-none transition-all duration-200 ${errors.password
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
                                { }
                                <div className="pt-2 flex justify-end">
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
                                            'Continue'
                                        )}
                                    </button>
                                </div>
                            </form>
                        )}

                        {/* Footer Link Section */}
                        { }
                        <div className="mt-12 text-center">
                            <p className="text-gray-500 text-sm font-normal">
                                Already have an account?{' '}
                                <Link
                                    to="/signin"
                                    className="text-[#3b7bf6] font-medium ml-0.5"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;