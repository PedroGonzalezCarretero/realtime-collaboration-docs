'use client';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';
import React, { ReactNode } from 'react';
import Loader from './Loader';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Editor } from './editor/Editor';
import ActiveCollaborators from './ActiveCollaborators';

const CollaborativeRoom = ({
   roomId,
   roomMetadata
}: CollaborativeRoomProps) => {
   return (
      <RoomProvider id={roomId}>
         <ClientSideSuspense fallback={<Loader />}>
            <div className='collaborative-room'>
               <Header>
                  <div className='flex w-fit justify-center items-center gap-2'>
                     <p className='document-title'>Share</p>
                  </div>

                  <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                     <ActiveCollaborators />
                  </div>

                  <SignedOut>
                     <SignInButton />
                  </SignedOut>
                  <SignedIn>
                     <UserButton />
                  </SignedIn>
               </Header>

               <Editor />
            </div>{' '}
         </ClientSideSuspense>
      </RoomProvider>
   );
};

export default CollaborativeRoom;
