import { defineComponent } from 'rezor';

defineComponent({
  properties: {
    count: Number,
  },
  render({ count }, context) {
    const double = count * 2;

    const increment = () => {
      context.triggerEvent('increment');
    };

    return { double, increment };
  },
});
