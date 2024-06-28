import { ComboboxDemo } from './components/demos/combobox';

const App = () => (
  <div className='mx-auto w-full max-w-md space-y-4 px-8 py-16 md:py-32'>
    <div className='space-y-1.5'>
      <h1 className='text-3xl font-bold tracking-tight'>Shadcn/ui Combobox</h1>
      <p className='text-sm text-muted-foreground'>
        Autocomplete input and command palette with a list of suggestions.
      </p>
    </div>

    <ComboboxDemo />
  </div>
);

export default App;
