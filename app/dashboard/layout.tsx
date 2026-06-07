import SideNav from '@/app/ui/dashboard/sidenav';
import { BsWhatsapp } from "react-icons/bs";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>

      <div className="whatsapp fixed h-12 w-12 bottom-10 right-10 z-50 rounded-full bg-green-500 p-4 shadow-lg
      hover:bg-green-600 hover:scale-110 transition-colors duration-500 cursor-pointer items-center justify-center flex animate-pulse">
       
        <a href="https://wa.me/5521998452350?text=Gostaria%20de%20saber%20mais%20sobre%20cria%C3%A7%C3%A3o%20de%20sites%20para%20minha%20empresa%2Fneg%C3%B4cio." target="_blank" rel="noopener noreferrer" className="text-white">
          <BsWhatsapp className="h-7 w-7"  />
        </a>
      
      </div>
    </div>
  );
}