import React, { useState, MouseEvent, KeyboardEvent } from 'react';

import { observer } from 'mobx-react-lite';

import { cn } from '@ui/utils/cn';
import { Spinner } from '@ui/feedback/Spinner';
import { ColumnViewType } from '@graphql/types';
import { Mail01 } from '@ui/media/icons/Mail01';
import { Button } from '@ui/form/Button/Button';
import { useStore } from '@shared/hooks/useStore';
import { ButtonGroup } from '@ui/form/ButtonGroup';
import { validateEmail } from '@shared/util/emailValidation';
import { LinkedinOutline } from '@ui/media/icons/LinkedinOutline';
import { validLinkedInProfileUrl } from '@utils/linkedinValidation';
import { Command, CommandCancelIconButton } from '@ui/overlay/CommandMenu';

import { BulkContactsEditor } from './BulkContactsEditor';

export const AddContactsBulk = observer(() => {
  const store = useStore();
  const [type, setType] = useState<'email' | 'linkedin'>('linkedin');
  const [data, setData] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingError, setLoadingError] = useState<string>('');
  const [showEmptyError, setShowEmptyError] = useState<boolean>(false);

  const handleClose = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    store.ui.commandMenu.toggle('AddContactsBulk');
    store.ui.commandMenu.clearContext();
  };

  const lines = data.split('\n');
  const tooManyLines = lines.length > 200;
  const hasInvalidData = lines.filter(
    (c) =>
      c.length > 0 &&
      ((type === 'email' && validateEmail(c)) ||
        (type === 'linkedin' && !validLinkedInProfileUrl(c))),
  );
  const contactsDataArr = lines.filter(
    (c) =>
      c.length > 0 &&
      ((type === 'email' && !validateEmail(c)) ||
        (type === 'linkedin' && validLinkedInProfileUrl(c))),
  );

  const validLinesCount = contactsDataArr.length;

  const handleAddContacts = () => {
    setIsLoading(true);
    setLoadingError('');

    const contactsPreset = store.tableViewDefs.contactsPreset;
    const tableViewDef = store.tableViewDefs.getById(contactsPreset ?? '');

    if (type === 'email') {
      store.contacts.createBulkByEmail({
        emails: contactsDataArr,
        options: {
          onSuccess: () => {
            tableViewDef?.setSorting(ColumnViewType.ContactsUpdatedAt, true);
            store.ui.commandMenu.toggle('AddContactsBulk');
            store.ui.commandMenu.clearContext();
          },
          onError: (err) => {
            setLoadingError(err);
            setIsLoading(false);
          },
        },
      });
    }

    if (type === 'linkedin') {
      store.contacts.createBulkByLinkedIn({
        linkedInUrls: contactsDataArr,
        options: {
          onSuccess: () => {
            tableViewDef?.setSorting(ColumnViewType.ContactsUpdatedAt, true);
            store.ui.commandMenu.toggle('AddContactsBulk');
            store.ui.commandMenu.clearContext();
          },
          onError: (err) => {
            setLoadingError(err);
            setIsLoading(false);
          },
        },
      });
    }
  };

  return (
    <Command shouldFilter={false} label='Add contact to flow...'>
      <article className='relative w-full p-6 flex flex-col border-b border-b-gray-100 max-h-[580px]'>
        <div className='flex items-center justify-between mb-2'>
          <h1 className='text-base font-semibold'>
            Add one or many contacts via...
          </h1>
          <CommandCancelIconButton onClose={handleClose} />
        </div>

        <div className='text-sm flex flex-col gap-4'>
          <ButtonGroup className='flex items-center w-full'>
            <Button
              size='xs'
              onClick={() => setType('linkedin')}
              leftIcon={<LinkedinOutline className='text-inherit' />}
              className={cn('bg-white !border-r w-full', {
                'bg-gray-50 text-gray-500 font-normal': type === 'email',
                'text-primary-600 hover:text-primary-600': type === 'linkedin',
              })}
            >
              LinkedIn
            </Button>
            <Button
              size='xs'
              onClick={() => setType('email')}
              leftIcon={<Mail01 className='text-inherit' />}
              className={cn('bg-white px-4 w-full', {
                'bg-gray-50 text-gray-500 font-normal': type === 'linkedin',
                'text-primary-600 hover:text-primary-600': type === 'email',
              })}
            >
              Email
            </Button>
          </ButtonGroup>
        </div>
        <div
          className={cn('mt-4 border border-gray-200 rounded max-h-[336px]', {
            'border-warning-400': data.length > 0 && hasInvalidData.length,
            'border-error-600': showEmptyError || tooManyLines || loadingError,
          })}
        >
          <BulkContactsEditor
            type={type}
            namespace={'add-new-contacts-bulk'}
            className={'max-h-[324px] overflow-y-auto p-2'}
            onChange={(newValue) => {
              if (showEmptyError) {
                setShowEmptyError(false);
              }
              setData(newValue);
            }}
          />
        </div>
        <div
          className={cn('rounded text-xs mt-1', {
            'text-warning-600': data.length > 0 && hasInvalidData.length,
            'text-error-600': showEmptyError || tooManyLines || loadingError,
          })}
        >
          {!!data.length && !!hasInvalidData.length && (
            <p>
              {hasInvalidData.length} of your{' '}
              {type === 'email' ? 'emails' : 'LinkedIn URLs'} are invalid. Only
              correctly formatted ones will be added.
            </p>
          )}
          {showEmptyError && !data.trim().length && (
            <p>Huston, we have a blank...</p>
          )}
          {loadingError && (
            <p>We're having trouble adding contacts. Try again in a moment.</p>
          )}
          {tooManyLines && <p>Add up to 200 contacts at a time</p>}
          {!tooManyLines &&
            !(showEmptyError && !data.trim().length) &&
            !(!!data.length && !!hasInvalidData.length) &&
            !loadingError &&
            `Add one ${type === 'email' ? 'email' : 'LinkedIn URL'} per line`}
        </div>

        <div className='flex justify-between gap-3 mt-2'>
          <Button
            size='sm'
            variant='outline'
            className='w-full'
            onClick={handleClose}
            onFocus={(e) => e.preventDefault()}
          >
            Cancel
          </Button>
          <Button
            size='sm'
            variant='outline'
            className='w-full'
            colorScheme='primary'
            isLoading={isLoading}
            data-test='contact-actions-confirm-flow-change'
            leftSpinner={<Spinner size='sm' label='creating contacts' />}
            loadingText={`Adding ${validLinesCount > 1 ? validLinesCount : ''} 
            ${validLinesCount === 1 ? 'contact' : 'contacts'}...`}
            onClick={() => {
              if (!data.trim().length) {
                return setShowEmptyError(true);
              }
              handleAddContacts();
            }}
          >
            Add {validLinesCount > 1 ? validLinesCount : ''}{' '}
            {validLinesCount === 1 ? 'contact' : 'contacts'}
          </Button>
        </div>
      </article>
    </Command>
  );
});