import React from 'react'
import { theme } from '../theme'
import '../css/reset.css'
import './reset.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const AppDecorator = (storyFn) => {
  return <div className={theme}>{storyFn()}</div>
}
export const decorators = [AppDecorator]
