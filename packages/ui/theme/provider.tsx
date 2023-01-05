import { theme, dark } from './index'
import type { ReactNode } from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <NextThemesProvider
      attribute='class'
      enableSystem={false}
      enableColorScheme={false}
      defaultTheme='light'
      disableTransitionOnChange
      storageKey='nguyenyou-ui-theme'
      value={{
        light: theme,
        dark,
      }}
    >
      {children}
    </NextThemesProvider>
  )
}
