import { Smiley } from 'phosphor-react';
import { toast } from 'react-toastify';

export function toastSuccess(message: string) {
  return toast.success(message, {
    position: 'top-center',
    draggable: true,
    icon: <Smiley size={25} />,
  });
}
