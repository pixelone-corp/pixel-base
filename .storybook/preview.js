import 'bootstrap/dist/css/bootstrap.min.css'
import { PixelFactoryContext } from '../src/lib/pixel-factory/pixel-factory'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const withPixelFactoryContext = (Story, context = {}) => (
  <PixelFactoryContext value={context}>
    <Story />
  </PixelFactoryContext>
)
