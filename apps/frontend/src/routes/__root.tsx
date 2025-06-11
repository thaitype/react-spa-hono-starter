import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import type { QueryClient } from '@tanstack/react-query'

import {
  ColorSchemeScript,
  MantineProvider,
} from "@mantine/core";
import { theme } from "~/theme";
import "~/theme/globals.css";

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
        <ColorSchemeScript />
        <Header />

        <body className="antialiased">
          <MantineProvider theme={theme}><Outlet /></MantineProvider>
        </body>
        
        <TanStackRouterDevtools />

        <TanStackQueryLayout />
    </>
  ),
})
