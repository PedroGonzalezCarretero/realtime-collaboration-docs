import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({ children }: HeaderProps) => {
   return (
      <div className='header'>
         <Link href={'/'}>
            <Image
               src={'/assets/icons/logo.svg'}
               width={120}
               height={32}
               alt={'logo with a name'}
               className='hidden md:block'
            />
            <Image
               src={'/assets/icons/logo-icon.svg'}
               width={32}
               height={32}
               alt={'logo without a name'}
               className='mr-2  md:hidden'
            />
         </Link>

         {children}
      </div>
   );
};

export default Header;
