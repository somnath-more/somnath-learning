declare module 'react-typed' {
    import { Component } from 'react';
  
    interface TypedProps {
      strings: string[];
      typeSpeed?: number;
      backSpeed?: number;
      attr?: string;
      loop?: boolean;
      backDelay?: number;
      fadeOut?: boolean;
      fadeOutClass?: string;
      fadeOutDelay?: number;
      loopCount?: number;
      showCursor?: boolean;
      cursorChar?: string;
      className?: string;
    }
  
    export default class Typed extends Component<TypedProps> {}
  }
  