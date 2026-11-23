import Sidebar from "@/app/_components/layout/Sidebar"
export default function Layout({children}:{
  children: React.ReactNode
}){
  return(
  <div className="max-h-screen   h-screen flex gap-6 overflow-hidden">
      <div
  aria-hidden="true"
  className="fixed inset-0 -z-10 bg-finova"
/>
    <Sidebar />
    {children}
  </div>
  )
}