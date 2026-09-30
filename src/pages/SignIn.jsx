


const SignIn = () => {
    
    return (
        <div className="relative w-full min-h-screen bg-[#0338E3] poppins-font flex flex-col justify-between items-center select-text overflow-hidden pt-6 pb-0">
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
        </div>
    );
};

export default SignIn;