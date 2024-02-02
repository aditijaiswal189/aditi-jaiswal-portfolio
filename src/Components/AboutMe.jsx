function AboutMe() {
  return <section className="bg-stone-100 " id="aboutme">
   <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
     <h2 className="text-3xl md:text-4xl font-bold  pt-[90px] text-center lg:text-5xl">ABOUT ME</h2>
    <div className="border-b-4 rounded-md items-center  border-violet-600 w-8 h-2 md:w-10 md:h-4 lg:w-12 lg:h-6"> 
     </div>
    <p className="text-center  text-wrap text-lg md:text-xl tracking-normal text-stone-600 font-medium p-5 m-2 md:p-7  md:m-3 lg:text-2xl lg:p-9 lg:m-5">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
    </div>
    
  </section>;
}

export default AboutMe;
