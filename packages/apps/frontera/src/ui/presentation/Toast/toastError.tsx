import { toast } from 'react-toastify';

import { XClose } from '@ui/media/icons/XClose';
import { IconButton } from '@ui/form/IconButton';

import ExclamationWaves from './assets/ExclamationWaves';

export const toastError = (text: string, id: string) => {
  return toast.error(text, {
    toastId: id,
    icon: ExclamationWaves,
    autoClose: 5000,
    closeButton: ({ closeToast }) => (
      <IconButton
        variant='ghost'
        aria-label='Close'
        colorScheme='error'
        onClick={closeToast}
        icon={<XClose className='size-5' />}
      />
    ),
  });
};
