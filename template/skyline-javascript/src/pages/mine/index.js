import { defineComponent, useContext, useState } from 'rezor';
import { ThemeContext } from '@/contexts/theme';

defineComponent((_, context) => {
  const theme = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  const themeText = theme === 'light' ? '浅色' : '深色';

  const increment = () => {
    setCount(count + 1);
  };

  const offset = wx.worklet.shared({ x: 0, y: 0 });

  const pan = (event) => {
    'worklet';
    if (event.state === 0 || event.state === 1) return;
    if (event.state === 2) {
      offset.value = {
        x: offset.value.x + event.deltaX,
        y: offset.value.y + event.deltaY,
      };
      return;
    }
    offset.value = { x: 0, y: 0 };
  };

  context.applyAnimatedStyle('.logo', () => {
    'worklet';
    return { transform: `translate(${offset.value.x}px, ${offset.value.y}px)` };
  });

  return { themeText, count, increment, pan };
});
