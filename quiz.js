var readlinesync=require("readline-Sync");
var score=0;

var userName=readlinesync.question('enter your name please\n');
console.log("welcome "+userName+" to superheroes quiz!!");

function play(question,options,rightOption,rightAnswer){
    console.log(question);
    userAnswer=readlinesync.question(options);
    if((userAnswer===rightAnswer) || (userAnswer===rightOption) || (userAnswer===rightOption+") "+rightAnswer)){
        console.log('you are correct! you get a point.');
        score++;
    }
    else{
        console.log('you are wrong. you lose a point.');
        score--;
    }
    console.log('_________________________________');
}

var gamePlay=[
    {
        question:"who is the teacher of doctor strange? \n",
        options:"a) the marvelous one  b) the older one  c) the ancient one  d) the greater one\n",
        rightOption:"c",
        rightAnswer:"the ancient one"
    },
    {
        question:"who turns into hulk? \n",
        options:"a) banner  b) tony stark  c) steve rogers  d) hawk eye\n",
        rightOption:"a",
        rightAnswer:"banner"
    },
    {
        question:"Thor belongs to?\n",
        options:"a) earth  b) sun  c) asgard  d) supernova\n",
        rightOption:"c",
        rightAnswer:"asgard"
    },
    {
        question:"how many infinity stones are there in MCU \n",
        options:"a) 4  b) 6  c) 5  d) 7\n",
        rightOption:"b",
        rightAnswer:"6"
    },
    {
        question:"thanos gave up on gamora for which stone \n",
        options:"a) time stone  b) reality stone  c) power stone  d) soul stone\n",
        rightOption:"d",
        rightAnswer:"soul stone"
    }
];
// play(gamePlay[0].question,gamePlay[0].options,gamePlay[0].rightOption,gamePlay[0].rightAnswer);
for(var i=0;i<gamePlay.length;i++){
    play(gamePlay[i].question,gamePlay[i].options,gamePlay[i].rightOption,gamePlay[i].rightAnswer);
}

console.log(score);