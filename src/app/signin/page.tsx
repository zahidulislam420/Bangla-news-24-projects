"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignInPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    try {
      const { error } = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        toast.error(error.message || "Sign in failed. Check your email and password.");
        return;
      }

      toast.success("Sign in successful!");
      router.replace("/");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to sign in. Please try again.",
      );
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
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">Sign In</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            Sign In
          </button>
        </fieldset>
      </form>

     <button onClick={handleGoogleSignIn} className="btn">Sign In with Google</button>
     <button onClick={handleGithubSignIn} className="btn">Sign in with GitHub</button>
    </div>
  );
};

export default SignInPage;