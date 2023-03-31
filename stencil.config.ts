import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'hub-aibot',
  sourceMap: true,
  plugins: [
    sass()
  ],
  outputTargets: [
    { 
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "./**/*.html",
        },
        {
          src: "./**/*.json", dest: 'data/'
        }
      ]
    },
  ],
};
