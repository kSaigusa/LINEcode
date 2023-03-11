<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>商品注文フォーム</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.css" integrity="sha512-bYPO5jmStZ9WI2602V2zaivdAnbAhtfzmxnEGh9RwtlI00I9s8ulGe4oBa5XxiC6tCITJH/QG70jswBhbLkxPw==" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
</head>

<body>
    <form class="w-75 mx-auto">

        <p class="mt-3">以下に注文情報を入力して送信ボタンを押してください！</p>

        <p class="mt-3">受け取り日時</p>
        <div>
            <input class="form-control" name="date" maxlength="10">
        </div>

        <p class="mt-3">氏名</p>
        <div id="form-name">
            <input class="form-control w-100 mt-1" name="name" maxlength="10">
        </div>

        <p class="mt-3">電話番号(ハイフンなし)</p>
        <div id="form-phone-number">
            <input type="number" class="form-control w-100 mt-1" name="phone-number" maxlength="11">
        </div>

        <label class="btn btn-secondary">
            <input type="radio" name="number" value="1" autocomplete="off">1
        </label>

        <p class="mt-3">注文商品</p>
        <div>
            <select id="select" name="item" class="form-control w-100 mt-1" maxlength="10">
                <option value="">選択してください</option>
                <option value="0">プレミアムコーヒー</option>
                <option value="1">カフェオレ</option>
                <option value="2">ココア</option>
            </select>
        </div>

        <p class="mt-3">個数</p>
        <div id="form-items-number">
            <input class="form-control w-100 mt-1" name="items-number" maxlength="10">
        </div>

        <input type="submit" class="mt-4 btn btn-primary" value="送信">
    </form>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.min.js" integrity="sha512-AIOTidJAcHBH2G/oZv9viEGXRqDNmfdPVPYOYKGy3fti0xIplnlgMHUGfuNRzC6FkzIo0iIxgFnr9RikFxK+sw==" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2.1/sdk.js"></script>
    <script src="liff.js"></script>
    <script src="index.js"></script>
</body>

</html>


