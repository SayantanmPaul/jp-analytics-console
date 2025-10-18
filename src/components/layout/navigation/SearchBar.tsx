'use client';

import { Icons } from '@/assets/icons';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import { useEffect, useRef } from 'react';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  // focus search bar when ctrl/cmd + / is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === '/') {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape') {
        if (document.activeElement === inputRef.current) {
          inputRef?.current?.blur();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <InputGroup className="w-[160px] h-7 bg-black-5 rounded-md border border-transparent focus-within:border-black-10 duration-200 ease-in-out">
      <InputGroupInput
        ref={inputRef}
        placeholder="Search"
        className="w-24 placeholder:text-black-20 text-sm font-normal leading-5 selection:bg-black-40 selection:text-black"
      />
      <InputGroupAddon>
        <Icons.search className="w-4 h-4  size-full text-black-20" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText className="text-black-20 text-sm font-normal leading-5">⌘/</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchBar;
