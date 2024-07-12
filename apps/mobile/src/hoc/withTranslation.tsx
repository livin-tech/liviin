import React from 'react';
import { useTranslation as useI18n } from 'react-i18next';

export const withTranslation = (Component: React.ComponentType<any>) => {
  return (props: any) => {
    const { t } = useI18n();
    return <Component {...props} t={t} />;
  };
};

// TODO: use this
