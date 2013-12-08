/*----------------------------------------------------------------------------------------------------------------------------
calculate how many words in the words array library
-------------------------------------------------------------------------------------------------------------------------------*/
words_count = newVocabulary.length;
	

/*=========================================================
For Test
==========================================================*/
$('.start_test').click(function(){
/*--------------------------------------------------------------------------------------------------------------------------------
Produce a set of words for testing and each word has four explaination choices
--------------------------------------------------------------------------------------------------------------------------------*/

	//New subtitle and new button:
	$("#subtitle").html("Please pick up the correct explaination from the four explainations listed below:");
	$("#submit").html('<input type ="submit"  id="check_answer" value="Check Answer"><br>');


	//Genenrate an array which will be used for selceting test words and their correct explainations.
	randomNumber= new Array();
	
	//generate 20 test questions
	for (i=0;i<20; i++){

		//Genenrate 20 random number, which will be used in the array for selceting the test words and their correct explainations.
		randomNumber[i] = Math.floor(Math.random()*words_count);
			if(i>0){
	 		for (j=i-1;j>-1; j--){
	 		if(randomNumber[i] == randomNumber[j]){
	 		randomNumber[i] = Math.floor(Math.random()*words_count);
	 			j=i-1;
	 			};
	 		}
		}
	
		//Genenrate three random numbers, which will be used for selceting the three explainations from the vocabulary array library 
		random_number1 = Math.floor(Math.random()*words_count);
		random_number2 = Math.floor(Math.random()*words_count);
		random_number3 = Math.floor(Math.random()*words_count);

    	//Check if the random number is same with each other. If so, regenerate a new one.
    	for (var m=0; m<10; m++){
	    if (random_number1 == randomNumber[i] ||random_number2 == randomNumber[i] || random_number3 == randomNumber[i] || random_number2 == random_number1 || random_number3 == random_number1 || random_number3 == random_number2 ) 
	    	{	
			random_number1 = Math.floor(Math.random()*words_count);
			random_number2 = Math.floor(Math.random()*words_count);
			random_number3 = Math.floor(Math.random()*words_count);
			}
		else
			{
			break;
			}
		}

    	//pick up the three wrong explainations and make an array for word explanation  choices	
    	var wrong_explanation1 = vocabularyExplanations[random_number1];
	    var wrong_explanation2 = vocabularyExplanations[random_number2];
	    var wrong_explanation3 = vocabularyExplanations[random_number3];
    	wordChoice = new Array(
	    	wrong_explanation1,
	    	wrong_explanation2,
	    	wrong_explanation3
		);

    	//generate a random number, use it as an order to insert the correct explaination in the word explanation choice array
		random_number = Math.floor(Math.random()*3);
    	wordChoice.splice(random_number,0,vocabularyExplanations[randomNumber[i]]);
	
		//print out the test word and the four explainations
		questionAnswer = new Array("Question1","Question2","Question3","Question4","Question5","Question6","Question7","Question8","Question9","Question10","Question11","Question12","Question13","Question14","Question15","Question16","Question17","Question18","Question19","Question20");
		q=20-i;
		$(".word").after("Question "+q+". "+ newVocabulary[randomNumber[i]]+
		'<br><input type="radio" name="answer" class="'+questionAnswer[i]+'" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
		'<br><input type="radio" name="answer" class="'+questionAnswer[i]+'" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
		'<br><input type="radio" name="answer" class="'+questionAnswer[i]+'" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
		'<br><input type="radio" name="answer" class="'+questionAnswer[i]+'" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>'
		);
	}


/*----------------------------------------------------------------------------------------------------------------------------
Check if the answer is correct
-----------------------------------------------------------------------------------------------------------------------------*/
  	//compare to find whether the answer is correct.If not, show correct answer
 		 
 	$('#check_answer').click(function(){

    	correct_explanation = vocabularyExplanations[randomNumber[i]];
 
 			//find which radio button is checked
 			question_number=questionAnswer[i];
			var answer =$('input:radio[name="question_number"]:checked').val();

 			//variable to store correct and wrong answer numbers and questions have answered
   			correct_answer_number=0;
   			wrong_answer_number =0;
 
			//compare the checked answer to correct answer. tell the answer results and count the correct the correct and wrong answer numbers
			if (answer == correct_explanation)
				{	
				correct_answer_number = correct_answer_number+1;
				}
			else{
				document.write('Sorry, you gave a wrong answer. Question' +i+ 'Correct answer is: '+correct_explanation+'<br>');	
				wrong_answer_number = wrong_answer_number +1;	
   				}

   	 	//documnet.write('You have tested 10 words.'+ correct_answer_number + 'answers are correct,'+wrong_answer_number+ 'answers are wrong.');   				 			
 	
   	});

});
/*----------------------------------------------------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------------------------------------------------------*/
	//start a new word test
	//$('#restart').click(function(){
	//		location.reload()
	//});


