function ContactForm() {
  return <section className=" bg-hero-pattern flex justify-between items-center p-2    flex-col gap-3 md:p-4  md:gap-5" id="contactform">
    <h2 className="text-3xl font-bold  pt-[40px] text-center md:text-4xl md:font-extrabold  md:pt-[50px] lg:text-5xl">CONTACT</h2>
    <div className="border-b-4 rounded-md items-center  border-violet-600 w-8 h-2 md:w-10 md:h-4"> 
     </div>
     <p className="text-center  text-wrap text-sm tracking-normal text-stone-800 font-medium p-3 m-2 md:text-lg md:font-semibold md:p-5 md:m-4 lg:text-xl">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
     <form className=" bg-stone-100 sm:p-10 rounded-md w-9/12 mb-10 xs:p-6 md:p-12 md:mb-12">
      <label className="text-lg md:text-xl lg:text-2xl ">Name</label>
      <p>

      <input type="text" placeholder="Enter Your Name" className="bg-stone-300 px-4  py-2 rounded-md my-3 w-full text-stone-800 mb-6 focus:ring-2 focus:ring-violet-600 md:px-6 md:py-4 md:my-5  md:mb-8  lg:text-xl 
      
      "/>
      </p>
      <label className="text-lg md:text-xl lg:text-2xl">Email</label>
      <p>

      <input type="text" placeholder="Enter Your Email" className="bg-stone-300 w-full text-stone-800 px-4 mb-6 py-2 rounded-md my-3  md:px-6 md:py-4 md:my-5  md:mb-8  lg:text-xl "/>
      </p>
      <label className="text-lg md:text-xl lg:text-2xl">Message</label>
      <p className="h-3/5">

      <textarea required cols="30" rows="10" type="text" placeholder="Enter Your Message" className="bg-stone-300 w-full px-4  py-2 rounded-md my-3 mb-6 text-stone-800  focus:ring-2 focus:ring-violet-600 text-start md:px-6 md:py-4 md:my-5 md:mb-8  mr-15  lg:text-xl "/>
      </p>
      <div className=" text-end">

<button className="bg-violet-500 text-violet-50  font-bold text-sm p-3 mt-2 mr-15 rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-violet-700 transition ease-in duration-300 md:text-lg md:p-5 md:mt-4 lg:text-xl xl:text-2xl" >SUBMIT</button>

</div>
     </form>
  </section>;
}

export default ContactForm;
