import { useState } from "react";
import Swal from 'sweetalert2'



function App() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [country, setcountry] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  let submitForm = () =>{
    Swal.fire({
      title: `My name is ${name} && I live in ${country}`,
      text: `Do you ${email} want to continue`,
      icon: 'error',
      confirmButtonText: `Cool ${phone}`
    })
  }

  return (
    <div class="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
    <div class="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div class="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
            DATA ANALYTICS FORM
        </div>
        <div class="">
            <div>
                 <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"  placeholder="Name" onChange={e => setname(e.target.value)}/>
            </div>
             <div>
                 <input type="email" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"  placeholder="Email Adress " onChange={e => setemail(e.target.value)}/>
            </div>
             <div>
            <input type="text" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Country " onChange={e => setcountry(e.target.value)}/>
            </div>
             <div>
            <input type="phone" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Phone " onChange={e => setphone(e.target.value)}/>
            </div>
            <div class="">
                <input type="password" class="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"  placeholder="Password " />
            </div>
            <div class="flex">
                <input type="checkbox" class="border-sky-400 " value="" />
                <div class="px-3 text-gray-500">
                    I accept terms & conditions
                </div>
            </div>
            <div class="flex justify-center my-6">
                <button class=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " onClick={submitForm}>
                    Create Account
                </button>
            </div>
            <div class="flex justify-center ">
                <p class="text-gray-500">Already have an acount? </p>
                <a href="" class="text-sky-600 pl-2"> Sign In</a>
            </div>
        </div>
    </div>
  </div>
  );
}

export default App;
