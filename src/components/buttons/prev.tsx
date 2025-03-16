'use client'; // Asegúrate de que estás en un componente cliente

import { useRouter } from 'next/navigation';
import { GrFormPrevious } from 'react-icons/gr';

export default function PrevButtonPage() {
  const router = useRouter();

  return (
    <button className='border rounded-2xl cursor-pointer' onClick={() => router.back()}>
      <GrFormPrevious className=' text-2xl'/>
    </button>
  );
}