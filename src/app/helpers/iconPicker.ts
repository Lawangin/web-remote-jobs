import { EntryChartIcon } from '../components/Icons/EntryChartIcon';
import { InterChartIcon } from '../components/Icons/InterChartIcon';
import { AdvChartIcon } from '../components/Icons/AdvChartIcon';
import { EmptyChartIcon } from '../components/Icons/EmptyChartIcon';

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
