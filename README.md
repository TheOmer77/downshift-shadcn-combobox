# Shadcn/ui + Downshift Combobox

An autocomplete input and command palette with a list of suggestions. Built with [shadcn/ui](https://ui.shadcn.com/) and [Downshift](https://www.downshift-js.com/)'s useCombobox hook.

## Install in your app

Install using the `shadcn` CLI:

```sh
pnpm dlx shadcn@latest add https://downshift-shadcn-combobox.vercel.app/r/downshift-combobox.json
```

### Usage

```tsx
<Combobox>
  <ComboboxInput placeholder='Pick an item...' />
  <ComboboxContent>
    <ComboboxItem label='One' value='one' />
    <ComboboxItem label='Two' value='two' />
    <ComboboxItem label='Three' value='three' />
    <ComboboxEmpty>No results.</ComboboxEmpty>
  </ComboboxContent>
</Combobox>
```

For a more advanced example, check the [demo app code](https://github.com/TheOmer77/downshift-shadcn-combobox/blob/main/src/components/demos/combobox.tsx).

## Running the demo app

To run the development server:

```bash
pnpm dev
```
