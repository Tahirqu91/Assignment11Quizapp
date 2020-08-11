function Quiz(questions) {

        this.score = 0;
    
        this.questions = questions;
    
        this.questionIndex = 0;
    
    }
    
     
    
    Quiz.prototype.getQuestionIndex = function() {
    
        return this.questions[this.questionIndex];
    
    }
    
     
    
    Quiz.prototype.guess = function(answer) {
    
       if(this.getQuestionIndex().isCorrectAnswer(answer)) {
    
            this.score++;
    
        }
    
     
    
        this.questionIndex++;
    
    }
    
     
    
    Quiz.prototype.isEnded = function() {
    
        return this.questionIndex === this.questions.length;
    
    }
    
     
    
     
    
    function Question(text, choices, answer) {
    
        this.text = text;
    
        this.choices = choices;
    
        this.answer = answer;
    
    }
    
     
    
    Question.prototype.isCorrectAnswer = function(choice) {
    
        return this.answer === choice;
    
    }
    
     
    
     
    
    function quizTest() {
    
        if(quiz.isEnded()) {
    
                showRuns();
    
        }
    
        else {
    
            // show question
    
            var ques = document.getElementById("questionno");
    
            ques.innerHTML = quiz.getQuestionIndex().text;
    
     
    
            // show options
    
            var choices = quiz.getQuestionIndex().choices;
    
            for(var i = 0; i < choices.length; i++) {
    
                var ques = document.getElementById("choice" + i);
    
                ques.innerHTML = choices[i];
    
                guess("btn" + i, choices[i]);
    
            }
    
     
    
            newProgress();
    
        }
    
    };
    
     
    
    function guess(id, guess) {
    
        var button = document.getElementById(id);
    
        button.onclick = function() {
    
            quiz.guess(guess);
    
            quizTest();
    
        }
    
    };
    
     
    
     
    
    function newProgress() {
    
        var currentQuestionNumber = quiz.questionIndex + 1;
    
        var element = document.getElementById("progressnew");
    
        element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    
    };
    
     
    
    function showRuns() {
    
        var gameOverHTML = "<h1 class='text-center py-5'>Result</h1>";
    
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + " Out of 7 </h2>";
    
        var element = document.getElementById("quiztest");
    
        element.innerHTML = gameOverHTML;
   
    
    };
    
     
    
    // questions here
    
    var questionsans = [
    
        new Question("What is the output of 8+5?", ["15", "23","13", "5"], "13"),
    
        new Question("What is the output of 25-5?", ["20", "30", "25", "15"], "20"),
    
        new Question("cascading style sheets stand for?", ["xhtml", "html","css", "All"], "css"),
    
        new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
        
        new Question("Hyper Text Markup Language Stand For?", ["HTML", "XHTML", "CSS", "All"], "HTML"),

        new Question("How many  Sajdahs are there in the Quran?", ["14", "20", "11", "17"], "14"),
    
        new Question("How many  Surahs are there in the Quran?", ["104", "111", "118", "114"], "114")
    ];
    
     
    
    //  quiz
    
    var quiz = new Quiz(questionsans);
    
     
    
    
    quizTest();
    
   
    

