import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import { ColorSchemesSwitcher } from '~/components/color-schemes-switcher'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <img
          src={logo}
          className="h-[40vmin] pointer-events-none animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p className='text-gray-900 dark:text-gray-50 '>
          Edit <code>src/routes/index.tsx</code> and save to reload.
        </p>
        <a
          className="text-gray-900 dark:text-gray-50 hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-gray-900 dark:text-gray-50 hover:underline"
          href="https://tanstack.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TanStack
        </a>
        <ColorSchemesSwitcher />
      </header>
    </div>
  )
}
