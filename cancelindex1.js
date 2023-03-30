$(function () {

    // 送信
    $('form').submit(function () {
        var result = $('input[name="result"]:checked').val();

        if (result == "はい"){
            var msg = `キャンセルする`;
        }else{
            var msg = `キャンセルしない`;
        }
        
        sendText(msg);

        return false;
    });
});
