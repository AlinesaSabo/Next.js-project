'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps {
  disable?: boolean;
}

export default function Button({ disable, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 bg-gray-900 text-zinc-50 text-base text-center font-medium rounded',
        !disable && 'hover:bg-gray-800 active:bg-gray-950',
        disable && 'text-zinc-100'
      )}
    ></button>
  );
}
