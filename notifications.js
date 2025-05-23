  document.getElementById('button').addEventListener('click', function() {
     Notification.requestPermission().then(function(permission) {
       if (permission === 'granted'){
        navigator.serviceWorker.ready.then(function(registration) {
           registration.showNotification('عنوان الإشعار', {
             body: 'محتوى الإشعار',
             icon: '/path/to/icon.png'
           });
         });
       } else {
         console.log('تم رفض إذن الإشعارات');
       }
     });
   });