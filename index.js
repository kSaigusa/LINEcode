$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="number"]:checked').val();
        var phone = $('input[name="phone-number"]').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);
        
        if(phone == "" || phone == null){
            var msg = `希望日：${date}\n人数：${number}\n氏名：${names}`;
        }else{
            var msg = `希望日：${date}\n人数：${number}\n氏名：${names}\n電話番号：${phone}`;
        }
        
        sendText(msg);

        return false;
    });
});

