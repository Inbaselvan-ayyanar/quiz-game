"use strict"
document.querySelector(".restart").classList.add("hidden")
const score_lable = document.querySelector(".score")
score_lable.classList.add("hidden");
const question_bank =[
  {
    question:"Who claimed the Purple Cap for highest wicket taker in IPL 2019?",
    option1 :"Dwayne Bravo",
    option2 :"Y Chahal",
    option3 :"B kumar",
    option4 :"Imran Tahir",
    correct_option:4,
    status :false,
  },
  {
    question:"Who set a new record for most number of sixes by an individual in an ODI innings?",
    option1 :"Eoin Morgan",
    option2 :"MS Dhoni",
    option3 :"Chris Gayle",
    option4 :"B Mucclum",
    correct_option:1,
    status: false
  },
  {
    question:"Which Indian Cricketer became the fastest batsman in the world to reach 20,000 international runs mark",
    option1 :"Sachin Tendulkar",
    option2 :"MS Dhoni",
    option3 :"Virat Kohli",
    option4 :"VVS Laksman",
    correct_option:3,
    status : false,
  },
  {
    question:"Fastest Batsman to reach no1 ODI ranking",
    option1 :"Sachin Tendulkar",
    option2 :"MS Dhoni",
    option3 :"Virat Kohli",
    option4 :"Ricky Pointing",
    correct_option:2,
    status : false,
  },
  {
    question:"Player to which all teams bid in a IPL Auction",
    option1 :"Kl Rahul",
    option2 :"MS Dhoni",
    option3 :"Virat Kohli",
    option4 :"L Malinga",
    correct_option:2,
    status : false,
  },
  {
    question:"When was the Ashes first played?",
    option1 :"1872",
    option2 :"1877",
    option3 :"1882",
    option4 :"1887",
    correct_option:3,
    status : false,
  },
  {
    question:"How many ways are there of getting out?",
    option1 :"7",
    option2 :"8",
    option3 :"9",
    option4 :"10",
    correct_option:4,
    status : false,
  },
  {
    question:"Which fast bowler has taken the most test wickets?",
    option1 :"Glenn Mcgrath",
    option2 :"Dale Steyn",
    option3 :"Staurt Broad",
    option4 :"James Anderson",
    correct_option:4,
    status : false,
  },
  {
    question:" Who is the only batsman to record 400 runs in an international Test match?",
    option1 :"Sachin Tendulkar",
    option2 :"Brain Lara",
    option3 :"v Sehwag",
    option4 :"Don Bradman",
    correct_option:2,
    status : false,
  },
  {
    question:"Which Australian player has scored the most test runs?",
    option1 :"Steve Waugh",
    option2 :"Don Bradman",
    option3 :"Ricky Pointing",
    option4 :"Matthew Hayden",
    correct_option:3,
    status : false,
  },
  {
    question:"What is the name of the cricket bible?",
    option1 :"Willsden Cricketers' Almanack",
    option2 :"Willsden Cricketers' Handbook",
    option3 :"Wisden Cricketers' Handbook",
    option4 :"Wisden Cricketers' Almanack",
    correct_option:4,
    status : false,
  },
  {
    question:"How long did the longest cricket match in history go on for?",
    option1 :"6",
    option2 :"9",
    option3 :"10",
    option4 :"12",
    correct_option:2,
    status : false,
  },
  {
    question:"Which legendary bowler has the nickname 'Whispering Death'?",
    option1 :"Curtly Ambrose",
    option2 :"Dennis Lillee",
    option3 :"Michael Holding",
    option4 :"Wasim Akram",
    correct_option:4,
    status : false,
  },
  {
    question:"What was a major change in cricket in the 1760s, some 2 to 300 or more years after it was first played in the UK?",
    option1 :"Cricketing whites became required wear",
    option2 :"Balls were bowled instead of rolled along the ground",
    option3 :"Women were admitted as players",
    option4 :"International championships were es­tablished",
    correct_option:2,
    status : false,
  },
  {
    question:"In cricket, what term is used to describe the situation when a batsman is ”out” on the first ball of the test match in both the innings",
    option1 :"King Pair",
    option2 :"Dimound Duck",
    option3 :"Golden Duck",
    option4 :"Royal Duck",
    correct_option:1,
    status : false,
  },
  {
    question:"Which of the following cups/trophies is NOT related with the game of cricket ?",
    option1 :"Deodhar Trophy",
    option2 :"Irani Trophy",
    option3 :"Subroto Cup",
    option4 :"Ranji Trophy",
    correct_option:3,
    status : false,
  },
];
let questions=[];
let num=[];
let count =0;
while(questions.length !=5){
  let random_int = Math.trunc(Math.random()*question_bank.length);
  if(num.includes(random_int)){

  }else{
    num.push(random_int);
    questions.push(question_bank[random_int]);
  }
}
console.log(questions);

