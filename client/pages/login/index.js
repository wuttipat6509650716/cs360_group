import Link from 'next/link';

const Login = ({ login }) => {
  const [username,setUsername] = useState('');  
  const [password,setPassword] = useState('');
 
  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
        <h1 class="text-3xl font-bold text-center mb-6">Sign in</h1>
        <form>
            <input type="username" placeholder="Username" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
             onChange={(event) => {
                setUsername(event.target.value)
              }}/>
            <input type="password" placeholder="Password" class="w-full px-4 py-3 mb-4 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
             onChange={(event) => {
                setPassword(event.target.value)
              }}/>
            <button class="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            
            onClick={(event)=>{
                event.preventDefault()
                console.log(username);
                console.log(password);
                 
              }}

            
            >SIGN IN</button>
        </form>
    </div>
  </div>

  );
};

export default Login;