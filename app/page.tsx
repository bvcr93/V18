"use client";

import React, { useState } from "react";

const HomePage = () => {
    const [activeTag, setActiveTag] = useState(null);

    const handleClick = (tag: any) => {
        setActiveTag(tag);
        const element = document.querySelector(".bg-cover");
        if (element) {
            if (tag === 1) {
                (element as HTMLElement).style.backgroundImage =
                    'url("https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/03/03122909/best-waterproof-tents-header-16.jpg")';
            } else if (tag === 2) {
                (element as HTMLElement).style.backgroundImage =
                    'url("https://images.unsplash.com/photo-1673214846075-d6c357890103?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")';
            } else if (tag === 3) {
                (element as HTMLElement).style.backgroundImage =
                    'url("https://images.unsplash.com/photo-1671726805768-575f88de945a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")';
            }
        }
    };

    return (
        <div className="px-4 ">
            <header className='bg-cover text-white h-[700px]  flex justify-center md:justify-start md:px-16 items-center bg-[url("https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2022/03/03122909/best-waterproof-tents-header-16.jpg")]'>
                <div className="p-4 h-[500px] w-[400px] bg-white">
                    <div className="flex space-x-5">
                        <p
                            onClick={() => handleClick(1)}
                            className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 1 ? " bg-black" : "bg-slate-300"
                                }`}
                        ></p>
                        <p
                            onClick={() => handleClick(2)}
                            className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 2 ? " bg-black" : "bg-slate-300"
                                }`}
                        ></p>
                        <p
                            onClick={() => handleClick(3)}
                            className={`w-[50px] h-[5px] cursor-pointer ${activeTag === 3 ? " bg-black" : "bg-slate-300"
                                }`}
                        ></p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default HomePage;
