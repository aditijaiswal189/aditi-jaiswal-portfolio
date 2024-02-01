

function About() {
  return <div className="bg-hero-pattern " id="about" >
  
   <div className="flex flex-col justify-center relative">
    <div className="bg-gray-50 p-2 absolute  left-3 top-7 ">
      <a href="https://www.linkedin.com/in/aditij189/" className="block p-2 md:text-xl md:p-3 cursor-pointer">
        <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      <a href="https://github.com/aditijaiswal189" className="block p-2 cursor-pointer md:text-xl md:p-3 ">
        <ion-icon name="logo-github" ></ion-icon>
        </a>
      <a href="https://twitter.com/jaiswal_adt" className="block p-2 md:p-3 cursor-pointer md:text-xl">
        <ion-icon name="logo-twitter"></ion-icon>
        </a>
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold p-5 md:p-6 my-4 text-center">HEY, I AM ADITI </h1>
    <h1 className="text-4xl md:text-5xl font-extrabold px-5 pb-5 md:pb-6 text-center">JAISWAL</h1>

    <p className="text-center text-wrap text-xl md:text-2xl font-semibold p-5  md:p-6 m-2 " >A focused Frontend Web Developer building the Frontend of Web Applications and Websites.</p>
    <div className=" text-center">

    <button className="bg-violet-500 text-violet-50 tracking-wider font-bold text-xl p-3 mt-8 mb-[100px] rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-violet-700 transition ease-in duration-300" ><a href="#projects">PROJECTS</a></button>
   
    </div>

   </div>
  </div>;
}

export default About;
About;
