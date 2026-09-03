import { createApp, useState, useGlobalContext, useThemeChange } from 'rezor';
import { ThemeContext } from './contexts/theme';

createApp(() => {
  const [theme, setTheme] = useState(wx.getAppBaseInfo().theme!);

  useGlobalContext(ThemeContext, theme);

  useThemeChange((result) => {
    setTheme(result.theme);
  });
});
