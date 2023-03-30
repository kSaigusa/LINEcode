$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datetimepicker({
            step:15,
        });
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var name = $('input[name="name"]').val();
        var number = $('input[name="phone-number"]').val();
        var item = $("#select").children("option:selected");
        var itemText = item.text();
        var inumber = $('input[name="items-number"]').val();
        var straw = $('input[name="straw"]:checked').val();

        if (straw == null || straw == ""){
             var msg = `受け取り日時：${date}\n氏名：${name}\n電話番号：${number}\n注文商品：${itemText}\n個数：${inumber}`;
        }else{
             var msg = `受け取り日時：${date}\n氏名：${name}\n電話番号：${number}\n注文商品：${itemText}\n個数：${inumber}\nストロー：${straw}`;
        }
        sendText(msg);

        return false;
    });
});

