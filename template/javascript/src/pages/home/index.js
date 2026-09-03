import { defineComponent, useGlobalContext, useState } from 'rezor';
import { ThemeContext } from '@/contexts/theme';

defineComponent(() => {
  const theme = useGlobalContext(ThemeContext);
  const [count, setCount] = useState(0);

  const themeText = theme === 'light' ? '浅色' : '深色';

  const increment = () => {
    setCount(count + 1);
  };

  return { themeText, count, increment };
});
