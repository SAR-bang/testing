import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Adarsha .
                        <br className="hidden lg:inline-block" />Get Rusty  and build solutions
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Not Better than
                        <a href="https://www.sarojpaudyal.com.np" target="_blank" rel="noopener noreferrer"> Saroj</a>

                    </p>
                    <div className="flex justify-center">
                        <h3
                            className="inline-flex text-white bg-green-500 border-4 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Contact  at adarsharegmi121@gmail.com
                        </h3>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./asd.jpeg"
                    />
                </div>
            </div>
        </section>
    )
}