function sendLineNotification(message) {
  var token = 'アクセストークン'; // LINE Notifyのアクセストークンを入力してください
  var options = {
    'method': 'post',
    'payload': 'message=' + message,
    'headers': {
      'Authorization': 'Bearer ' + token,
    }
  };
  var response = UrlFetchApp.fetch('https://notify-api.line.me/api/notify', options);
  Logger.log(response.getContentText());
}
