import 'styled-components';
import { NeumorphismTheme } from 'themes/Theme';

declare module 'styled-components' {
  export interface DefaultTheme extends NeumorphismTheme {}
}
