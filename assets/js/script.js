const questions = [
    {
        question: "../BangBang/assets/images/strobery.png",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    }]
    
    function buildQuizze(){
        let quizz= document.getElementsByClassName('quizz-question')[0];
        let questionImage= document.createElement('img');
        questionImage.setAttribute('src',questions[0].question);
        questionImage.setAttribute('width','100px')
        questionImage.setAttribute('height','100px')
        quizz.appendChild(questionImage);
    }

    buildQuizze();