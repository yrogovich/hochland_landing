<?php
$to = 'work-biznesrost24@yandex.by'; //Почта получателя, через запятую можно указать сколько угодно адресов
$subject = 'Заявка с сайта '.$_SERVER['SERVER_NAME'] . ' ' . $_POST['form']; //Заголовок сообщения
$message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>';
        $message .= '<p>'.$_POST['form_name'].'</p>';
        $message .= '<p>'.$_POST['url'].'</p>';

        if(isset($_POST['name']) && $_POST['name'] !== '')
            $message .= '<h2>Личная информация</h2>';
            $message .= '<p>Имя: '.$_POST['name'].'</p>';
        if(isset($_POST['phone']) && $_POST['phone'] !== '')
            $message .= '<p>Телефон: '.$_POST['phone'].'</p>';
        if(isset($_POST['email']) && $_POST['email'] !== '')
            $message .= '<p>Email: '.$_POST['email'].'</p>';
        if(isset($_POST['message']) && $_POST['message'] !== '')
            $message .= '<p>Сообщение: '.$_POST['message'].'</p>';

$message .= '                 
            </body>
        </html>'; 
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: form@".$_SERVER['SERVER_NAME']."\r\n"; 
if(isset($_POST['name']) && $_POST['name'] !== '') {
    mail($to, $subject, $message, $headers); 
}
