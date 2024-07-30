import sharedConfig from '@repo/config-tailwind/tailwind'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'content' | 'presets'> = {
    content: ['./src/app/**/*.tsx'],
    presets: [sharedConfig],
}

export default config
