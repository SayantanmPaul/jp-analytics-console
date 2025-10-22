'use client';

import { Icons } from '@/assets/icons';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group';
import { useCallback, useEffect, useRef, useState } from 'react';

interface SearchInputProps {
  initialValue: string;
  onSearchChange: (value: string) => void;
  shortcutKey?: string;
  containerClass?: string;
  maxWidth?: number;
}

const SearchBar = ({
  initialValue,
  onSearchChange,
  shortcutKey,
  containerClass,
  maxWidth,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    onSearchChange(searchValue);
  }, [searchValue, onSearchChange]);

  // focus search bar when ctrl/cmd + / is pressed
  useEffect(() => {
    if (!shortcutKey) return;

    const [mod, key] = shortcutKey.toLowerCase().split('+');
    const isCmd = mod === 'cmd' || mod === 'meta';
    const isCtrl = mod === 'ctrl';

    const handleKeyDown = (event: KeyboardEvent) => {
      const matchesShortcut =
        ((isCmd && event.metaKey) || (isCtrl && event.ctrlKey)) && event.key.toLowerCase() === key;

      if (matchesShortcut) {
        event.preventDefault();
        inputRef.current?.focus();
      }

      if (event.key === 'Escape' && document.activeElement === inputRef.current) {
        inputRef?.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcutKey]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  return (
    <form
      role="search"
      aria-label="Platform search"
      className="w-full"
      style={{ maxWidth: maxWidth ? maxWidth : 160 }}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        className={`w-full h-7 bg-black-5 rounded-md border border-transparent duration-200 ease-in-out ${containerClass}`}
      >
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <InputGroupInput
          id="search-input"
          ref={inputRef}
          placeholder="Search"
          type="text"
          role="searchbox"
          onChange={handleChange}
          aria-label="Search platform"
          className="w-24 placeholder:text-black-20 text-sm font-normal leading-5 selection:bg-black-40 selection:text-black-5"
        />
        <InputGroupAddon>
          <Icons.search aria-hidden="true" className="w-4 h-4 size-full text-black-20" />
        </InputGroupAddon>
        {shortcutKey && (
          <InputGroupAddon align="inline-end">
            <InputGroupText
              aria-hidden="true"
              className="text-black-20 text-sm font-normal leading-5 space-y-3"
            >
              {shortcutKey
                .replace('cmd', '⌘')
                .replace('ctrl', '⌃')
                .replace('alt', '⌥')
                .toUpperCase()}
            </InputGroupText>
          </InputGroupAddon>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchBar;
