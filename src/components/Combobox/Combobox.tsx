import {
  useCallback,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { useCombobox, type UseComboboxProps } from 'downshift';

import { Popover } from '@/components/ui/popover';

import { ComboboxContext } from './context';
import type { ComboboxItemBase } from './types';

const { stateChangeTypes } = useCombobox;

const defaultFilter = (inputValue: string, items: ComboboxItemBase[]) =>
  items.filter(
    (item) =>
      !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase())
  );

export type ComboboxProps = PropsWithChildren<{
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  filterItems?: (
    inputValue: string,
    items: ComboboxItemBase[]
  ) => ComboboxItemBase[];
}>;

export const ComboBox = ({
  value,
  onValueChange,
  filterItems = defaultFilter,
  children,
}: ComboboxProps) => {
  const [items, setItems] = useState<ComboboxItemBase[]>([]),
    [filteredItems, setFilteredItems] = useState<ComboboxItemBase[]>(items);
  const [openedOnce, setOpenedOnce] = useState(false);

  const stateReducer = useCallback<
    NonNullable<UseComboboxProps<ComboboxItemBase>['stateReducer']>
  >(
    (prev, { type, changes }) => {
      switch (type) {
        case stateChangeTypes.InputChange: {
          const filteredEnabledItems = filterItems(
            changes.inputValue || prev.inputValue,
            items
          ).filter(({ disabled }) => !disabled);
          const highlightedIndex =
            typeof changes.highlightedIndex === 'number'
              ? changes.highlightedIndex
              : prev.highlightedIndex;

          return {
            ...changes,
            highlightedIndex:
              changes.inputValue &&
              filteredEnabledItems.length > 0 &&
              highlightedIndex < 0
                ? 0
                : changes.highlightedIndex,
          };
        }

        case stateChangeTypes.InputBlur:
        case stateChangeTypes.InputClick:
        case stateChangeTypes.InputKeyDownEnter:
        case stateChangeTypes.InputKeyDownEscape: {
          if (changes.isOpen || !prev.isOpen) return changes;
          if (!prev.inputValue && prev.highlightedIndex < 0)
            return { ...changes, inputValue: '', selectedItem: null };

          const inputValue =
            changes.selectedItem?.label || prev.selectedItem?.label || '';
          return { ...changes, inputValue };
        }

        default:
          return changes;
      }
    },
    [filterItems, items]
  );

  const {
    getInputProps,
    getItemProps,
    getMenuProps,
    highlightedIndex,
    inputValue,
    isOpen,
    selectedItem,
    selectItem,
    setInputValue,
  } = useCombobox({
    items: filteredItems,
    itemToString: (item) => (item ? item.label : ''),
    isItemDisabled: (item) => item.disabled ?? false,

    selectedItem:
      typeof value !== 'undefined'
        ? items.find((item) => item.value === value) || null
        : undefined,
    onSelectedItemChange: ({ selectedItem }) =>
      onValueChange?.(selectedItem?.value || null),

    stateReducer,
  });

  useEffect(() => {
    if (isOpen && !openedOnce) setOpenedOnce(isOpen);
  }, [isOpen, openedOnce]);

  useEffect(() => {
    setFilteredItems(filterItems(inputValue, items));
  }, [filterItems, inputValue, items]);

  return (
    <ComboboxContext.Provider
      value={{
        filteredItems,
        getInputProps,
        getItemProps,
        getMenuProps,
        highlightedIndex,
        inputValue,
        isOpen,
        items,
        onItemsChange: setItems,
        onValueChange,
        openedOnce,
        selectedItem,
        selectItem,
        setInputValue,
      }}
    >
      <Popover open={isOpen}>{children}</Popover>
    </ComboboxContext.Provider>
  );
};
