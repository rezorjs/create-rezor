import { createContext } from 'rezor';

export const ThemeContext = createContext<'light' | 'dark'>('light');
