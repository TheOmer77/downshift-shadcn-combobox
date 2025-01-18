import { Button } from '@/components/ui/button';
import { ComboboxDemo } from '@/components/demos/combobox';

const App = () => (
  <div className='mx-auto w-full max-w-md space-y-8 px-8 py-16 md:py-32'>
    <div>
      <h1 className='text-3xl font-bold tracking-tight'>Shadcn/ui Combobox</h1>
      <p className='text-sm text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4'>
        An autocomplete input and command palette with a list of suggestions.
        Built with <a href='https://ui.shadcn.com/'>shadcn/ui</a> and{' '}
        <a href='https://www.downshift-js.com/'>Downshift</a>&apos;s useCombobox
        hook.
      </p>
      <div className='mt-4 flex flex-row flex-wrap gap-2'>
        <Button variant='default' asChild>
          <a href='https://github.com/TheOmer77/downshift-shadcn-combobox?tab=readme-ov-file#install-in-your-app'>
            Install
          </a>
        </Button>
        <Button variant='outline' asChild>
          <a href='https://github.com/TheOmer77/downshift-shadcn-combobox'>
            GitHub
          </a>
        </Button>
      </div>
    </div>

    <ComboboxDemo />
  </div>
);

export default App;
