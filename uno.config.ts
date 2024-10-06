import { defineConfig, presetAttributify, presetUno } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local';
import presetIcons from '@unocss/preset-icons/browser';

export default defineConfig({
  theme: {
    colors: {
      fff: '#fff',
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsl(var(--hue, 217) 78% 51%)', // class="bg-brand-primary"
        DEFAULT: '#942192', // class="bg-brand"
      },
    },
  },
  shortcuts: [
    { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
      processors: createLocalFontProcessor(),
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
});
