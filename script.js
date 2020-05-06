const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const question=document.querySelector(".question");
const  op1=document.querySelector(".option1");
const  op2=document.querySelector(".option2");
const  op3=document.querySelector(".option3");
const  op4=document.querySelector(".option4");
let questionIndex;
let index=0;

/* questions options & answers */

const  questions=[{
    q:"Which Williams sister has won more Grand Slam titles?",
    options:["Venus", "Sienna", "Serena", "Vienna"],
    answer:2
},
    
{
    q:"Which boxer was known as the greatest and the champion?",
    options:["Ali Yobo", "The Rock", "Mohammed Ali", "Abdulsalam Suliyat"],
    answer:2
},
    {
        q:"What is often seen as the smallest unit of memory?",
        options:["kilobyte", "Megabyte", "Gigabyte", "Killbyte"],
        answer:0
    },
    {
        q:"What year was the very first model of the iPhone released?",
        options:["2005", "2006", "2007", "1999"],
        answer:2
    },
    {
        q:"Who is often called the father of the computer?",
        options:["Raymond Reddington", "Charles Babbage", 
        "Khloe Babbage", "Chris Babbage"],
        answer:1
    },
]

/*set questions and options and question number */
    totalQuestionSpan.innerHTML=questions.length;
    function load(){
        questionNumberSpan.innerHTML=index+1;
            question.innerHTML=questions[questionIndex].q;
            op1.innerHTML=questions[questionIndex].options[0];
            op2.innerHTML=questions[questionIndex].options[1];
            op3.innerHTML=questions[questionIndex].options[2];
            op4.innerHTML=questions[questionIndex].options[3];
            index++;
    }
    function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct");
        updateAnswerTracker("correct")
        }
        else{
        element.classList.add("wrong")
        updateAnswerTracker("wrong")

        }

        disabledOptions()
    }
    function disabledOptions(){
        for(let i=0; i<options.length; i++) {
        options[i].classList.add("disabled");
        if(options[i].id==questions[questionIndex].answer){
        options[i].classList.add("correct");
        }
       }
    }

    function randomQuestion(){
        let randomNumber=Math.floor(Math.random()*questions.length);
        questionIndex=randomNumber;
       // console.log(questionIndex)
        load();
    }

    function answerTracker(){
        for(let i=0; i<questions.length; i++){
            const div=document.createElement("div")
            answerTrackerContainer.appendChild(div);
        }
    }
    function updateAnswerTracker(classNam){
        answerTrackerContainer.children[index-1].classList.add(classNam);

    }
    window.onload=function(){
        this.randomQuestion()
    }


