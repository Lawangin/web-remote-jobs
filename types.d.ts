/* eslint-disable no-unused-vars */

export interface Window {
  // add your own typings here
  gtag(
    type: 'config',
    googleAnalyticsId: string,
    config: { page_path: string }
  ): void;
  gtag(
    type: 'event',
    eventAction: string,
    fieldObject: {
      event_label: string;
      event_category: string;
      value?: string;
    }
  ): void;
}
