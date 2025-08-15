"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const url = "https://6898f944ddf05523e5603e9d.mockapi.io/users";

export default function SignUpPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          email,
          password,
        }),
      });

      if (res.ok) {
        router.replace("/dashboard");
      } else {
        setError("sign up process failed.please try again");
      }
    } catch (error) {
      setError(error.message || "failed to connect server");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <LinearProgress className="fixed top-0 w-full  text-blue-400" />
      )}
      <div className="w-full h-screen flex justify-center items-center *:text-2xl purple-gradient">
        <div className="w-[380px] flex flex-col items-center p-4 rounded-xl glassy">
          <p className="text-white text-xl my-2 font-semibold">
            You have not accout
          </p>
          <p className="text-white text-xl my-2 font-semibold mb-4">
            please Sign Up
          </p>
          <p className="text-[12px] text-slate-100 pb-3">Make your account</p>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-4">
            <div className="w-3/4 flex gap-2 justify-between">
              <input
                required
                onChange={e => setFname(e.target.value)}
                value={fname}
                type="text"
                name="firstName"
                className="text-input"
                placeholder="firstName"
              />
              <input
                required
                onChange={e => setLname(e.target.value)}
                value={lname}
                type="text"
                name="lastName"
                className="text-input"
                placeholder="lastName"
              />
            </div>
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
            )}
            <button className="w-3/4 signIn-btn font-bold text-white rounded-lg py-2 text-[14px] cursor-pointer  duration-200 hover:text-slate-200 tracking-widest hover:tracking-normal">
              Sign up
            </button>
          </form>
          <div className="w-3/4 mt-4 gap-2 flex justify-center">
            <p className="text-white text-[12px]">You have an account?</p>
            <Link className="text-[#80c1e4] text-[14px] font-semibold" href="/">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
