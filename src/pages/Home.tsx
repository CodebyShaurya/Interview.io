import Nav from "../Components/Navbar";
import HomeImg from "../assets/OIG4-removebg.png";
import chair from "../assets/OIG4-removebg (1).png";
import Khagesh from "../assets/Khagesh.jpeg";
import logo from "../assets/Gemini_Generated_Image_urg4luurg4luurg4-removebg-preview.png";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#2f1d64] via-[#1b2a5c] to-[#2f1d64] ...">
      <Nav />
      <div className="flex gap-10 p-24 items-center justify-around">
        <div className="w-1/2">
          <div className="text-6xl font-semibold my-10 text-white font-spacegroteskbold">
            Take Your{" "}
            <span className="text-sky-300 font-spacegroteskbold">Learning</span>{" "}
            To The Next Level.
          </div>
          <div className="text-slate-300 my-10 mr-10 font-spacegroteskregular text-2xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </div>
          <button className="ring-offset-background font-spacegroteskmedium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-xl font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Try Pro
          </button>
        </div>
        <div className="flex justify-center">
          <img src={HomeImg} className="h-[500px]" />
        </div>
      </div>

      <div className="mx-24">
        {/* <div className="mx-5 text-transparent font-spacegroteskmedium bg-gradient-to-l from-blue-300 to-purple-600 bg-clip-text w-24 font-bold text-2xl">
          Benefits
        </div> */}
        <div className="text-4xl font-spacegroteskmedium m-5 text-white">
          Great Deals for you
        </div>
        <div className="text-slate-300 m-5 font-spacegroteskregular">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </div>

        <div className="flex justify-center m-24">
          <div className="cube">
            <div className="box box1 bg-white bg-opacity-80 flex items-center justify-center">
              <img
                src="https://learnersgalaxy.ai/wp-content/uploads/2024/01/Python-Symbol.png"
                alt="Python"
              />
            </div>
            <div className="box box2 bg-slate-600 bg-opacity-45 flex items-center justify-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1000/1*Yafu7ihc1LFuP4azerAa4w.png"
                alt="React"
              />
            </div>
            <div className="box box3 bg-white bg-opacity-80 flex items-center justify-center">
              <img
                src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                alt="SQL"
              />
            </div>
            <div className="box box4 bg-slate-600 bg-opacity-45 flex items-center justify-center">
              <img
                src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/63018720eab248248ff88ee3_1bd86e15.png"
                alt="Flutter"
                className="w-40 h-40"
              />
            </div>
            <div className="box box5 bg-white bg-opacity-45 flex items-center justify-center">
              <img
                src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png"
                alt="GoLang"
              />
            </div>
            <div className="box box6 bg-white bg-opacity-45 flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
                alt="Java Script"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="m-24">
        <div className="text-4xl text-white font-spacegroteskmedium">
          Features
        </div>
        <div className="my-20 mx-10 flex justify-between">
          <div className="relative flex w-80 flex-col rounded-xl bg-violet-900 bg-clip-border text-white shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-violet-400 to-violet-600"></div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-spacegrotesksemibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Feature 1
              </h5>
              <p className="block font-spacegrotesklight text-base leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none font-spacegroteskmedium rounded-lg bg-gradient-to-r from-violet-400 to-violet-600 py-3 px-6 text-center align-middle text-xs uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="relative flex w-80 flex-col rounded-xl bg-violet-900 bg-clip-border text-white shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-violet-400 to-violet-600"></div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-spacegrotesksemibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Feature 2
              </h5>
              <p className="block text-base font-spacegrotesklight leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-gradient-to-r from-violet-400 to-violet-600 py-3 px-6 text-center align-middle font-spacegroteskmedium text-xs uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>

          <div className="relative flex w-80 flex-col rounded-xl bg-violet-900 bg-clip-border text-white shadow-md">
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-violet-400 to-violet-600"></div>
            <div className="p-6">
              <h5 className="mb-2 block text-xl font-spacegrotesksemibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Feature 3
              </h5>
              <p className="block font-spacegrotesklight text-base leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                data-ripple-light="true"
                type="button"
                className="select-none rounded-lg bg-gradient-to-r from-violet-400 to-violet-600 py-3 px-6 text-center align-middle text-xs font-spacegroteskmedium uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-20 grid grid-cols-2 ">
        <div className="flex justify-center">
          <img src={chair} className="h-96" />
        </div>
        <div>
          <div className="text-4xl font-medium text-white font-spacegroteskmedium">
            Why students Choose us
          </div>

          <div className="text-slate-300 mr-5 my-6 font-spacegroteskregular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi rem
            quaerat eius maxime quasi expedita fuga minus corporis, temporibus
            deserunt beatae aperiam vero ad laudantium repudiandae officia ipsam
            vel excepturi.
          </div>

          <button className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-full text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Try Pro
          </button>
        </div>
      </div>

      <div className="m-20">
        <div className="m-10 text-white text-4xl text-center font-spacegroteskmedium">
          Meet The Team
        </div>

        <div className="flex gap-8 items-center justify-center">
          <div className=" flex justify-center">
            <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-violet-900 via-indigo-700 to-cyan-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <img
                className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-[slate-50] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
                src="https://assets.leetcode.com/users/avatars/avatar_1662445212.png"
              />
              <div className="z-10 group-hover:text-white group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-2xl font-spacegroteskmedium">
                  Shaurya Gupta{" "}
                </span>
                <p className="font-spacegroteskregular">Frontend Specialist</p>
              </div>
              <a
                className="bg-blue-700 px-4 py-1 group-hover:bg-white group-hover:text-black font-spacegroteskregular text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Follow
              </a>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-violet-900 via-indigo-700 to-cyan-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
              <img
                className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-[slate-50] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
                src={Khagesh}
              />
              <div className="z-10 group-hover:text-white group-hover:-translate-y-10 transition-all duration-500">
                <span className="text-2xl font-spacegroteskmedium">
                  Khagesh Sharma{" "}
                </span>
                <p className="font-spacegroteskregular">Backend Specialist</p>
              </div>
              <a
                className="bg-blue-700 px-4 py-1 group-hover:bg-white group-hover:text-black font-spacegroteskregular text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="testimonies" className="py-20 ">
        <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="inline-block px-3 py-1 text-sm font-spacegrotesksemibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-spacegrotesksemibold text-white md:text-center md:text-5xl">
                It's not just us.
              </h1>
              <p className="text-xl font-spacegroteskregular text-gray-100 md:text-center md:text-2xl">
                Here's what others have to say about us.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 font-spacegroteskmedium">
            <ul className="space-y-8">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/kanyewest"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Kanye West"
                        />
                        <div>
                          <h3 className="text-lg text-white">Kanye West</h3>
                          <p className="text-gray-500 text-md">
                            Rapper &amp; Entrepreneur
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Find God.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <ul className="hidden space-y-8 sm:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/paraga"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Parag Agrawal"
                        />
                        <div>
                          <h3 className="text-lg text-white">Parag Agrawal</h3>
                          <p className="text-gray-500 text-md">
                            CEO of Twitter
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Enim neque volutpat ac tincidunt vitae semper. Mattis
                        aliquam faucibus purus in massa tempor. Neque vitae
                        tempus quam pellentesque nec. Turpis cursus in hac
                        habitasse platea dictumst.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/tim_cook"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Tim Cook"
                        />
                        <div>
                          <h3 className="text-lg text-white">Tim Cook</h3>
                          <p className="text-gray-500 text-md">CEO of Apple</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Diam quis enim lobortis scelerisque fermentum dui
                        faucibus in ornare. Donec pretium vulputate sapien nec
                        sagittis aliquam malesuada bibendum.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <ul className="hidden space-y-8 lg:block">
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/satyanadella"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Satya Nadella"
                        />
                        <div>
                          <h3 className="text-lg text-white">Satya Nadella</h3>
                          <p className="text-gray-500 text-md">
                            CEO of Microsoft
                          </p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Tortor dignissim convallis aenean et tortor at. At
                        ultrices mi tempus imperdiet nulla malesuada. Id cursus
                        metus aliquam eleifend mi. Quis ipsum suspendisse
                        ultrices gravida dictum fusce ut.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              <li className="text-sm leading-6">
                <div className="relative group">
                  <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    href="https://twitter.com/dan_schulman"
                    className="cursor-pointer"
                  >
                    <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
                      <div className="flex items-center space-x-4">
                        <img
                          src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                          className="w-12 h-12 bg-center bg-cover border rounded-full"
                          alt="Dan Schulman"
                        />
                        <div>
                          <h3 className="text-lg text-white">Dan Schulman</h3>
                          <p className="text-gray-500 text-md">CEO of PayPal</p>
                        </div>
                      </div>
                      <p className="leading-normal text-gray-300 text-md">
                        Quam pellentesque nec nam aliquam sem et tortor
                        consequat id. Enim sit amet venenatis urna cursus.
                      </p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t-2 border-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-slate-300 flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  className="h-24 text-white"
                  src={logo}
                  alt="Interview.IO"
                />
                <span className="self-center font-spacegroteskbold text-2xl font-semibold whitespace-nowrap text-transparent bg-gradient-to-l from-blue-300 to-purple-600 bg-clip-text text-white">
                  Interview.io
                </span>
              </div>
              <p className="mt-4 max-w-xs text-gray-300">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                non cupiditate quae nam molestias.
              </p>
              <ul className="mt-8 flex gap-6 text-white">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className=" transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-white">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      1on1 Coaching{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Company Review{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      HR Consulting{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      SEO Optimisation{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Meet the Team{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Helpful Links</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      FAQs{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Live Chat{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white">Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Accessibility{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Returns Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Refund Policy{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 transition hover:opacity-75"
                    >
                      {" "}
                      Hiring Statistics{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            © 2024. Interview.IO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
