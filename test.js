/*===============================================================================================================================
Functions
===============================================================================================================================*/

/*----------------------------------------------------------------------------------------------
set up a function to generate four word explanation choices to form the wordChoice array, 
	wordExplanations:array for the word explanations
	words_count:array length
	testword_number: representation the posotion for the word selected in the array
	random_number1,random_number2,random_number3: 
	representation the posotion for three wrong explanation choice in the array
------------------------------------------------------------------------------------------------*/
	//Generate a function for the four word explanation choices 
	function explanationchoice(testword_number,words_count, wordExplanations){ 		

		//Generate three random numbers, which will be used for selecting the three wrong explanations from the vocabulary array library 
		random_number1 = Math.floor(Math.random()*words_count);
		random_number2 = Math.floor(Math.random()*words_count);
		random_number3 = Math.floor(Math.random()*words_count);

    	//Check if the random number is same with each other. If so, regenerate a new one.
    	for (var m=0; m<10000; m++){
    	 if (random_number1 == testword_number) 
    	 	{
    	 	random_number1 = Math.floor(Math.random()*words_count);
    	 	}
	    	else if (random_number2 == testword_number ||random_number2 == random_number1) 
	    	{
	    	random_number2 = Math.floor(Math.random()*words_count);
	    	}
			else if (random_number3 == testword_number || random_number3 == random_number1 || random_number3 == random_number2) 
			{
			random_number3 = Math.floor(Math.random()*words_count);
			}
			else
			{
			break;
			}
		}

    	//pick up the three wrong explanations and make an array for word explanation choices	
    	var wrong_explanation1 = wordExplanations[random_number1];
	    var wrong_explanation2 = wordExplanations[random_number2];
	    var wrong_explanation3 = wordExplanations[random_number3];
    	wordChoice = new Array(
	    	wrong_explanation1,
	    	wrong_explanation2,
	    	wrong_explanation3
		);

    	//generate a random number, use it as an order to insert the correct explanation in the word explanation choice array
		random_number = Math.floor(Math.random()*3);
    	wordChoice.splice(random_number,0,wordExplanations[testword_number]);
    }


/*===============================================================================================================================
For Word Test Page
===============================================================================================================================*/

$('.start_test').click(function(){

	//New subtitle and new button:
	$("#subtitle").html("Please pick up the correct explanation from the four explanations listed below:");
	$("#submit").html('<input type ="submit"  id="check_testanswer" value="Check Answer"><br>');

/*------------------------------------------------------------------------------------------
Produce words for testing and their four explanation choices
--------------------------------------------------------------------------------------------*/
	//newVocabulary total word number
	words_count = newVocabulary.length

	//Generate an number array used for selceting test words and their correct explanations.
	randomNumber= new Array();
	
	//Generate 20 test words
	for (i=0;i<20; i++){

		//Generate 20 random number, which will be used in the array for selecting the test words and their correct explanations.
		randomNumber[i] = Math.floor(Math.random()*words_count);
			if(i>0){
	 		for (j=i-1;j>-1; j--){
	 		if(randomNumber[i] == randomNumber[j]){
	 		randomNumber[i] = Math.floor(Math.random()*words_count);
	 			j=i-1;
	 			};
	 		}
		}

	//Use the explanationchoice function to produce four explanation choices for each tested word
	explanationchoice(randomNumber[i],newVocabulary.length, vocabularyExplanations);
	
	//List the test word and the four explanations on the screen
	wordQuestion = new Array
		(
		"Question1","Question2","Question3","Question4","Question5","Question6","Question7","Question8","Question9","Question10","Question11","Question12","Question13","Question14","Question15","Question16","Question17","Question18","Question19","Question20"
		);
	q=20-i;
	console.log(wordQuestion[i]);
	$(".word").after
		(
		"Question "+q+". "+ newVocabulary[randomNumber[i]]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
		'<br><input type="radio" name="'+wordQuestion[i]+'" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>'
		);
}

/*----------------------------------------------------------------------------------------
Check if the answer is correct
----------------------------------------------------------------------------------------*/
  	//compare to find whether the answer is correct. If not, show correct answer
 	$('#check_testanswer').click(function(){
	
		//variable to store correct and wrong answer numbers 
   		correct_answer_number=0;
   		wrong_answer_number =0;

		for (i=0;i<20; i++){

 			//find which radio button is checked
			var answer =$('input:radio[name="'+wordQuestion[i]+'"]:checked').val();

			//correct explanation
    		correct_explanation = vocabularyExplanations[randomNumber[i]];

			//compare the checked answer to correct answer. tell the answer results and count the correct and wrong answer numbers
			if (answer == correct_explanation)
				{	
				correct_answer_number = correct_answer_number+1;
				}
			else{
				wrong_answer_number = wrong_answer_number +1;	
   				}
 		}	
   	 	alert('You have tested 20 words. '+ correct_answer_number + 'answers are correct, '+wrong_answer_number+ 'answers are wrong.');   				 			

   	});
});


