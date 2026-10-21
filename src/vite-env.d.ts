/// <reference types="vite/client" />
import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        'auto-rotate'?: boolean;
        'camera-controls'?: boolean;
        ar?: boolean;
        'shadow-intensity'?: string;
        'interaction-prompt'?: string;
        bounds?: string;
        'field-of-view'?: string;
      };
    }
  }
}
