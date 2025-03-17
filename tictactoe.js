// Kaveesh Dinesh, PD. 8
var turn=0
// this function makes the text such as x or o appear on the button and then passes the turn
 function clicked(value){
    var objId = "button"+value+"text";
    if(objId!="X" || objId!="O")
        if(turn%2==0){
            document.getElementById(objId).innerText="X";
            turn=turn+1
            document.getElementById("sq"+value).disabled = true
            }
        else{
            document.getElementById(objId).innerText="O";
            turn=turn+1
            document.getElementById("sq"+value).disabled = true
        }
    winCondition();
}
// this function clears all the values in the buttons and resets the board
function allClear(){
    var allClearValue=1;
    var buttonUsable=0;
    while(allClearValue!='10'){
        document.getElementById('button'+allClearValue+'text').innerText='';
        allClearValue+=1;
        buttonUsable+=1
        document.getElementById("sq"+buttonUsable).disabled = false;
    }
    document.getElementById('winText').innerText=''
}
//it checks for all possible win conditions
function winCondition(){
    var noEditAfterWin=0;
    /* 123 combo */
    if(document.getElementById('button1text').textContent==document.getElementById('button2text').textContent &&
    document.getElementById('button1text').textContent==document.getElementById('button3text').textContent
    && document.getElementById('button1text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button1text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /* 456 combo */
    if(document.getElementById('button4text').textContent==document.getElementById('button5text').textContent &&
    document.getElementById('button4text').textContent==document.getElementById('button6text').textContent
    && document.getElementById('button4text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button4text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /* 789 combo */
    if(document.getElementById('button7text').textContent==document.getElementById('button8text').textContent &&
    document.getElementById('button7text').textContent==document.getElementById('button9text').textContent
    && document.getElementById('button7text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button7text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /*147 combo*/
    if(document.getElementById('button1text').textContent==document.getElementById('button4text').textContent &&
    document.getElementById('button1text').textContent==document.getElementById('button7text').textContent
    && document.getElementById('button1text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button1text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /*258 combo*/
    if(document.getElementById('button2text').textContent==document.getElementById('button5text').textContent &&
    document.getElementById('button2text').textContent==document.getElementById('button8text').textContent
    && document.getElementById('button2text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button2text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /*369 combo*/
    if(document.getElementById('button3text').textContent==document.getElementById('button6text').textContent &&
    document.getElementById('button3text').textContent==document.getElementById('button9text').textContent
    && document.getElementById('button3text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button3text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /*159 combo*/
    if(document.getElementById('button1text').textContent==document.getElementById('button5text').textContent &&
    document.getElementById('button1text').textContent==document.getElementById('button9text').textContent
    && document.getElementById('button1text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button1text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /*357 combo*/
    if(document.getElementById('button3text').textContent==document.getElementById('button5text').textContent &&
    document.getElementById('button3text').textContent==document.getElementById('button7text').textContent
    && document.getElementById('button3text').textContent!=''){
        document.getElementById("winText").textContent=document.getElementById('button3text').textContent+' wins';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
    /* Draw */
    if(document.getElementById('button1text').textContent!='' &&
    document.getElementById('button2text').textContent!=''  &&
    document.getElementById('button3text').textContent!=''  &&
    document.getElementById('button4text').textContent!=''  &&
    document.getElementById('button5text').textContent!=''  &&
    document.getElementById('button6text').textContent!=''  &&
    document.getElementById('button7text').textContent!=''  &&
    document.getElementById('button8text').textContent!=''  &&
    document.getElementById('button9text').textContent!='' ){
        document.getElementById("winText").innerText='Draw';
        while(noEditAfterWin!='10'){
            noEditAfterWin+=1;
            document.getElementById("sq"+noEditAfterWin).disabled= true;
        }
    }
}
