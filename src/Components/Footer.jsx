function Footer() {
  const year = new Date().getFullYear();
  
  return <footer className="bg-stone-950">
  <div className="flex flex-col justify-center relative">
    <div className="bg-gray-50 p-2 absolute  right-2 top-2 md:p-4 md:right-6 md:top-6">
      <a href="https://www.linkedin.com/in/aditij189/" className="block p-2 cursor-pointer md:text-2xl md:p-3">
        <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      <a href="https://github.com/aditijaiswal189" className="block p-2 cursor-pointer md:text-2xl md:p-3">
        <ion-icon name="logo-github" ></ion-icon>
        </a>
      <a href="https://twitter.com/jaiswal_adt" className="block p-2 cursor-pointer md:text-2xl md:p-3">
        <ion-icon name="logo-twitter"></ion-icon>
        </a>
    </div>
    <h4 className="text-xl font-bold p-6 text-stone-50 md:text-2xl md:p-8 md:font-extrabold md:tracking-wider">ADITI JAISWAL</h4>
  <p className="text-left text-wrap text-sm font-medium p-5 m-2 pb-[100px] text-stone-50 w-[80%]  border-b-stone-100 md:text-lg md:font-semibold md:p-7 md:m-4 md:pb-[120px] md:w-[600px]" >A focused Frontend Web Developer building the Frontend of Web Applications and Websites.</p>
  <div className="border-b-4 rounded-md items-center  border-stone-400 h-1 "> 
     </div>
  <p className="text-center text-wrap text-xs font-medium p-6 m-2 text-stone-50  md:text-lg  md:p-8 md:m-4 ">&#169; Copyright <span>{year}</span>. Made by <a id="about" className="underline cursor-pointer tracking-wider">Aditi Jaiswal</a></p>
    </div>
  </footer>;
}

export default Footer;
