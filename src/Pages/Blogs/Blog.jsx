import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="">
        <section className=" ">
          <div className="container my-12  flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl py-4 mb-20 text-center font-semibold sm:text-4xl">
              Important Interview Questions-Blog 
            </h2>
            <div className="space-y-4 w-3/4 mx-auto">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  Difference between SQL and NoSQL ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  We know NodeJS application is single-threaded. Say, if
                  processing involves request A that takes 10 seconds, it does
                  not mean that a request which comes after this request needs
                  to wait 10 seconds to start processing because NodeJS event
                  loops are only single-threaded. The entire NodeJS architecture
                  is not single-threaded. How NodeJS handle multiple client
                  requests? NodeJS receives multiple client requests and places
                  them into EventQueue. NodeJS is built with the concept of
                  event-driven architecture. NodeJS has its own EventLoop which
                  is an infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue. If NodeJS can
                  process the request without I/O blocking then the event loop
                  would itself process the request and sends the response back
                  to the client by itself. But, it is possible to process
                  multiple requests parallelly using the NodeJS cluster module
                  or worker_threads module.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is JWT, and how does it work ?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  A JSON web token(JWT) is JSON Object which is used to securely
                  transfer information over the web(between two parties). It can
                  be used for an authentication system and can also be used for
                  information exchange.The token is mainly composed of header,
                  payload, signature. These three parts are separated by
                  dots(.). JWT defines the structure of information we are
                  sending from one party to the another, and it comes in two
                  forms – Serialized, Deserialized. The Serialized approach is
                  mainly used to transfer the data through the network with each
                  request and response. While the deserialized approach is used
                  to read and write data to the web token. <br />A header in a
                  JWT is mostly used to describe the cryptographic operations
                  applied to the JWT like signing/decryption technique used on
                  it. It can also contain the data about the media/content type
                  of the information we are sending.This information is present
                  as a JSON object then this JSON object is encoded to
                  BASE64URL. The cryptographic operations in the header define
                  whether the JWT is signed/unsigned or encrypted and are so
                  then what algorithm techniques to use.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is the difference between javascript and NodeJS?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  1. JavaScript is a client-side scripting language that is
                  lightweight, cross-platform, and interpreted. Both Java and
                  HTML include it. Node.js, on the other hand, is a V8-based
                  server-side programming language. As a result, it is used to
                  create network-centric applications. It's a networked system
                  made for data-intensive real-time applications. If we compare
                  node js vs. python, it is clear that node js will always be
                  the preferred option. <br /> <br />
                  2. JavaScript is a simple programming language that can be
                  used with any browser that has the JavaScript Engine
                  installed. Node.js, on the other hand, is an interpreter or
                  execution environment for the JavaScript programming language.
                  It requires libraries that can be conveniently accessed from
                  JavaScript programming to be more helpful. <br /> <br />
                  3. Any engine may run JavaScript. As a result, writing
                  JavaScript is incredibly easy, and any working environment is
                  similar to a complete browser. Node.js, on the other hand,
                  only enables the V8 engine. Written JavaScript code, on the
                  other hand, can run in any context, regardless of whether the
                  V8 engine is supported. <br /> <br />
                  4. A specific non-blocking operation is required to access any
                  operating system. There are a few essential objects in
                  JavaScript, but they are entirely OS-specific. Node.js, on the
                  other hand, can now operate non-blocking software tasks out of
                  any JavaScript programming. It contains no OS-specific
                  constants. Node.js establishes a strong relationship with the
                  system files, allowing companies to read and write to the hard
                  drive. <br /> <br />
                  5. The critical benefits of JavaScript include a wide choice
                  of interfaces and interactions and just the proper amount of
                  server contact and direct visitor input. Node.js, on the other
                  hand, offers node package management with over 500 modules and
                  the capacity to handle many requests at the same time. It also
                  offers the unique ability to enable microservice architecture
                  and the Internet of Things. Even when comparing node js vs.
                  react js, node js always wins.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does NodeJS handle multiple requests at the same time?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  We know NodeJS application is single-threaded. Say, if
                  processing involves request A that takes 10 seconds, it does
                  not mean that a request which comes after this request needs
                  to wait 10 seconds to start processing because NodeJS event
                  loops are only single-threaded. The entire NodeJS architecture
                  is not single-threaded. How NodeJS handle multiple client
                  requests? NodeJS receives multiple client requests and places
                  them into EventQueue. NodeJS is built with the concept of
                  event-driven architecture. NodeJS has its own EventLoop which
                  is an infinite loop that receives requests and processes them.
                  EventLoop is the listener for the EventQueue. If NodeJS can
                  process the request without I/O blocking then the event loop
                  would itself process the request and sends the response back
                  to the client by itself. But, it is possible to process
                  multiple requests parallelly using the NodeJS cluster module
                  or worker_threads module.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default Blog;
