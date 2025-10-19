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
    <form
      role="search"
      aria-label="Platform search"
      className="w-[160px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup className="w-full h-7 bg-black-5 rounded-md border border-transparent focus-within:border-black-10 duration-200 ease-in-out">
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <InputGroupInput
          id="search-input"
          ref={inputRef}
          placeholder="Search"
          type="text"
          role="searchbox"
          aria-label="Search platform"
          className="w-24 placeholder:text-black-20 text-sm font-normal leading-5 selection:bg-black-40 selection:text-black"
        />
        <InputGroupAddon>
          <Icons.search aria-hidden="true" className="w-4 h-4 size-full text-black-20" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText
            aria-hidden="true"
            className="text-black-20 text-sm font-normal leading-5"
          >
            ⌘/
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
