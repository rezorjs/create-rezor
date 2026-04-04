import { defineComponent, useContext, useState } from 'rezor';
import { ThemeContext } from '@/contexts/theme';

defineComponent(() => {
  const theme = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  const themeText = theme === 'light' ? '浅色' : '深色';

  const increment = () => {
    setCount(count + 1);
  };

  return { themeText, count, increment };
});
