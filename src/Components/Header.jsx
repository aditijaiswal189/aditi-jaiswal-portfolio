

function Header() {
  return (
   

    <div className=" bg-stone- flex justify-between items-center p-2  m-4">
      <div className="flex items-center gap-3 ">

        <img src="Images/favicon-32x32.png"  className="rounded-2xl"/>
        <h3 className="text-sm md:text-lg font-bold  tracking-wide">ADITI JAISWAL</h3>
      
      </div>
      <div className="flex justify-end text-center  gap-2 font-normal text-sm md:text-lg mr-4">
        
        <a href="#about" >HOME</a>
        <a href="#aboutme">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contactform">CONTACT</a>
      </div>

    </div>
   
  );
}

export default Header;
