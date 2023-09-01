<!DOCTYPE html>

<html>

<head>
    <title>{{$title}}</title>
</head>

<body>
    <p>
        {{$statement}} <strong>{{$date}}.</strong>
        <br><br>
    </p>
    <p>
        @foreach($users as $user)
        {{$user->first_name}} {{$user->last_name}}.<br>
        @endforeach
        <br>
    </p>
    <p>
        {{$footer}}<br>
        v0+
    </p>
</body>

</html>