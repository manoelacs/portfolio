import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState('lightTheme');

  useEffect(() => {
    console.log('theme', theme);
    if (theme === 'darkTheme') {
      document.documentElement.classList.add('darkTheme');
      document.documentElement.classList.remove('lightTheme');
    } else {
      document.documentElement.classList.add('lightTheme');
      document.documentElement.classList.remove('darkTheme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'lightTheme' ? 'darkTheme' : 'lightTheme'
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
