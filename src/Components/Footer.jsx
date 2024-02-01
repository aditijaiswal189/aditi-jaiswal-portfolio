function Footer() {
  const year = new Date().getFullYear();
  
  return <div className="bg-stone-950">
  <div className="flex flex-col justify-center relative">
    <div className="bg-gray-50 p-2 absolute  right-2 top-2 ">
      <a href="https://www.linkedin.com/in/aditij189/" className="block p-2 cursor-pointer">
        <ion-icon name="logo-linkedin"></ion-icon>
        </a>
      <a href="https://github.com/aditijaiswal189" className="block p-2 cursor-pointer ">
        <ion-icon name="logo-github" ></ion-icon>
        </a>
      <a href="https://twitter.com/jaiswal_adt" className="block p-2 cursor-pointer">
        <ion-icon name="logo-twitter"></ion-icon>
        </a>
    </div>
    <h4 className="text-xl font-bold p-6 text-stone-50">ADITI JAISWAL</h4>
  <p className="text-left text-wrap text-sm font-medium p-5 m-2 pb-[100px] text-stone-50 w-[500px]  border-b-stone-100" >A focused Frontend Web Developer building the Frontend of Web Applications and Websites.</p>
  <div className="border-b-4 rounded-md items-center  border-stone-400 h-1 "> 
     </div>
  <p className="text-center text-wrap text-xs font-medium p-6 m-2 text-stone-50 w-[500px]">&#169; Copyright <span>{year}</span>. Made by <a id="about" className="underline cursor-pointer tracking-wider">Aditi Jaiswal</a></p>
    </div>
  </div>;
}

export default Footer;
