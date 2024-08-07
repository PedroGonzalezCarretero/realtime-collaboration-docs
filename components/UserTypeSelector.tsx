import React from 'react';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '@/components/ui/select';

const UserTypeSelector = ({
   userType,
   setUserType,
   onClickHandler
}: UserTypeSelectorParams) => {
   const accessChangeHandler = (type: UserType) => {
      setUserType(type);
      onClickHandler && onClickHandler(type);
   };

   return (
      <Select
         value={userType}
         onValueChange={(type: UserType) => {
            accessChangeHandler(type);
         }}
      >
         <SelectTrigger className='shad-select'>
            <SelectValue />
         </SelectTrigger>
         <SelectContent className='border-none bg-dark-200 '>
            <SelectItem className='shad-select-item' value='viewer'>
               Can view
            </SelectItem>
            <SelectItem className='shad-select-item' value='editor'>
               Can edit
            </SelectItem>
         </SelectContent>
      </Select>
   );
};

export default UserTypeSelector;
