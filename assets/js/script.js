//Generate questons and options

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
        question: "../BangBang/assets/images/tv.png",
        answers : [
            "Das Fenster", 
            "Der Leptop",
            "Der Schrank",
            "Der Fernseher"
        ],
        correctOption: "Der Fernseher"
    } 

]

    let scrore = 0;
    let currentQuestion = 1;
    let isClick = false;
    

    //Creat function for score counter with if statment
    function onClickAnswer(evt){
        if(!isClick) {
            if(evt.currentTarget.correctOption === questions[currentQuestion - 1].correctOption) {
                scrore = scrore + 1;
                evt.currentTarget.style.backgroundColor = 'rgb(124, 244, 116)';
                let scoreElement = document.getElementById('score');
                scoreElement.innerHTML = scrore;
            } else {

                evt.currentTarget.style.backgroundColor = 'rgb(251, 119, 119)';
            }
            isClick = true;
        }
    }


    //function to get element, create attribute and set attributes for style and set images.
    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        console.log(quizz);
        let questionImage= document.createElement('img');
        questionImage.setAttribute('src',questions[currentQuestion-1].question);
        questionImage.setAttribute('width','200px');
        questionImage.setAttribute('height','150px');
        quizz.appendChild(questionImage);

    
        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');
       
    //loop for answers and given options
        let options = questions[currentQuestion - 1].answers;
        let correctAnswer = questions[currentQuestion - 1].correctOption;
        console.log({ options});

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

        quizz.appendChild(optionContainer);

        }

    buildQuizze();

    function initGame() {
        scrore = 0;
        currentQuestion = 1;
        isClick = false;
    }

    //Last page after complete the quizze
    function onNextQuestion() {
        if(questions.length === currentQuestion) {
            document.getElementsByClassName('mainDiv')[0].innerHTML = `
            <h2 class="score-info"> Your total score is ${scrore} / ${questions.length}</h2>
            <a class="home-page" href="game.html"><button  id="home" >Play again</button></a>
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

    //Next button on click
    let nextButton = document.getElementById('next');
    nextButton.addEventListener('click', onNextQuestion);

    //Popup for the first page instuction

    function onOpenPopup() {
        const popup = document.getElementById("popup1");
        popup.classList.toggle("show");
      }

      function onClosePopup() {
        const popup = document.getElementById("popup1");
        popup.classList.remove("show");
      }