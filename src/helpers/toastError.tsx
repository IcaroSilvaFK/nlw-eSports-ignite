import { Bug } from 'phosphor-react';
import { toast } from 'react-toastify';

export function toastError(message: string) {
  return toast.error(message, {
    position: 'top-center',
    draggable: true,
    icon: <Bug size={25} />,
  });
}
