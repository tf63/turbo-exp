import sharedConfig from '@repo/config-tailwind/tailwind'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets' | 'content'> = {
    content: ['./src/**/*.tsx'],
    prefix: 'ui-',
    presets: [sharedConfig],
}

export default config
