import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp />;
}

// app / signup / page.tsx;
// "use client";

// import { useSignUp } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const Signup = () => {
//   const { signUp } = useSignUp();
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userName, setUserName] = useState("");

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const signUpResult = await signUp?.create({
//         // username: userName,
//         emailAddress: email,
//         password: password,
//       });
//       console.log(signUpResult);

//       if (signUpResult?.status === "complete") {
//         const userId = signUpResult.createdUserId;

//         await fetch("/api/createUser", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userId }),
//         });

//         router.push("/dashboard");
//       } else {
//         console.error("Signup not complete");
//       }
//     } catch (error) {
//       console.error("Signup error", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSignup}>
//       <input
//         type="username"
//         value={userName}
//         onChange={(e) => setUserName(e.target.value)}
//         placeholder="Username"
//       />
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default Signup;
