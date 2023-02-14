const Hero = () => {
    return (
    <div className="md:col-span-2 md:ml-6 mx-6 md:pr-6"> 
        <div className="h-80 w-full" id="hero"></div>


        <div className="grid md:grid-cols-2 mt-6">
            <div className="md:col-span-1">
                <h1 className="font-bold text-start md:text-6xl text-5xl slogan font-[Inter] ">
                The Bright Future of web 3.0?
                </h1>
            </div>

            <div className="md:col-span-1 text-start mt-5 md:mt-0 px-2 md:px-0">
                <p className="text-gray-500 ">
                We dive into the next evolution of the web that claims to put the power of the platform back to the hands of the people. But is it really fulfilling its promise?
                </p>

                <button className="bg-red-500 px-12 py-2 uppercase md:px-12 mt-6 md:py-4 font-bold rounded-sm hover:bg-gray-900 text-white">
                Read More
                </button>
            </div>
        </div>
    </div>
    )
}

export default Hero