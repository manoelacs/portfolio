import React from 'react';
import EmailIcon from '../assets/icons/contact/e-mail.svg?react';
import PhoneIcon from '../assets/icons/contact/phone.svg?react';
import { InputField, TextField } from '../atoms/inputField';
import { ContactCard } from '../atoms/contactCard';
import Button from '../atoms/button';

import myResume from '../config/myResume.json';
import { PageLayout } from './pageLayout';

export const Contact = () => {
  const { info, contact } = myResume;

  return (
    <PageLayout pageTitle='About Me'>
      <div className=' flex flex-col items-center justify-center gap-y-8  pt-10'>
        <div className='flex flex-col xl:flex-row justify-between w-full gap-y-4 xl:gap-0 xl:w-[694px] '>
          <ContactCard
            title='Phone'
            content={info.phone}
            icon={<PhoneIcon />}
            type='primary'
          />
          <ContactCard
            title='Email'
            content={info.email}
            icon={<EmailIcon />}
            type={'secondary'}
          />
        </div>
        <div className='xl:h-96 w-fit h-fit bg-muted rounded-2xl xl:w-[694px] py-8 xl:px-12 px-4'>
          <p className="text-foreground text-md xl:text-base font-normal font-['Raleway'] leading-loose tracking-tight text-justify">
            {contact.description}
          </p>
          <form className='flex flex-col gap-4 pt-4 items-center'>
            <InputField
              label='Name'
              type='text'
              id='name'
              name='name'
              required
            />

            <InputField
              label='Email'
              type='email'
              id='email'
              name='email'
              required
            />

            <TextField
              label='Message'
              type='text'
              id='message'
              name='message'
              required
            />

            <Button
              className='w-32 '
              label='Submit'
              onClick={() => {
                throw new Error('Function not implemented.');
              }}
              variant='solid'
            />
          </form>
        </div>
      </div>
    </PageLayout>
  );
};
