const questions = [
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "11 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "12 days",
        optionB: " days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "13 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    }
]

    let scrore = 0;
    let currentQuestion = 0;
    let isClick = false;
    
    /*answer function*/ 
    function onClickAnswer(evt){
        if(!isClick) {
            if(evt.currentTarget.correctOption === questions[currentQuestion].correctOption) {
                scrore = scrore + 1;
                evt.currentTarget.style.backgroundColor = 'green';
                let scoreElement = document.getElementById('score');
                scoreElement.innerHTML = scrore;
                isClick = true;
            } else {
                evt.currentTarget.style.backgroundColor = 'red';
            }
        }
       
    }



    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        console.log(quizz)
        let questionImage= document.createElement('img');
        questionImage.setAttribute('src',questions[currentQuestion].question);
        questionImage.setAttribute('width','100px');
        questionImage.setAttribute('height','100px');
        quizz.appendChild(questionImage);

        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');

        let optionA=document.createElement('button');
        optionA.innerHTML=questions[currentQuestion].optionA;
        optionA.setAttribute('class','answer');
        optionA.addEventListener('click', onClickAnswer);

        let optionB=document.createElement('button');
        optionB.innerHTML=questions[currentQuestion].optionB;
        optionB.setAttribute('class','answer');
        optionB.addEventListener('click', onClickAnswer);

        let optionC=document.createElement('button');
        optionC.innerHTML=questions[currentQuestion].optionC;
        optionC.setAttribute('class','answer');
        optionC.addEventListener('click', onClickAnswer);

        let optionD=document.createElement('button');
        optionD.innerHTML=questions[currentQuestion].optionD;
        optionD.setAttribute('class','answer');
        optionD.correctOption='optionD';
        optionD.addEventListener('click', onClickAnswer);

        optionContainer.appendChild(optionA);
        optionContainer.appendChild(optionB);
        optionContainer.appendChild(optionC);
        optionContainer.appendChild(optionD);

        quizz.appendChild(optionContainer);

        }

    buildQuizze();

    function onNextQuestion() {
        currentQuestion = currentQuestion + 1;
        let questionNumber = document.getElementById('question-number');
        questionNumber.innerHTML = 'question: ' + currentQuestion;
        isClick = false;
        buildQuizze();
    }
    let nextButton = document.getElementById('next');
    nextButton.addEventListener('click', onNextQuestion);

    