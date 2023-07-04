import { EntryChartIcon } from '../app/components/Icons/EntryChartIcon';
import { InterChartIcon } from '../app/components/Icons/InterChartIcon';
import { AdvChartIcon } from '../app/components/Icons/AdvChartIcon';
import { EmptyChartIcon } from '../app/components/Icons/EmptyChartIcon';

export const iconPicker = (Level: string) => {
  if (Level === 'Entry level') {
    return EntryChartIcon;
  }
  if (Level === 'Mid-Senior level') {
    return AdvChartIcon;
  }
  if (Level === 'Associate') {
    return InterChartIcon;
  }
  return EmptyChartIcon;
};
