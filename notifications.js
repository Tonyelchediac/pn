  document.getElementById('button').addEventListener('click', function() {
     Notification.requestPermission().then(function(permission) {
       if (permission === 'granted'){
        navigator.serviceWorker.ready.then(function(registration) {
           registration.showNotification('Hello World', {
             body: 'Hello from Tony El Chediac !',
             icon: 'lebanese cedar.png'
           });
         });
       } else {
         console.log('تم رفض إذن الإشعارات');
       }
     });
   });