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
        alter: 'Die Erdbeere',
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
        alter: 'Das Fahrrad',
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
        alter:'Die Pommes',
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
        alter:'Die Tasche',
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
        alter:'Der Kuchen',
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
        alter:'Der Hund',
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
        alter:'Die Blumen',
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
        alter:'Die Zitrone',
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
        alter:'Die Pflanze',
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
        alter:'Der Fernseher',
        correctOption: "Der Fernseher"
    } 

]

    let scrore = 0;
    let currentQuestion = 1;
    let isClick = false;
    

    //Creat function for score counter with if statment
    function onClickAnswer(evt){
        try {
            if(!isClick) {
                if(evt.currentTarget.correctOption === questions[currentQuestion - 1].correctOption) {
                    scrore = scrore + 1;
                    evt.currentTarget.style.backgroundColor = 'rgb(124, 244, 116)';
                } else {
    
                    evt.currentTarget.style.backgroundColor = 'rgb(251, 119, 119)';
                }
                isClick = true;
            }
        } catch(e) {
            console.log(e);
        }
    }


    //function to get element, create attribute and set attributes for style and set images.
    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        let questionImage= document.createElement('img');
        questionImage.setAttribute('alt',questions[currentQuestion-1].alter);
        questionImage.setAttribute('src',questions[currentQuestion-1].question);
        questionImage.setAttribute('width','200px');
        questionImage.setAttribute('height','150px');
        quizz.appendChild(questionImage);

    
        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');
       
    //loop for answers and given options
        let options = questions[currentQuestion - 1].answers;
        let correctAnswer = questions[currentQuestion - 1].correctOption;

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
            const allQuestion = document.getElementsByClassName('question-answer')[0];
            allQuestion.classList.toggle('question-answer-visible')

            document.getElementsByClassName('mainDiv')[0].innerHTML = `
            <h2 class="score-info"> Congratulation! Your total score is ${scrore} / ${questions.length}</h2>
            <a class="home-page" href="game.html"><button  id="home" >Play again</button></a>
            `
        } else if (currentQuestion < questions.length) {
            currentQuestion = currentQuestion + 1;
            let questionNumber = document.getElementById('question-number');
            questionNumber.innerHTML = 'question: ' + currentQuestion;
            isClick = false;
            const quizzContainer = document.getElementsByClassName('quizz-question')[0];
            quizzContainer.innerHTML = '';
            buildQuizze();
        } else {
            throw('Something went wrong....!')
        }
        
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