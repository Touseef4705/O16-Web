export default function Footer() {
    return (
        <footer className="text-blue-500 body-font bg-black">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <img src="/logo.svg.png" />
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">First Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Second Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Third Link</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-gray-300 cursor-pointer">Fourth Link</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-sm mb-3">
                            Subscribe to Newsletter
                        </h2>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="relative w-full sm:w-auto">
                                <input
                                    type="text"
                                    id="footer-field"
                                    placeholder="Enter your email"
                                    name="footer-field"
                                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 text-base outline-none text-black py-2 px-3 leading-8 transition-colors"
                                />
                            </div>
                            <button className="flex items-center justify-center text-white  border-0 py-2 px-4 h-12 ">
                                <img src="https://img.icons8.com/?size=80&id=7xE9VDBMDtZ0&format=png" className="h-12 bg-white rounded-md border border-white object-cover"  />
                            </button>
                        </div>

                        <div>
                            <h1 className="text-white text-2xl">Our Social</h1>
                            <div>
                               <img src="/socialIcon.png"/>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </footer>

    )
}