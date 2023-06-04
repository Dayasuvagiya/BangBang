const questions = [
    {
        question: "../BangBang/assets/images/srawberry.png",
        options : [
            "Die Strawberry",
            "Die Erdbeere",
            "Die Kirsche",
            "Der Apfel",
        ],
        correctOption: [1],
    },
    {
        question: "../BangBang/assets/images/bicycle.png",
        options : [
            "Das Fahrrad", 
            "Das Auto",
            "Der Bus",
            "Das Motorrad"
        ],
        correctOption: [0]
    },
    {
        question: "../BangBang/assets/images/freanchfries.png",
        options : [
            "Die Kartoffel", 
            "Der Burger",
            "Die Gurke",
            "Die Kartoffel"
        ],
        correctOption: [3]
    },
    {
        question: "../BangBang/assets/images/bag.png",
        options : [
            "Der Geldbeutel", 
            "Der Koffer",
            "Die Tasche",
            "Das Gepäck"
        ],
        correctOption: [2]
    },
    {
        question: "../BangBang/assets/images/cake.png",
        options : [
            "Der Käse", 
            "Die Schokolade",
            "Der Kuchen",
            "Die Butter"
        ],
        correctOption: [2]
    },
    {
        question: "../BangBang/assets/images/dog.png",
        options : [
            "Der Hund", 
            "Das Reh",
            "Das Schwein",
            "Die Katze"
        ],
        correctOption: [0]
    },
    {
        question: "../BangBang/assets/images/flower.png",
        options : [
            "Das Gemüse", 
            "Das Obst",
            "Die Pflanze",
            "Die Blumen"
        ],
        correctOption: [3]
    },
    {
        question: "../BangBang/assets/images/lemon.png",
        options : [
            "Die Gurke", 
            "Die Zitrone",
            "Die Zucchini",
            "Der Mais"
        ],
        correctOption: [1]
    },
    {
        question: "../BangBang/assets/images/plant.png",
        options : [
            "Die Pflanze", 
            "Der Baum",
            "Der Topf",
            "Die Blume"
        ],
        correctOption: [0]
    },
    {
        question: "../BangBang/assets/images/TV.png",
        options : [
            "Das Fenster", 
            "Der Schrank",
            "Der Schrank",
            "Der Fernseher"
        ],
        correctOption: [0]
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
        questionImage.setAttribute('src',questions[currentQuestion-1].question);
        questionImage.setAttribute('width','200px');
        questionImage.setAttribute('height','150px');
        quizz.appendChild(questionImage);

        let optionContainer=document.createElement('div');
        optionContainer.setAttribute('id','answer-button');

        let optionA=document.createElement('button');
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
        optionContainer.appendChild(optionD);

        quizz.appendChild(optionContainer);

        }

    buildQuizze();

    function onNextQuestion() {
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

    


    /*Popup for the first page instuction
    let popup=document.getElementById("popup1");

    function openPopup(){
        popup.classList.add("open-popup");
    }
    
    function closePopup(){
        popup.classList.remove("open-popup");
    }*/ 




    function onOpenPopup() {
        var popup = document.getElementById("popup1");
        popup.classList.toggle("show");
      }

      function onClosePopup() {
        var popup = document.getElementById("popup1");
        popup.classList.remove("show");
      }