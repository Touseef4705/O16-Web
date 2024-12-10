import React from 'react';

const ImagePage = () => {
    return (
        <div className='container mx-auto bg-gray-100 w-full'>

            <h1 className='text-2xl pl-20 pt-10 font-bold'>
                - Browse by <span className='text-blue-500'>Categories</span>
            </h1>
            <div className=" mx-auto p-6 md:p-12 flex flex-wrap justify-around items-center space-y-8 ">
                {/* First Section: One large image on the left */}
                <div className="">
                    <img
                        src="/expice.png"
                        alt="First Image"
                        className="w-full h-[26rem] object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Second Section: Four images in two rows on the right */}
                <div className="">
                    <div className=" flex justify-center gap-3">
                        <div>
                            <img
                                src="images2.png"
                                alt="Second Image"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div>
                            <img
                                src="/dessert.png"
                                alt="Third Image"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>


                    <div className="flex justify-center gap-3 mt-3">
                        <div>
                            <img
                                src="/event.png"
                                alt="Fourth Image"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div>
                            <img
                                src="/birthday.png"
                                alt="Fifth Image"
                                className="w-full h-48 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImagePage;