/*==============================================================================================================================
For Word Practice Exercise Page
================================================================================================================================*/

/*---------------------------------------------------------------------------------------                
	Set up word practice array library
---------------------------------------------------------------------------------------*/

	var i=1;		
	//compare to find whether the answer is correct.If not, show correct answer
 		correct_answer_number=0;
   		wrong_answer_number =0;
		question_number = 0;

$('#start_practice').click(function(){
	//New subtitle and new button:
		$("#subtitle").html("Please pick up the correct explanationchoice from the four explanations listed below:");
		$("#submit").html('<input type ="submit"  id="check_exerciseanswer" value="Check Answer"><br><br>');

	//Generate a word practice array.
	practiceVocabulary = newVocabulary;
	practiceExplanations = vocabularyExplanations; 

	//Generate a random number used for selecting test word and the explanation.(Only 50 words from the library for practice)
		words_count=50;
		random_number0 = Math.floor(Math.random()*words_count);

/*----------------------------------------------------------------------------------------
Produce a word for testing and the four explanation choices
----------------------------------------------------------------------------------------*/
	//Pick up four wordchoices from the practice word library
	explanationchoice(random_number0,50, practiceExplanations);


	//Print out the test word and the four explanations
		//$(".start_test").hide();

		$("#new_word").html("Question "+i+". "+ practiceVocabulary[random_number0]+
		'<br><input type="radio" name="answer" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
		'<br><input type="radio" name="answer" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
		'<br><input type="radio" name="answer" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
		'<br><input type="radio" name="answer" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>'
		);
		i=i+1;
/*----------------------------------------------------------------------------------------     
Check if the answer is correct
----------------------------------------------------------------------------------------*/
  	$('#check_exerciseanswer').click(function(){

 		//find which radio button is checked
		var answer =$('input:radio[name="answer"]:checked').val();

 		//variable to store correct and wrong answer numbers and questions have answered
 		practice_word = practiceVocabulary[random_number0];
  		correct_explanation = practiceExplanations[random_number0];

		//compare the checked answer to correct answer. Tell the answer results and count the correct the correct and wrong answer numbers
		if (answer == correct_explanation)
			{
			practiceVocabulary.splice(random_number0,1); 
			practiceExplanations.splice(random_number0,1); 
			alert("Excellent!");
			correct_answer_number = correct_answer_number+1;
			practiceVocabulary = newVocabulary;
			practiceExplanations = vocabularyExplanations; 
			}
		else{
			practiceVocabulary.unshift(practice_word); 
			practiceExplanations.unshift(correct_explanation); 
			alert('Sorry, you gave a wrong answer. Correct answer is: '+correct_explanation+'<br>');	
			wrong_answer_number = wrong_answer_number +1;	
   			}
   		question_number=question_number+1;
   	});
	
	//$('#check_result').click(function(){
			 			
   	//});   


 	function result(question_number,correct_answer_number,wrong_answer_number)  	
 	{
 	alert('You have tested '+question_number + ' words. Your made '+ correct_answer_number + ' correct answer, '+wrong_answer_number+ ' wrong answers.'); 
	console.log(question_number)  	
 	}
 	$('#check_score').change(">Check My Practice Result</button><br>");
});


/*==============================================================================================================================
Start a new test
===============================================================================================================================*/

	//start a new word test
	$('#restart').click(function(){
			location.reload()
	});


