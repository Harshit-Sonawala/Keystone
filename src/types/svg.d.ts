import 'react-native-svg';

declare module 'react-native-svg' {
  export interface SvgProps {
    className?: string;
  }
  export interface CircleProps {
    className?: string;
  }
  export interface RectProps {
    className?: string;
  }
  export interface PathProps {
    className?: string;
  }
  export interface GProps {
    className?: string;
  }
}
