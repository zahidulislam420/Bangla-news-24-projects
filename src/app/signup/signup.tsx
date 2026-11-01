"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};

   const {data, error} = await authClient.signUp.
   email({
    ...user,
    callbackURL: "/"
   })

if(data) {
    console.log(data);
    redirect("/")
    
}
if(error) {
    console.log(error)
}

  };

  const handleGoogleSignIn = async () => {
 await authClient.signIn.social({
    provider: "google",
  });
}

const handleGithubSignIn = async () => {
  await authClient.signIn.social({
    provider: "github",
  });
}


    return (
        <div className='mt-5 flex flex-col items-center justify-center px-4'>
            <h2 className='text-2xl font-bold text-red-700'>Sign Up</h2>
        <form onSubmit={onSubmit} className="w-full max-w-md">
              <fieldset className="fieldset w-full rounded-box">

    <label className="label">Name</label>
    <input name='name' type="text" className="input" placeholder="name" />

  <label className="label">ImageURL</label>
  <input name='image' type="url" className="input" placeholder="image" />


  <label className="label">Email</label>
  <input name='email' type="email" className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input name='password' type="password" className="input" placeholder="Password" />

  <button type='submit' className="btn text-white bg-red-700">SignUp</button>
</fieldset>
            
        </form>

        <button onClick={handleGoogleSignIn} className="btn w-full max-w-md">Sign In with Google</button>
        <button onClick={handleGithubSignIn} className="btn w-full max-w-md">Sign in with GitHub</button>

        </div>
    );
};

export default SignUpPage;