const printing=function(questions){
  if (count<5){
    let question_set = questions[count];
    const html=`
    <div class="movements__row">
      <div class="movements__type movements__type--QUESTION">${question_set.question}</div>
      <nav>
        <form class="options">
          <nav>
            <button class="option1">a.${question_set.option1}</button>
          </nav>
          <nav>
            <button class="option2">b.${question_set.option2}</button>
          </nav>
          <nav>
            <button class="option3">c.${question_set.option3}</button>
          </nav>
          <nav>
            <button class="option4">d.${question_set.option4}</button>
          </nav> 
        </form>
      </nav>
    </div>
    `;
  document.querySelector(".movements").insertAdjacentHTML("afterend",html)
   
}}
printing(questions);
let option1 = document.querySelectorAll(".option1");
let option2 = document.querySelectorAll(".option2");
let option3 = document.querySelectorAll(".option3");
let option4 = document.querySelectorAll(".option4");
console.log(option1,option2,option3,option4)


  

option1.forEach(acc=>acc.addEventListener("click",function(e){
  e.preventDefault();
  let question_set = questions[count];
  
  let selected_option = 1;
  if (selected_option===question_set.correct_option){
    
    question_set.status=true;
    console.log(question_set)
    document.querySelector(".option1").style.backgroundColor="#FFFFFF";
    document.querySelector(".option1").style.color="#000000";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";

    
  }else{
    
    question_set.status=false;
    document.querySelector(".option1").style.backgroundColor="#FFFFFF";
    document.querySelector(".option1").style.color="#000000";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";
  }
  
}
))

option2.forEach(acc=>acc.addEventListener("click",function(e){
  e.preventDefault();
  let question_set = questions[count];

  let selected_option = 2;
  if (selected_option===question_set.correct_option){
   
    question_set.status=true;
    document.querySelector(".option2").style.backgroundColor="#FFFFFF";
    document.querySelector(".option2").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d580";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";
  }else{
    
    question_set.status=false;
    document.querySelector(".option2").style.backgroundColor="#FFFFFF";
    document.querySelector(".option2").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d58";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";
  }
  
}
))

option3.forEach(acc=>acc.addEventListener("click",function(e){
  e.preventDefault();
  let question_set = questions[count];
  
  let selected_option = 3;
  if (selected_option===question_set.correct_option){

    question_set.status=true;
    document.querySelector(".option3").style.backgroundColor="#FFFFFF";
    document.querySelector(".option3").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";
  }else{
    question_set.status=false;
    document.querySelector(".option3").style.backgroundColor="#FFFFFF";
    document.querySelector(".option3").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option4").style.backgroundColor="#d61d1d58";
  }
  
}
))


option4.forEach(acc=>acc.addEventListener("click",function(e){
  e.preventDefault();
  let question_set = questions[count];
  
  let selected_option = 4;
  if (selected_option===question_set.correct_option){
    
    question_set.status=true;
    document.querySelector(".option4").style.backgroundColor="#FFFFFF";
    document.querySelector(".option4").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    
  }else{
    question_set.status=false;
    document.querySelector(".option4").style.backgroundColor="#FFFFFF";
    document.querySelector(".option4").style.color="#000000";
    document.querySelector(".option1").style.backgroundColor="#d61d1d58";
    document.querySelector(".option2").style.backgroundColor="#d61d1d58";
    document.querySelector(".option3").style.backgroundColor="#d61d1d58";
  }
  
}
))





