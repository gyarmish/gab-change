import { FormattedNumber } from 'react-intl';

export const shortNumberFormat = number => {
  if (number < 1000) {
    return <FormattedNumber value={number} />;
  }

  return <span><FormattedNumber value={number / 1000} maximumFractionDigits={1} />K</span>;
};
