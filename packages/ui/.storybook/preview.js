import React from 'react'
import { dark } from '../theme'
import '../css/reset.css'

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
  return <div className={dark}>{storyFn()}</div>
}
export const decorators = [AppDecorator]
