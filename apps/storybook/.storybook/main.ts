import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
    stories: ['../../../apps/web/src/**/*.stories.*', '../../../packages/ui/src/**/*.stories.*'],
    addons: [
        '@chromatic-com/storybook',
        '@storybook/addon-essentials',
        '@storybook/addon-links',
        '@storybook/addon-interactions',
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-console',
        '@whitespace/storybook-addon-html',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
}

export default config
