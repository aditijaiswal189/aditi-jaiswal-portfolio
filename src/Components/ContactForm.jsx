function ContactForm() {
  return <div className=" bg-hero-pattern flex justify-between items-center p-2    flex-col gap-3" id="contactform">
    <h2 className="text-3xl font-bold  pt-[40px] text-center  ">CONTACT</h2>
    <div className="border-b-4 rounded-md items-center  border-violet-600 w-8 h-2 "> 
     </div>
     <p className="text-center  text-wrap text-sm tracking-normal text-stone-800 font-medium p-3 m-2 ">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
     <div className=" bg-stone-100 p-10 rounded-md w-9/12 mb-10 ">
      <label >Name</label>
      <p>

      <input type="text" placeholder="Enter Your Name" className="bg-stone-300 px-4  py-2 rounded-md my-3 w-[350px] text-stone-800 mb-6 focus:ring-2 focus:ring-violet-600"/>
      </p>
      <label >Email</label>
      <p>

      <input type="text" placeholder="Enter Your Email" className="bg-stone-300 text-stone-800 px-4 mb-6 py-2 rounded-md my-3 w-[350px]"/>
      </p>
      <label >Message</label>
      <p className="h-3/5">

      <textarea required cols="30" rows="10" type="text" placeholder="Enter Your Message" className="bg-stone-300 px-4  py-2 rounded-md my-3 mb-6 text-stone-800 w-[350px] focus:ring-2 focus:ring-violet-600 text-start"/>
      </p>
      <div className=" text-end">

<button className="bg-violet-500 text-violet-50  font-bold text-sm p-3 mt-2 mr-15 rounded-lg hover:bg-violet-600 focus:ring-2 focus:ring-violet-700 transition ease-in duration-300" >SUBMIT</button>

</div>
     </div>
  </div>;
}

export default ContactForm;
