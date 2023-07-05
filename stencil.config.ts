import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'hub-aibot',
  sourceMap: true,
  plugins: [
    
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
          src: "./data/*",
        },
        {
          src: "./**/*.json", dest: 'data/'
        }
      ]
    },
  ],
};
