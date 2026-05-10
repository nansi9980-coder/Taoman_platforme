import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from "../config";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/theme/active`)
      .then(res => res.json())
      .then(theme => {
        if (theme && theme.palette) {
          const p = theme.palette;
          const root = document.documentElement;
          
          if (p.primary) root.style.setProperty('--color-primary', p.primary);
          if (p.primaryContainer) root.style.setProperty('--color-primary-container', p.primaryContainer);
          if (p.onPrimary) root.style.setProperty('--color-on-primary', p.onPrimary);
          if (p.onPrimaryContainer) root.style.setProperty('--color-on-primary-container', p.onPrimaryContainer);
          
          if (p.secondary) root.style.setProperty('--color-secondary', p.secondary);
          if (p.secondaryContainer) root.style.setProperty('--color-secondary-container', p.secondaryContainer);
          if (p.onSecondary) root.style.setProperty('--color-on-secondary', p.onSecondary);
          if (p.onSecondaryContainer) root.style.setProperty('--color-on-secondary-container', p.onSecondaryContainer);

          if (p.tertiary) root.style.setProperty('--color-tertiary', p.tertiary);
          if (p.tertiaryContainer) root.style.setProperty('--color-tertiary-container', p.tertiaryContainer);
          if (p.onTertiary) root.style.setProperty('--color-on-tertiary', p.onTertiary);
          if (p.onTertiaryContainer) root.style.setProperty('--color-on-tertiary-container', p.onTertiaryContainer);

          if (p.surface) root.style.setProperty('--color-surface', p.surface);
          if (p.surfaceContainerLow) root.style.setProperty('--color-surface-container-low', p.surfaceContainerLow);
          if (p.surfaceContainer) root.style.setProperty('--color-surface-container', p.surfaceContainer);
          if (p.onSurface) root.style.setProperty('--color-on-surface', p.onSurface);
          if (p.onSurfaceVariant) root.style.setProperty('--color-on-surface-variant', p.onSurfaceVariant);
        }
      })
      .catch(err => console.error("Error loading theme:", err))
      .finally(() => setThemeLoaded(true));
  }, []);

  return (
    <ThemeContext.Provider value={{ themeLoaded }}>
      <div className={`transition-opacity duration-500 ${themeLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
