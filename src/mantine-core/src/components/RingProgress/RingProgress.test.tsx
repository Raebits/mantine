import { tests } from '@mantine/tests';
import { RingProgress, RingProgressProps, RingProgressStylesNames } from './RingProgress';

const defaultProps: RingProgressProps = {
  size: 100,
  label: 'test',
  sections: [{ value: 20, color: 'orange' }],
};

describe('@mantine/core/RingProgress', () => {
  tests.itSupportsSystemProps<RingProgressProps, RingProgressStylesNames>({
    component: RingProgress,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/RingProgress',
    stylesApiSelectors: ['root', 'svg', 'curve', 'label'],
  });
});
