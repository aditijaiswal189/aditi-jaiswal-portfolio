

function Header() {
  return (
   

    <header className=" bg-stone- flex justify-between items-center p-2  m-4 lg:p-5 lg:m-7 2xl:p-7 2xl:m-8">
      <div className="flex items-center gap-3 lg:gap-5 ">

        <img src="Images/favicon-32x32.png"  className="rounded-2xl"/>
        <h3 className="text-sm md:text-lg font-bold  tracking-wide lg:text-xl lg:font-extrabold lg:tracking-wider 2xl:text-3xl 2xl:tracking-widest">ADITI JAISWAL</h3>
      
      </div>
      <div className="flex justify-end text-center  gap-2 font-normal text-sm md:text-lg mr-4 lg:text-xl lg:mr-7 lg:gap-5 lg:font-semibold 2xl:text-2xl 2xl:mr-9 2xl:gap-7 2xl:font-bold 2xl:tracking-wider">
        
        <a href="#about" >HOME</a>
        <a href="#aboutme">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contactform">CONTACT</a>
      </div>

    </header>
   
  );
}

export default Header;
