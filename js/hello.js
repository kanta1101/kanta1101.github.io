function hello(language)
{
    // 表示する文字列を格納する変数
    let message ='';

    // 日本語の場合は1,英語は2,中国語は3,韓国語は4,ドイツ語は5,フランス語は6,スペイン語は7,イタリア語は8
    if(language===1)
    {
        message ='こんにちは';
    }
    else if(language===2)
    {
        message ='HELLO';
    }
    else if(language===3)
    {
        message='你好';
    }
    else if(language===4)
    {
        message ='안녕하세요';
    }
    else if(language===5)
    {
        message ='Guten tag'
    }
    else if(language===6)
    {
        message ='bonjour'
    }
    else if(language===7)
    {
        message ='Hola'
    }
    else if(language===8)
    {
        message ='Buon giorno'
    }
    else
    {
        message ='想定されていない引数です'
    }

    console.log(message);
    //書き換えたい
    const hogehoge = document.querySelector('#hello');

    hogehoge.textContent = message;
}