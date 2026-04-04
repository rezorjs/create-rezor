import { createApp, useState, useContext, useThemeChange } from 'rezor';
import { ThemeContext } from './contexts/theme';

createApp(() => {
  const [theme, setTheme] = useState(wx.getAppBaseInfo().theme!);

  useContext(ThemeContext, theme);

  useThemeChange((result) => {
    setTheme(result.theme);
  });
});
