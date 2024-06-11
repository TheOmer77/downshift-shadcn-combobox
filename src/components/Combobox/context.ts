import { createContext, useContext } from 'react';
import type { UseComboboxReturnValue } from 'downshift';

import type { ComboboxItemBase } from './types';

export type ComboboxContextValue = Partial<
  Pick<
    UseComboboxReturnValue<ComboboxItemBase>,
    | 'getInputProps'
    | 'getItemProps'
    | 'getMenuProps'
    | 'highlightedIndex'
    | 'inputValue'
    | 'isOpen'
    | 'selectedItem'
    | 'selectItem'
    | 'setInputValue'
  > & {
    filteredItems: ComboboxItemBase[];
    items: ComboboxItemBase[];
    onItemsChange: (items: ComboboxItemBase[]) => void;
    onValueChange: (value: string | null) => void;
    openedOnce: boolean;
  }
>;

export const ComboboxContext = createContext<ComboboxContextValue>({});

export const useComboboxContext = () => useContext(ComboboxContext);
