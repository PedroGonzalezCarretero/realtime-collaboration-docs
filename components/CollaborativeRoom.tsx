'use client';
import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import Loader from './Loader';
import Header from '@/components/Header';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Editor } from './editor/Editor';
import ActiveCollaborators from './ActiveCollaborators';
import { Button } from './ui/button';
import { Input } from './ui/input';
import Image from 'next/image';
import { updateDocument } from '@/lib/actions/room.actions';

const CollaborativeRoom = ({
   roomId,
   roomMetadata
}: CollaborativeRoomProps) => {
   const currentUserType = 'editor';

   const [documentTitle, setDocumentTitle] = useState(roomMetadata.title);

   const [editing, setEditing] = useState(false);
   const [loading, setLoading] = useState(false);

   const containerRef = useRef<HTMLDivElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);

   const updateTitleHandler = async (
      e: React.KeyboardEvent<HTMLInputElement>
   ) => {
      if (e.key === 'Enter') {
         setLoading(true);

         try {
            if (documentTitle !== roomMetadata.title) {
               const updatedDocument = await updateDocument(
                  roomId,
                  documentTitle
               );

               if (updatedDocument) {
                  setEditing(false);
               }
            }
         } catch (error) {
            console.error(error);
         }
         setLoading(false);
      }
   };

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
         ) {
            setEditing(false);
            updateDocument(roomId, documentTitle);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [documentTitle, roomId]);

   useEffect(() => {
      if (editing && inputRef.current) {
         inputRef.current.focus();
      }
   }, [editing]);

   return (
      <RoomProvider id={roomId}>
         <ClientSideSuspense fallback={<Loader />}>
            <div className='collaborative-room'>
               <Header>
                  <div
                     ref={containerRef}
                     className='flex w-fit justify-center items-center gap-2'
                  >
                     {editing && !loading ? (
                        <Input
                           ref={inputRef}
                           value={documentTitle}
                           type='text'
                           placeholder='Enter title'
                           onChange={(e) => setDocumentTitle(e.target.value)}
                           onKeyDown={updateTitleHandler}
                           disabled={!editing}
                           className='document-title-input'
                        />
                     ) : (
                        <>
                           <p className='document-title'>{documentTitle}</p>
                        </>
                     )}

                     {currentUserType === 'editor' && !editing && (
                        <Image
                           alt='edit'
                           width={24}
                           height={24}
                           src={'/assets/icons/edit.svg'}
                           onClick={() => setEditing(true)}
                           className='pointer'
                        />
                     )}

                     {currentUserType !== 'editor' && !editing && (
                        <p className='view-only-tag'>View only</p>
                     )}

                     {loading && (
                        <p className='text-sm text-gray-400'>saving...</p>
                     )}
                  </div>

                  <div
                     className='flex gap-4
                  '
                  >
                     <Button
                        size={'sm'}
                        variant={'secondary'}
                        className='bg-blue-600'
                     >
                        Share
                     </Button>

                     <div className='flex w-full flex-1 justify-end gap-2 sm:gap-3'>
                        <ActiveCollaborators />
                     </div>

                     <SignedOut>
                        <SignInButton />
                     </SignedOut>
                     <SignedIn>
                        <UserButton />
                     </SignedIn>
                  </div>
               </Header>

               <Editor />
            </div>{' '}
         </ClientSideSuspense>
      </RoomProvider>
   );
};

export default CollaborativeRoom;
