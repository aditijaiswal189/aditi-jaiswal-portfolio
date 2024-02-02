function Project1() {
  return <section className="bg-stone-50 flex flex-col  justify-center items-center md:gap-5 lg:flex-row lg:pt-10 xl:pb-20">
   <div>
     <img src="Images/project1Notes.png"/>
    </div>
 <div className="text-center lg:flex lg:flex-col lg:justify-center lg:items-center ">
  <h3 className="text-xl font-bold pt-5 md:text-3xl md:font-extrabold md:pt-7 lg:pt-9">Notes App</h3>
 
  <p className="text-center  text-wrap text-sm tracking-normal text-stone-600 font-medium p-5 pt-2 m-2 md:text-lg md:p-7 md:m-4 md:pt-4 lg:py-9">
    <strong>Notes App</strong> is my React.js project that I have created using Context API, useReducer, React Router, etc. Through this project I have learnt to use Rect Hooks to add, delete, display, and search notes.</p>
    <div className=" text-center">

<button className="bg-violet-500 text-violet-50 tracking-wider font-bold text-lg p-3 mt-2 mb-[100px] rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-violet-700 transition ease-in duration-300 md:text-xl md:p-5 md:mt-4 md:mb-[120px] lg:mb-[60px]" ><a href="https://notes-app-aditi.netlify.app/" target="blank">LIVE LINK</a></button>
  </div>
</div>
</section>;
}

export default Project1;
