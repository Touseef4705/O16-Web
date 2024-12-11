export default function Testimnial() {

    let customerFeedback = [
        {
            id: "1",
            profile: "/profle.png",
            name: "Holden Caulfield",
            position: "Senior Product Designer",
            description: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
        },
        {
            id: "2",
            profile: "/profle.png",
            name: "Holden Caulfield",
            position: "Senior Product Designer",
            description: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
        },
        {
            id: "3",
            profile: "/profle.png",
            name: "Holden Caulfield",
            position: "Senior Product Designer",
            description: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
        },
    ]

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-2xl pl-20 pt-10 font-bold text-black">
                    What our <br /><span className="text-blue-500">Customers</span> says
                </h1>
                <div className="flex  gap-3 -m-4">

                    {customerFeedback.map((data) => (
                        <div className="lg:w-2/5 w-2/3 mb-6 lg:mb-0 p-6 shadow-lg rounded-xl" key={data.id} >
                            <div className="h-full rounded-lg  p-6 text-center flex flex-col items-center">
                                {/* Profile Picture and Info */}
                                <div className="flex items-center mb-6 space-x-4">
                                    <img
                                        alt="testimonial"
                                        className="w-24 h-24 object-cover object-center rounded-full"
                                        src={data.profile}
                                    />
                                    <div className="text-left">
                                        <h2 className="text-gray-900 font-semibold text-lg">
                                            {data.name}
                                        </h2>
                                        <p className="text-gray-500 text-sm"> {data.position} </p>
                                    </div>
                                </div>

                                {/* Testimonial Text */}
                                <p className="leading-relaxed text-gray-600 text-sm">
                                    {data.description}
                                </p>

                                {/* Divider */}
                                <div className="w-full flex relative bottom-0 left-64  ">
                                    <p className="text-sm text-right font-bold pt-10">
                                        ⭐ 4.7
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )

}