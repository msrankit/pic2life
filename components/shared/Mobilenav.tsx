'use client'
import {
    Sheet,
    SheetContent,
    // SheetDescription,
    // SheetHeader,
    // SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from "@/constant"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

  

const Mobilenav = () => {

  const pathname = usePathname()
  return (
   <header className="header">
    <Link href='/' className="flex items-center gap-4 md:py-2">
      <Image
       src='/assets/images/logo-text.svg'
       alt="logo"
       width={180}
       height={28}
      />
    </Link>
    <nav className="flex gap-2">
        <SignedIn>
            <UserButton afterSignOutUrl="/"  />
        
        <Sheet>
  <SheetTrigger>
    <Image src={'assets/icons/menu.svg'} alt="menu" height={32} width={32} className="cursor-pointer" />
  </SheetTrigger>
  <SheetContent className="sheet-content sm:w-64">
    <>
    <Image

     src={'assets/images/logo-text.svg'}
      alt={'logo'}
      height={23}
      width={152}                                
/>
<ul className="header-nav-link">
  {navLinks.map((link)=>{
    const isActive = link.route === pathname
   return(
    <li className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}
                    key={link.route}>
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                     <Image
                      src={link.icon}
                      alt={link.label}
                      height={24}
                      width={24}
                     />
                     {link.label}
                    </Link>
                    </li>
   )
  })}
</ul>
    </>

  </SheetContent>
  
</Sheet>
</SignedIn>
      <SignedOut>
        <Button asChild className="button bg-purple-gradient bg-cover">
        <Link href="/sign-in">Login</Link>
        </Button>
      </SignedOut>
    </nav>
   </header>
  )
}

export default Mobilenav