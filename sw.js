   if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('sw.js').then(function(registration) {
       console.log('Service Worker مسجل بنجاح');
     }).catch(function(error) {
       console.error('فشل في تسجيل Service Worker:', error);
     });
    }
