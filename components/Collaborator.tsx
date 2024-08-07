'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import UserTypeSelector from './UserTypeSelector';
import { Button } from './ui/button';
import {
   removeCollaborator,
   updateDocumentAccess
} from '@/lib/actions/room.actions';
import { Badge } from './ui/badge';

const Collaborator = ({
   roomId,
   creatorId,
   collaborator,
   email,
   user
}: CollaboratorProps) => {
   const [userType, setUserType] = useState<UserType>(
      collaborator.userType || 'viewer'
   );
   const [loading, setLoading] = useState(false);

   const shareDocumentHandler = async (type: string) => {
      setLoading(true);

      const updatedRoom = await updateDocumentAccess({
         roomId,
         email,
         userType: type as UserType,
         updatedBy: user
      });

      setLoading(false);
   };
   const removeCollaboratorHandler = async (email: string) => {
      setLoading(true);

      await removeCollaborator({
         roomId,
         email
      });

      setLoading(false);
   };

   return (
      <li className='flex items-center justify-between gap-2 py-3'>
         <div className='flex gap-2'>
            <Image
               src={collaborator.avatar}
               alt='avatar'
               width={36}
               height={36}
               className=' size-9 rounded-full'
            />
            <div className='flex flex-col'>
               <p className='text-sm font-semibold line-clamp-1 leading-4 '>
                  {collaborator.name}
                  <span>
                     {loading && (
                        <Badge className='text-opacity-80'>Updating</Badge>
                     )}
                  </span>
               </p>
               <p className='text-xs text-opacity-80'>{collaborator.email}</p>
            </div>
         </div>

         {creatorId === collaborator.id ? (
            <span className='text-xs text-blue-100 font-semibold'>Owner</span>
         ) : (
            <div className='flex items-center'>
               <UserTypeSelector
                  userType={userType}
                  setUserType={setUserType}
                  onClickHandler={shareDocumentHandler}
               />

               <Button
                  type='button'
                  onClick={() => removeCollaboratorHandler(collaborator.email)}
               >
                  Remove
               </Button>
            </div>
         )}
      </li>
   );
};

export default Collaborator;
