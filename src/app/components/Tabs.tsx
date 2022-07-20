import React from 'react';
import { TabsProps, Tabs as LGTabs } from '@leafygreen-ui/tabs';
import { css, cx } from '@leafygreen-ui/emotion';

const tabStyles = css``;

const Tabs = ({ className, ...rest }: TabsProps) => {
  return <LGTabs className={cx(className, tabStyles)} {...rest} />;
};

export default Tabs;
