import { redirect } from "next/navigation";


export default function Home() {
  redirect('/signin');
  
  // return (
  //  <div className="bg-slate-200 w-full h-screen">
  //   home
  //  </div>
  // );
}
