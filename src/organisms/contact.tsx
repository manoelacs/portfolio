import { PageTitle } from '../atoms/pageTitle';
import React from 'react';
import EmailIcon from '../assets/icons/contact/e-mail.svg?react';
import PhoneIcon from '../assets/icons/contact/phone.svg?react';
import { InputField, TextField } from '../atoms/inputField';
import { ContactCard } from '../atoms/contactCard';
import Button from '../atoms/button';

export const Contact = () => {
  return (
    <div className=' flex flex-col items-center justify-center gap-y-8 w-[694px]'>
      <PageTitle title='Contact' />

      <div className='flex flex-row justify-between w-full'>
        <ContactCard
          title='Phone'
          content='+55 11 9 9999-9999'
          icon={<PhoneIcon />}
          type='primary'
        />
        <ContactCard
          title='Email'
          content={'aleonamaissac@hotmailcom'}
          icon={<EmailIcon />}
          type={'secondary'}
        />
      </div>
      <div className=' h-96 bg-muted rounded-2xl w-[694px] py-8 px-12'>
        <p className="text-foreground text-base font-normal font-['Raleway'] leading-loose tracking-tight text-justify">
          I am always open to discussing{' '}
          <b>new projects, opportunities in tech world, partnerships</b> and
          more so <b>mentorship.</b>
        </p>
        <form className='flex flex-col gap-4 pt-4 items-center'>
          <InputField label='Name' type='text' id='name' name='name' required />

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
            className='w-32'
            label='Submit'
            onClick={() => {
              throw new Error('Function not implemented.');
            }}
            variant='solid'
          />
        </form>
      </div>
    </div>
  );
};
