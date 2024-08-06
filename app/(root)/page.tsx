import AddDocumentBtn from '@/components/AddDocumentBtn';
import Header from '@/components/Header';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Home() {
   const clerkUser = await currentUser();
   if (!clerkUser) redirect('/sign-in');

   const documents: any[] = [];

   return (
      <main className='home-container'>
         <Header className='sticky left-0 top-0 z-50'>
            <div className='flex items-center gap-2 lg:gap-4'>
               Notification
               <SignedIn>
                  <UserButton />
               </SignedIn>
            </div>
         </Header>

         {documents.length === 0 ? (
            <div className='document-list-empty'>
               <Image
                  alt='document'
                  width={40}
                  height={40}
                  src={'/assets/icons/doc.svg'}
                  className='mx-auto'
               />

               <AddDocumentBtn
                  userId={clerkUser.id}
                  email={clerkUser.emailAddresses[0].emailAddress}
               />
            </div>
         ) : (
            <div></div>
         )}
      </main>
   );
}
