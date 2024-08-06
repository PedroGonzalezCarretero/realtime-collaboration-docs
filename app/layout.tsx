import './globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Header from '@/components/Header';
import {
   ClerkProvider,
   SignedIn,
   SignedOut,
   SignInButton,
   UserButton
} from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const fontSans = FontSans({
   subsets: ['latin'],
   variable: '--font-sans'
});

export const metadata: Metadata = {
   title: 'LiveDocs',
   description: 'LiveDocs is a realtime collaborative platform for developers.'
};

export default function RootLayout({
   children
}: {
   children: React.ReactNode;
}) {
   return (
      <ClerkProvider
         appearance={{
            baseTheme: dark,
            variables: {
               colorPrimary: '#3371FF',
               fontSize: '16px'
            }
         }}
      >
         <html lang='en' suppressHydrationWarning>
            <body
               className={cn(
                  'min-h-screen font-sans antialiased',
                  fontSans.variable
               )}
            >
               <Header>
                  <div
                     className='flex w-fit items-center justify-center
                  gap-2'
                  >
                     <p className='document-title'>
                        This is a document title.{' '}
                     </p>
                  </div>

                  <SignedOut>
                     <SignInButton />
                  </SignedOut>
                  <SignedIn>
                     <UserButton />
                  </SignedIn>
               </Header>
               {children}
            </body>
         </html>
      </ClerkProvider>
   );
}
