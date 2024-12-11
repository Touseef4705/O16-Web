export default function Footer() {
    return (
        <footer className="text-blue-500 body-font bg-black">
            <div className="container px-5 py-24 pb-10 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="/logo.svg.png" className="w-32" />
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                            Address
                        </h2>
                        <nav className="list-none mb-10">
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">Park Avenue South, New York, <br /> 74812, United States</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">contact@016labs.com</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">000-123-456</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">FAQ’s</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-normal text-blue-500 tracking-widest text-sm mb-3">
                            Links
                        </h2>
                        <nav className="list-none mb-10">
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">Home</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">How it works</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">Our Chefs</a>
                            </li>
                            <li className="py-1">
                                <a className="text-white hover:text-gray-300 cursor-pointer">What’s new</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
                            Subscribe to Newsletter
                        </h2>
                        <div className="flex items-center justify-start space-x-4">
                            <div className="relative w-full sm:w-auto">
                                <input
                                    type="text"
                                    id="footer-field"
                                    placeholder="Enter your email"
                                    name="footer-field"
                                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 text-base outline-none text-black py-2 px-3 leading-8 transition-colors"
                                />
                            </div>
                            <button className="flex items-center justify-center text-white  border-0 py-2 px-4 h-12 pl-0">
                                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="h-12 bg-white rounded-md border border-white object-cover" />
                            </button>
                        </div>


                    </div>

                    <div className="flex items-center justify-center gap-4 w-full">
                        <hr className="flex-1 border-white" />
                        <p className="text-white     whitespace-nowrap">
                            Copyrights 2022 O16 Labs - All Rights Reserved
                        </p>
                        <hr className="flex-1 border-white" />
                    </div>

                </div>
            </div>

        </footer>

    )
}