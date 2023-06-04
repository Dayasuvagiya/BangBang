const questions = [
    {
        question: "../BangBang/assets/images/srawberry.png",
        answers : [
            "Die Strawberry",
            "Die Erdbeere",
            "Die Kirsche",
            "Der Apfel"
        ],
        correctOption: 'Die Erdbeere',
    },
    {
        question: "../BangBang/assets/images/bicycle.png",
        answers : [
            "Das Fahrrad", 
            "Das Auto",
            "Der Bus",
            "Das Motorrad"
        ],
        correctOption: "Das Fahrrad"
    },
    {
        question: "../BangBang/assets/images/freanchfries.png",
        answers : [
            "Die Kartoffel", 
            "Der Burger",
            "Die Gurke",
            "Die Pommes"
        ],
        correctOption: "Die Pommes"
    },
    {
        question: "../BangBang/assets/images/bag.png",
        answers : [
            "Der Geldbeutel", 
            "Der Koffer",
            "Die Tasche",
            "Das Gepäck"
        ],
        correctOption: "Die Tasche"
    },
    {
        question: "../BangBang/assets/images/cake.png",
        answers : [
            "Der Käse", 
            "Die Schokolade",
            "Der Kuchen",
            "Die Butter"
        ],
        correctOption: "Der Kuchen"
    },
    {
        question: "../BangBang/assets/images/dog.png",
        answers : [
            "Der Hund", 
            "Das Reh",
            "Das Schwein",
            "Die Katze"
        ],
        correctOption: "Der Hund"
    },
    {
        question: "../BangBang/assets/images/flower.png",
        answers : [
            "Das Gemüse", 
            "Das Obst",
            "Die Pflanze",
            "Die Blumen"
        ],
        correctOption: "Die Blumen"
    },
    {
        question: "../BangBang/assets/images/lemon.png",
        answers : [
            "Die Gurke", 
            "Die Zitrone",
            "Die Zucchini",
            "Der Mais"
        ],
        correctOption: "Die Zitrone"
    },
    {
        question: "../BangBang/assets/images/plant.png",
        answers : [
            "Die Pflanze", 
            "Der Baum",
            "Der Topf",
            "Die Blume"
        ],
        correctOption: "Die Pflanze"
    },
    {
        question: "../BangBang/assets/images/TV.png",
        answers : [
            "Das Fenster", 
            "Der Schrank",
            "Der Schrank",
            "Der Fernseher"
        ],
        correctOption: "Der Fernseher"
    } 

]

    let scrore = 0;
    let currentQuestion = 1;
    let isClick = false;
    

    /*answer function*/ 
    function onClickAnswer(evt){
        if(!isClick) {
            if(evt.currentTarget.correctOption === questions[currentQuestion - 1].correctOption) {
                scrore = scrore + 1;
                evt.currentTarget.style.backgroundColor = 'green';
                let scoreElement = document.getElementById('score');
                scoreElement.innerHTML = scrore;
            } else {

                evt.currentTarget.style.backgroundColor = 'red';
            }
            isClick = true;
        }
    }



    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        console.log(quizz)
        let questionImage= document.createElement('img');
        questionImage.setAttribute('src',questions[currentQuestion-1].question);
        questionImage.setAttribute('width','200px');
        questionImage.setAttribute('height','150px');
        quizz.appendChild(questionImage);

        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');

        let options = questions[currentQuestion - 1].answers;
        let correctAnswer = questions[currentQuestion - 1].correctOption;
        console.log({ options})

        for(let i = 0; i < options.length; i++) {
            let option=document.createElement('button');
            option.innerHTML= options[i];
            option.setAttribute('class','answer');
            option.addEventListener('click', onClickAnswer);
            if(options[i] === correctAnswer) {
                option.correctOption=correctAnswer;
            }
            optionContainer.appendChild(option);
        }

        /* let optionA=document.createElement('button');
        optionA.innerHTML=questions[currentQuestion-1].optionA;
        optionA.setAttribute('class','answer');
        optionA.addEventListener('click', onClickAnswer);

        let optionB=document.createElement('button');
        optionB.innerHTML=questions[currentQuestion-1].optionB;
        optionB.setAttribute('class','answer');
        optionB.addEventListener('click', onClickAnswer);

        let optionC=document.createElement('button');
        optionC.innerHTML=questions[currentQuestion-1].optionC;
        optionC.setAttribute('class','answer');
        optionC.addEventListener('click', onClickAnswer);

        let optionD=document.createElement('button');
        optionD.innerHTML=questions[currentQuestion-1].optionD;
        optionD.setAttribute('class','answer');
        optionD.correctOption='optionD';
        optionD.addEventListener('click', onClickAnswer);

        optionContainer.appendChild(optionA);
        optionContainer.appendChild(optionB);
        optionContainer.appendChild(optionC);
        optionContainer.appendChild(optionD); */

        quizz.appendChild(optionContainer);

        }

    buildQuizze();

    function initGame() {
        scrore = 0;
        currentQuestion = 1;
        isClick = false;
    }

    function onNextQuestion() {
        if(questions.length === currentQuestion) {
            document.getElementsByClassName('mainDiv')[0].innerHTML = `
            <h2 class="score-info"> Your total score is ${scrore} / ${questions.length}</h2>
            <button  id="home" ><a class="home-page" href="index.html">Play again</a></button>
            `
        }

        currentQuestion = currentQuestion + 1;
        let questionNumber = document.getElementById('question-number');
        questionNumber.innerHTML = 'question: ' + currentQuestion;
        isClick = false;
        const quizzContainer = document.getElementsByClassName('quizz-question')[0];
        quizzContainer.innerHTML = '';
        buildQuizze();
    }
    let nextButton = document.getElementById('next');
    nextButton.addEventListener('click', onNextQuestion);

    /*Popup for the first page instuction*/ 

    function onOpenPopup() {
        var popup = document.getElementById("popup1");
        popup.classList.toggle("show");
      }

      function onClosePopup() {
        var popup = document.getElementById("popup1");
        popup.classList.remove("show");
      }