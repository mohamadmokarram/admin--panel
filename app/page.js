"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const url = "https://6898f944ddf05523e5603e9d.mockapi.io/users";

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(url);
      const resData = await res.json();

      const userExist = resData.find(
        user => user.email === email && user.password === password
      );

      if (userExist) {
        router.push("/dashboard");
      } else {
        router.push("/signup");
      }
    } catch (error) {
      setError("failed to connect to server. please try again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <LinearProgress className="fixed top-0 w-full text-blue-400" />
      )}
      <div className="w-full h-screen flex justify-center items-center *:text-2xl purple-gradient">
        <div className="w-[350px] flex flex-col items-center p-4 rounded-xl glassy">
          <h2 className="text-white text-xl my-2 font-semibold">
            Welcome Back
          </h2>
          <p className="text-[12px] text-slate-100 pb-3">
            Sign in to your account
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-4">
            <input
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              className="text-input"
              placeholder="Email Address"
            />
            <input
              required
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              className="text-input"
              placeholder="password"
            />
            {error && (
              <p className="text-[12px] text-red-400 text-center">{error}</p>
            )}{" "}
            {error}
            <button className="w-3/4 signIn-btn font-bold text-white rounded-lg py-2 text-[14px] cursor-pointer  duration-200 hover:text-slate-200 tracking-widest hover:tracking-normal">
              Sign In
            </button>
          </form>
          <div className="w-3/4 mt-4 gap-2 flex justify-center">
            <p className="text-white text-[12px]">
              Don&apos;t have an account?
            </p>
            <Link
              className="text-[#80c1e4] text-[14px] font-semibold"
              href="/signup">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
