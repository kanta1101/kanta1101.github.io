function Janken(playerHandSelected)
{
    let playerHand = ['グー','チョキ','パー'];
    let opponentHand = ['グー','チョキ','パー'];
    let opponentHandRand = Math.floor(Math.random() * 3);

    if(playerHandSelected === opponentHandRand)
    {
        result = "あいこです。";
    }
    else if(playerHandSelected === 0 && opponentHandRand === 1)
    {
        result = "あなたの勝ち！";
    }
    else if(playerHandSelected === 1 && opponentHandRand === 2)
    {
        result = "あなたの勝ち！";
    }
    else if(playerHandSelected === 2 && opponentHandRand === 0)
    {
        result = "あなたの勝ち！";
    }
    else
    {
        result = "あなたの負け！";
    }

    document.getElementById("selected").innerHTML = "あなたは" + playerHand[playerHandSelected];
    document.getElementById("opponent").innerHTML = "相手は" + opponentHand[opponentHandRand];
    document.getElementById("jankenResult").innerHTML = result;  
}