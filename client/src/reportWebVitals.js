// reportWebVitals.js — Custom Web Vitals Tracker for AI Chat App

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => {
        console.log(`[AI Chat App] CLS (Cumulative Layout Shift): ${metric.value}`);
        onPerfEntry(metric);
      });

      getFID((metric) => {
        console.log(`[AI Chat App] FID (First Input Delay): ${metric.value}`);
        onPerfEntry(metric);
      });

      getFCP((metric) => {
        console.log(`[AI Chat App] FCP (First Contentful Paint): ${metric.value}`);
        onPerfEntry(metric);
      });

      getLCP((metric) => {
        console.log(`[AI Chat App] LCP (Largest Contentful Paint): ${metric.value}`);
        onPerfEntry(metric);
      });

      getTTFB((metric) => {
        console.log(`[AI Chat App] TTFB (Time to First Byte): ${metric.value}`);
        onPerfEntry(metric);
      });
    });
  }
};

export default reportWebVitals;
