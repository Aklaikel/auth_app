import Link from 'next/link';
import React from 'react';
import { buttonVariants } from "@/components/ui/button"
import { CircleUserRound } from 'lucide-react';


const Navbar = () => {
    return (
        <div className='bg-zink-100 py-2 border-b border-s-zink-200 fixed  w-full top-0 z-10'>
           <div className='container flex items-center justify-between'>
                <Link className='text-xl' href='/'><CircleUserRound /></Link>
                <Link className={buttonVariants()} href='/sign-in'>Sign In</Link>           
            </div> 
        </div>
    );
};

export default Navbar;