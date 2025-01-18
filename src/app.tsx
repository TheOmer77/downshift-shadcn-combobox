import { ComboboxDemo } from '@/components/demos/combobox';

const App = () => (
  <div className='mx-auto w-full max-w-md space-y-4 px-8 py-16 md:py-32'>
    <div className='space-y-1.5'>
      <h1 className='text-3xl font-bold tracking-tight'>Shadcn/ui Combobox</h1>
      <p className='text-sm text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4'>
        An autocomplete input and command palette with a list of suggestions.
        Built with <a href='https://ui.shadcn.com/'>shadcn/ui</a> and{' '}
        <a href='https://www.downshift-js.com/'>Downshift</a>&apos;s useCombobox
        hook.
      </p>
    </div>

    <ComboboxDemo />
  </div>
);

export default App;