// next part
document.querySelector(".next").addEventListener("click",function(e){
  e.preventDefault();
  document.querySelector(".movements__row").classList.add("hidden")
  count+=1
  if (count<5){
    printing(questions)

  let option1 = document.querySelectorAll(".option1");
  let option2 = document.querySelectorAll(".option2");
  let option3 = document.querySelectorAll(".option3");
  let option4 = document.querySelectorAll(".option4");
  

  
  option1.forEach(acc=>acc.addEventListener("click",function(e){
    e.preventDefault();
    let question_set = questions[count];

    let selected_option = 1;
    if (selected_option===question_set.correct_option){
      
      question_set.status=true;
      document.querySelector(".option1").style.backgroundColor="#FFFFFF";
      document.querySelector(".option1").style.color="#000000";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }else{
      
      question_set.status=false;
      document.querySelector(".option1").style.backgroundColor="#FFFFFF";
      document.querySelector(".option1").style.color="#000000";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }
    
  }
  ))
  
  option2.forEach(acc=>acc.addEventListener("click",function(e){
    e.preventDefault();
    let question_set = questions[count];

    let selected_option = 2;
    if (selected_option===question_set.correct_option){
      
      question_set.status=true;
      document.querySelector(".option2").style.backgroundColor="#FFFFFF";
      document.querySelector(".option2").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }else{
      
      question_set.status=false;
      document.querySelector(".option2").style.backgroundColor="#FFFFFF";
      document.querySelector(".option2").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }
    
  }
  ))
  
  option3.forEach(acc=>acc.addEventListener("click",function(e){
    e.preventDefault();
    let question_set = questions[count];
    
    let selected_option = 3;
    if (selected_option===question_set.correct_option){
      
      question_set.status=true;
      document.querySelector(".option3").style.backgroundColor="#FFFFFF";
      document.querySelector(".option3").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }else{
      
      question_set.status=false;
      document.querySelector(".option3").style.backgroundColor="#FFFFFF";
      document.querySelector(".option3").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option4").style.backgroundColor="#d61d1d58";
    }
    
  }
  ))
  
  
  option4.forEach(acc=>acc.addEventListener("click",function(e){
    e.preventDefault();
    let question_set = questions[count];
    
    let selected_option = 4;
    if (selected_option===question_set.correct_option){
     
      question_set.status=true;
      document.querySelector(".option4").style.backgroundColor="#FFFFFF";
      document.querySelector(".option4").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    }else{
    
      question_set.status=false;
      
      document.querySelector(".option4").style.backgroundColor="#FFFFFF";
      document.querySelector(".option4").style.color="#000000";
      document.querySelector(".option1").style.backgroundColor="#d61d1d58";
      document.querySelector(".option2").style.backgroundColor="#d61d1d58";
      document.querySelector(".option3").style.backgroundColor="#d61d1d58";
    }
    
  }
  ))
  }else{
    let score=0;
    questions.forEach(function(acc){
      if (acc.status){
        score+=1;
      }else{
        score-=0.5;
      }
    document.body.style.backgroundImage="url('resultimage1.jpg')";
    document.querySelector(".score").textContent=score;
    document.querySelector(".restart").classList.remove("hidden")

    })

    document.querySelector(".next").classList.add("hidden");
    score_lable.classList.remove("hidden");
  }
  
  document.querySelector(".next").style.backgroundColor="#FFFFFF";
  setTimeout(function(){
    document.querySelector(".next").style.backgroundColor="#d61d1d58";
  },100)
  
})

// restart


document.querySelector(".restart").addEventListener("click",function(e){
  document.body.style.backgroundImage="url('OIP.jpeg')";
  document.querySelector(".restart").style.backgroundColor="#FFFFFF";
  document.querySelector(".next").classList.remove("hidden");
  score_lable.classList.add("hidden");
  e.preventDefault();
  setTimeout(function(){
    document.querySelector(".restart").style.backgroundColor="#d61d1d58";
  },100)
  count=0;
  let score=0;
  let questions=[];
  if(num.length==15){
    num=[];
  }
  while(questions.length !=5){
    let random_int = Math.trunc(Math.random()*question_bank.length);
      if(num.includes(random_int)){

      }else{
        num.push(random_int);
        questions.push(question_bank[random_int]);
      }
  }
  console.log(questions);
  document.querySelector(".restart").classList.add("hidden")
  document.querySelector(".movements__row").classList.add("hidden")
  printing(questions);//added questions
  
})

