import Link from 'next/link';
import { useState } from 'react';

const Register = ({ Register }) => {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [job,setJob] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPass,setConfirmpass] = useState('');

  const checkPass = () =>{
    if(password !== confirmPass) {
      return false
    } else {
      return true
    }
  };




  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
          <h1 class="text-3xl font-bold text-center mb-6">Register</h1>
          <form>
              <input type="text" placeholder="Username" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(event) =>{
                  setUsername(event.target.value)
                  
                }}
              />
              <input type="email" placeholder="Email" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <input type="job" placeholder="Job" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(event) => {
                  setJob(event.target.value)
                }}
              />
              <input type="password" placeholder="Password" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
              <input type="password" placeholder="Confirm Password" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                onChange={(event) => {
                  setConfirmpass(event.target.value)
                }}
              />
              
              <button class="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
                onClick={(event)=>{
                  event.preventDefault()
                  if(!checkPass()){
                    alert("Password not match")
                    return
                  }

                  console.log("do something");
                  

                  
                }}
              >REGISTER</button>
          </form>
          <p class="text-sm text-gray-500 text-center mt-4">Already have an account? <a href="#" class="text-green-500">Sign in</a></p>
      </div>
    </div>


  );
};

export default Register;