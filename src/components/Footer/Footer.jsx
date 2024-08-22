import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <section id='page6' className='h-[45vh] pt-[50px]'>

                <div className=' h-[100%] w-[98vw] relative top-0 left-0 mt-[50px] mx-[1vw]'>
                    <div className="relative top-0 left-0 z-10 mx-auto w-[98vw] h-[100%] px-4 bg-slate-300 rounded-tr-2xl rounded-tl-2xl">
                        <div className="-m-6 flex flex-wrap">
                            <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                                <div className="flex h-full flex-col justify-between ">
                                    <div className="mb-4 inline-flex justify-center items-center m-[10px]">
                                        <span className="ml-4 text-lg font-bold text-black">@NexGenGlam</span>
                                    </div>
                                    <div>
                                        <p className="mb-4 text-base font-bolder text-black text-center">When Art Meets Fashion</p>
                                        <p className="text-sm  text-black text-center">
                                            &copy; Copyright 2024. All Rights Reserved by NexGenGlam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                                <div className="h-full">
                                    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-black">
                                        Company
                                    </h3>
                                    <ul>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Features
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Affiliate Program
                                            </a>
                                        </li>
                                        <li>
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Press Kit
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                                <div className="h-full">
                                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase  text-black">
                                        Support
                                    </h3>
                                    <ul>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Account
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Help
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Customer Support
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                                <div className="h-full">
                                    <h3 className="tracking-px mb-9  text-xs font-semibold uppercase  text-black">
                                        Legals
                                    </h3>
                                    <ul>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li className="mb-4">
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a className=" text-base font-medium hover:text-gray-400 text-black" href="#">
                                                Licensing
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Footer
