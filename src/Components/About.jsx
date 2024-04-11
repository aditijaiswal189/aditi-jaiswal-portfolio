

function About() {
  return <section className="bg-hero-pattern " id="about" >
  
   <div className="flex flex-col justify-center relative">
    <div className="bg-gray-50 p-2 absolute  left-3 top-7 xs:top-11 xs:left-1 lg:p-4 lg:left-6 lg:top-9 2xl:p-6 2xl:left-8 2xl:top-11">
      <a href="https://www.linkedin.com/in/aditij189/" className="block p-2 md:text-xl md:p-3 cursor-pointer lg:text-2xl lg:p-5 2xl:text-4xl ">
        <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      <a href="https://github.com/aditijaiswal189" className="block p-2 cursor-pointer md:text-xl md:p-3 lg:text-2xl lg:p-5 2xl:text-4xl ">
        <ion-icon name="logo-github" ></ion-icon>
        </a>
      <a href="https://twitter.com/jaiswal_adt" className="block p-2 md:p-3 cursor-pointer md:text-xl lg:text-2xl lg:p-5 2xl:text-4xl ">
        <ion-icon name="logo-twitter"></ion-icon>
        </a>
    </div>
    <h1 className="text-4xl  font-extrabold p-5 md:p-6 my-4 text-center max-w-[80%] sm:max-w-[60%] mx-auto leading-relaxed md:text-5xl md:leading-loose lg:max-w-[40%] 2xl:max-w-[30%]">HEY, I AM ADITI JAISWAL </h1>
   
    <p className="text-center  text-2xl  font-semibold p-5 xs:p-2 max-w-[80%] mx-auto lg:max-w-[60%] ">A focused Frontend Web Developer building the Frontend of Web Applications and Websites. </p>
    <div className=" text-center">

    <button className="bg-violet-500 text-violet-50 tracking-wider font-bold text-xl p-3 mt-8 mb-[100px] rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-violet-700 transition ease-in duration-300 lg:font-extrabold lg:text-2xl lg:p-5 lg:mt-10 lg:mb-[120px]" ><a href="#projects">PROJECTS</a></button>
   
    </div>

   </div>
  </section>;
}

export default About;
