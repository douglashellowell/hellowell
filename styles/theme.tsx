import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';
import codeThemes from './codeThemes';

export const GlobalStyle = createGlobalStyle`
  * {
    transition: all 0.3s;
  }

  body {
      background-color: ${({ theme }: { theme: ThemeStyles }) => theme.primary};
  }

  p {
    color: ${({ theme }: { theme: ThemeStyles }) => theme.fontColour};
    line-height: 1.5;

  }

  a{
    color: ${({ theme }: { theme: ThemeStyles }) => theme.linkUnvisited}
  }

  a:visited{
    color: ${({ theme }: { theme: ThemeStyles }) => theme.linkVisited}
  }

  ${({ theme }: { theme: ThemeStyles }) => theme.codeTheme}
`;

export const ThemeToggleContext = React.createContext(() => {}); // needs default??

export type ThemeStyles = {
  primary: string;
  secondary: string;
  fontColour: string;
  linkUnvisited: string;
  linkVisited: string;
  primaryCTA: string;
  secondaryCTA: string;
  codeTheme: string;
};

export type ThemeIndex = {
  [ThemeMode.darkMode]: ThemeStyles;
  [ThemeMode.lightMode]: ThemeStyles;
};

export enum ThemeMode {
  lightMode,
  darkMode,
}

const theme: ThemeIndex = {
  [ThemeMode.darkMode]: {
    primary: '#303036',
    secondary: 'hsl(18, 100%, 72%)',
    fontColour: '#fffaff',
    linkUnvisited: 'rgb(152, 102, 27)',
    linkVisited: lighten(0.5, 'rgb(152, 73, 27)'), // figure out a neat way to make these variables
    primaryCTA: 'red',
    secondaryCTA: lighten(0.3, 'red'),
    codeTheme: codeThemes.darkMode,
  },
  [ThemeMode.lightMode]: {
    primary: '#fffaff',
    secondary: 'hsl(55, 90%, 81%)',
    fontColour: '#303036',
    linkUnvisited: 'hsl(173, 70%, 35%)',
    linkVisited: lighten(0.5, 'hsl(173, 70%, 35%)'), // figure out a neat way to make these variables
    primaryCTA: 'blue',
    secondaryCTA: lighten(0.3, 'blue'),
    codeTheme: codeThemes.lightMode,
  },
};

const StyledThemeProvider: React.FC = ({ children }) => {
  const [selectedTheme, setSetSelectedTheme] = useState(ThemeMode.lightMode);

  const toggleTheme = () => {
    setSetSelectedTheme((currentTheme) => {
      return currentTheme === ThemeMode.lightMode
        ? ThemeMode.darkMode
        : ThemeMode.lightMode;
    });
  };

  return (
    <ThemeToggleContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme[selectedTheme]}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default StyledThemeProvider;