/*=========================================================
For word Practice Exercise
==========================================================*/

/*----------------------------------------------------------------------------------------------------------------------------
calculate how many words in the words array library
-------------------------------------------------------------------------------------------------------------------------------*/
var i=1;		
	//compare to find whether the answer is correct.If not, show correct answer
 		correct_answer_number=0;
   		wrong_answer_number =0;
		question_number = 0;
$('#start_practice').click(function(){

/*--------------------------------------------------------------------------------------------------------------------------------
Produce a word for testing and the four explaination choices
--------------------------------------------------------------------------------------------------------------------------------*/

	//New subtitle and new button:
		$("#subtitle").html("Please pick up the correct explaination from the four explainations listed below:");
		$("#submit").html('<input type ="submit"  id="check_answer" value="Check Answer"><br><br><input type ="submit"  id="check_result" value="Check My Practice Result"><br>');

	//Genenrate a random number which will be used for selceting test word and its correct explaination.
		random_number0 = Math.floor(Math.random()*words_count);

	//Genenrate a random number, which will be used for selceting the test word and the four explainations from the vocabulary array library 
		random_number1 = Math.floor(Math.random()*words_count);
		random_number2 = Math.floor(Math.random()*words_count);
		random_number3= Math.floor(Math.random()*words_count);


    //Check if the four random number is same with each other. If so, regenerate a new one.
    	for (var m=0; m<10; m++){
	    if (random_number1 == random_number0 ||random_number2 == random_number0 || random_number3 == random_number0 || random_number2 == random_number1 || random_number3 == random_number1 || random_number3 == random_number2 ) {
			random_number1 = Math.floor(Math.random()*words_count);
			random_number2 = Math.floor(Math.random()*words_count);
			random_number3 = Math.floor(Math.random()*words_count);
			}
		else
			{
			break;
			}
		}

    //pick up the three wrong explainations and make a new array	
    	var wrong_explanation1 = vocabularyExplanations[random_number1];
	    var wrong_explanation2 = vocabularyExplanations[random_number2];
	    var wrong_explanation3 = vocabularyExplanations[random_number3];
    	wordChoice = new Array(
	    	wrong_explanation1,
	    	wrong_explanation2,
	    	wrong_explanation3
		);

    //make a random order, use it as an order to insert the correct explaination in the above array
    	random_number = Math.floor(Math.random()*3);
    	correct_explanation = vocabularyExplanations[random_number0];
    	wordChoice.splice(random_number,0,correct_explanation);
			

	//print out the test word and the four explainations
		//$(".start_test").hide();

		$("#new_word").html("Question "+i+". "+ newVocabulary[random_number0]+
		'<br><input type="radio" name="answer" class="questions" id="answer0" value="'+wordChoice[0]+'">'+wordChoice[0]+
		'<br><input type="radio" name="answer" class="questions" id="answer1" value="'+wordChoice[1]+'">'+wordChoice[1]+
		'<br><input type="radio" name="answer" class="questions" id="answer2" value="'+wordChoice[2]+'">'+wordChoice[2]+
		'<br><input type="radio" name="answer" class="questions" id="answer3" value="'+wordChoice[3]+'">'+wordChoice[3]+'<br><br>');
		i=i+1;
/*----------------------------------------------------------------------------------------------------------------------------
Check if the answer is correct
-----------------------------------------------------------------------------------------------------------------------------*/
  
  
 	$('#check_answer').click(function(){

 		//find which radio button is checked
		var answer =$('input:radio[name="answer"]:checked').val();

 		//variable to store correct and wrong answer numbers and questions have answered
  
		//compare the checked answer to correct answer. tell the answer results and count the correct the correct and wrong answer numbers
		if (answer == correct_explanation)
			{
			alert("Excellent!");
			correct_answer_number = correct_answer_number+1;

			}
		else{
			alert('Sorry, you gave a wrong answer. Correct answer is: '+correct_explanation+'<br>');	
			wrong_answer_number = wrong_answer_number +1;	

   			}
   		question_number=question_number+1;
   	});
	
	$('#check_result').click(function(){
	alert('You have tested '+question_number + ' words. Your made '+ correct_answer_number + ' correct answer, '+wrong_answer_number+ ' wrong answers.');   				 			
   	});   

});


/*=========================================================
Start a new test
==========================================================*/

	//start a new word test
	$('#restart').click(function(){
			location.reload()
	});


