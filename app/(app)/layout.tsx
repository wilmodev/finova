import Sidebar from "@/app/_components/layout/Sidebar"
import Navbar from "@/app/_components/layout/Navbar"
export default function Layout({children}:{
  children: React.ReactNode
}){
  return(
  <div className="min-h-screen  flex gap-6">
  <div aria-hidden="true" className="fixed inset-0 -z-10 bg-finova" />
    <Sidebar />
    {children}
    <Navbar />
  </div>
  )
}