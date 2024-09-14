import { useState } from "react";



const Form = ()=>{
 
    const [formData, setformData] = useState({
         FirstName:"", LastName:"" , Email:"" , Country:"" , Streetaddress:"" , City:"" , State:"" , Zip_PostalCode:"",
          Comments:false , Candidates:false , Offers:true , Notification:"" 
    });

    function changeHandler(event){
         const {value, checked, name, type } = event.target
        setformData( (prevsFormData) => {
            return{
                ...prevsFormData ,
                [name] : type === "checkbox"? checked : value
            }
        }   
    )  
}
    function submitHandler(event){
        event.preventDefault();

        console.log(formData)
        
    }
   
    return(
        <div className="border border-solid border-gray-200 shadow-lg w-[80%] max-w-[1200px] p-14 rounded-md  ">
            <form className="flex flex-col gap-8" onSubmit={submitHandler} >
            <label className=" ">First Name</label>
            <input  type="text" onChange={changeHandler} name="FirstName" value={formData.FirstName}
             placeholder="First Name" className="px-10 py-3 border-sky-500 shadow-md rounded-md border-5 border-solid border "/>

            <label>Last Name</label>
            <input type="text" placeholder="Last Name" value={formData.LastName} name="LastName" onChange={changeHandler}
            className="px-10 py-3  border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>Email address</label>
            <input type="email" placeholder="abc@gmail.com" value={formData.Email} name="Email" onChange={changeHandler}
            className="px-10 py-3  border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>Country</label>
            <select onChange={changeHandler} name="Country" id="Country" value={formData.Country}
             className="px-10 py-3  border-sky-500 shadow-md rounded-md border-5 border-solid border">
            <option>India</option>
            <option>Nepal</option>
            <option>Africa</option>
            <option>United State</option>
            <option>United Kingdom</option>
            <option>Australiya</option>
            <option>Russia</option>
            <option>China</option>
            </select>

            <label>Street address</label>
            <input type="text" name="Streetaddress" placeholder="1234 Main St" onChange={changeHandler} value={formData.Streetaddress}
            className="px-10 py-3 border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>City</label>
            <input type="text" name="City" placeholder="Nashik" onChange={changeHandler} value={formData.City}
            className="px-10 py-3   border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>State/Province</label>
            <input type="text" name="State" placeholder="Maharashtra" onChange={changeHandler} value={formData.State}
            className="px-10 py-3  border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>Zip/Postal Code</label>
            <input type="number" name="Zip_PostalCode" placeholder="422201" onChange={changeHandler} value={formData.Zip_PostalCode}
            className="px-10 py-3  border-sky-500 shadow-md rounded-md border-5 border-solid border"/>

            <label>By Email</label>

           <div className="flex gap-4 items-center">
           <input type="checkbox" name="Comments" id="Comments" checked={formData.Comments} className=" w-[2rem] h-[2.4rem] "  onChange={changeHandler} />
           <label htmlFor="Comments" className="text-3.5xl ms-2 pb-2"  >Comments</label>
           </div>
            
           <div className="flex gap-4 items-center">
           <input type="checkbox" name="Candidates" id="Candidates" checked={formData.Candidates}  className=" w-[2rem] h-[2.4rem] " onChange={changeHandler}/>
           <label htmlFor="Candidates" className="text-3.5xl ms-2 pb-2"  >Candidates</label>
           </div>

          <div className="flex items-center gap-4">
          <input type="checkbox" name="Offers" id="Offers" checked={formData.Offers} className=" w-[2rem] h-[2.4rem]  " onChange={changeHandler}/>
          <label htmlFor="Offers" className="text-3.5xl ms-2 pb-2">Offers</label>
          </div>

            <p>Puah Notificatios</p>
            <p>These are delivered via SMS to your mobile phone</p>

            <div className="flex items-center gap-4">
            <input type="radio" name="Notification" className=" w-[2rem] h-[2.4rem]  " value="Everything" id="Everything" onChange={changeHandler}
             checked={formData.Notification === "Everything"} />
            <label htmlFor="Everything"  className="text-3.5xl ms-2 pb-2" >Everything</label>
            </div>

          <div className="flex items-center gap-4">
          <input type="radio" name="Notification" className=" w-[2rem] h-[2.4rem]  " value="SaveAsEmail" id="SaveAsEmail" onChange={changeHandler}
          checked={formData.Notification === "SaveAsEmail"} />
          <label htmlFor="SaveAsEmail" className="text-3.5xl ms-2 pb-2">Same as email</label>
          </div>

         <div className="flex items-center gap-4">
         <input type="radio" name="Notification"  className=" w-[2rem] h-[2.4rem] "  value="NoPushNotification" id="NoPushNotification"  onChange={changeHandler}
            checked={formData.Notification === "NoPushNotification"} />
         <label htmlFor="NoPushNotification"  className="text-3.5xl ms-2 pb-2">No push notification</label>
         </div>

            <button className="px-4 py-2 w-15  bg-sky-600 text-slate-100" >Save</button>
            </form>
        </div>
    )
}

export default Form;