const questions = [
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    }]

    let scrore = 0;
    
    /*answer function*/ 
    function onClickAnswer(){
        
        console.log('bharat')
    }



    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        let questionImage= document.createElement('img');
        questionImage.setAttribute('src',questions[0].question);
        questionImage.setAttribute('width','100px');
        questionImage.setAttribute('height','100px');
        quizz.appendChild(questionImage);

        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');

        let optionA=document.createElement('button');
        optionA.innerHTML=questions[0].optionA;
        optionA.setAttribute('class','answer');
        optionA.addEventListener('click', onClickAnswer);

        let optionB=document.createElement('button');
        optionB.innerHTML=questions[0].optionB;
        optionB.setAttribute('class','answer');
        optionB.addEventListener('click', onClickAnswer);

        let optionC=document.createElement('button');
        optionC.innerHTML=questions[0].optionC;
        optionC.setAttribute('class','answer');
        optionC.addEventListener('click', onClickAnswer);

        let optionD=document.createElement('button');
        optionD.innerHTML=questions[0].optionD;
        optionD.setAttribute('class','answer');
        optionD.addEventListener('click', onClickAnswer);

        optionContainer.appendChild(optionA);
        optionContainer.appendChild(optionB);
        optionContainer.appendChild(optionC);
        optionContainer.appendChild(optionD);

        quizz.appendChild(optionContainer);

        }

    buildQuizze();

    