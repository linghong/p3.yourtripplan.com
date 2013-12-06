
/*---------------------------------------------------------------------------------------------------------------------------------
calculate how many words in the words array library
-------------------------------------------------------------------------------------------------------------------------------*/
		words_count = newVocabulary.length
		

/*--------------------------------------------------------------------------------------------------------------------------------
Produce a word for test and the four explaination choice
--------------------------------------------------------------------------------------------------------------------------------*/

		$('.start_test').click(function(){

			//Genenrate a random number, which will be used for selceting the test word and the four explainations from the vocabulary array library 
			random_number1 = Math.floor(Math.random()*words_count);
			random_number2 = Math.floor(Math.random()*words_count);
			random_number3 = Math.floor(Math.random()*words_count);
			random_number4 = Math.floor(Math.random()*words_count);


    		//Check if the random number is same with each other. If so, regenerate a new one.
    		for (var i=0; i<10; i++){
	    	if (random_number2 == random_number1 ||random_number3 == random_number1 || random_number4 == random_number1 || random_number3 == random_number2 || random_number4 == random_number2 || random_number4 == random_number3 ) {
				random_number1 = Math.floor(Math.random()*words_count);
				random_number2 = Math.floor(Math.random()*words_count);
				random_number3 = Math.floor(Math.random()*words_count);
				random_number4 = Math.floor(Math.random()*words_count);
				}
			else
				{
				break;
				}
			}

    		//pick up the three wrong explainations and make a new array	
    		var wrong_explanation1 = vocabularyExplanations[random_number2];
	    	var wrong_explanation2 = vocabularyExplanations[random_number3];
	    	var wrong_explanation3 = vocabularyExplanations[random_number4];
    		wordChoice = new Array(
	    		wrong_explanation1,
	    		wrong_explanation2,
	    		wrong_explanation3
			);

    		//make a random order, use it as an order to insert the correct explaination in the above array
    		random_number = Math.floor(Math.random()*3);
    		correct_explanation = vocabularyExplanations[random_number1];
    		wordChoice.splice(2,0,correct_explanation);
			

			//print out the test word and the four explainations
			$(".start_test").hide();
			$("#subtitle").html("Please pick up the correct explaination from the four explianations listed below:");
			$("#word").html(newVocabulary[random_number1]);
			//$("#choice1").after('<input type="radio" name="answer" class="answers" id="answer0"><label for="answer0">'+wordChoice[0]+'</label>');
			//$("#choice2").after('<input type="radio" name="answer" class="answers" id="answer1"><label for="answer1">'+wordChoice[1]+'</label>');
			//$("#choice3").after('<input type="radio" name="answer" class="answers" id="answer2"><label for="answer2">'+wordChoice[2]+'</label>');
			//$("#choice4").after('<input type="radio" name="answer" class="answers" id="answer3"><label for="answer3">'+wordChoice[3]+'</label>');

			$("#choice1").after('<input type="radio" name="answer" class="answers" id="answer0" value=wordChoice[0]>'+wordChoice[0]+'<br>');
			$("#choice2").after('<input type="radio" name="answer" class="answers" id="answer1" value=wordChoice[1]>'+wordChoice[1]+'<br>');
			$("#choice3").after('<input type="radio" name="answer" class="answers" id="answer2" value=wordChoice[2]>'+wordChoice[2]+'<br>');
			$("#choice4").after('<input type="radio" name="answer" class="answers" id="answer3" value=wordChoice[3]>'+wordChoice[3]+'<br>');
			$("#submit").html('<input type ="button"  id="check_answer" value="Check Answer"><br><input type ="button"  id="see_score" value="See Score">')
		});
			

/*----------------------------------------------------------------------------------------------------------------------------
Check if the answer is correct
-----------------------------------------------------------------------------------------------------------------------------*/
  		 //compare to find whether the answer is correct.If not, show correct answer

   		$('#check_answer').click(function(){

		//find which radio button is checked
   			var answer =$('input[name=answer]:checked').val();
   			correct_answer_number=0;
   			wrong_answer_number =0;


   		// Try Another method for finding which radio button is checked
	 		//var radio_button = $(this);
	 		//var label = radio_button.next();
		 	//var answer = label.html();
   		 

		//compare the checked answer to correct answer. tell the answer results and count the correct the correct and wrong answer numbers
			if (answer == correct_explanation)
				{
				document.write('Excellent!');
				correct_answer_number = correct_answer_number+1;
				}
			else{
				document.write('Sorry, you gave a wrong answer. Correct answer is: '+correct_explanation+'<br>');	
				wrong_answer_number = wrong_answer_number +1;	
   				}
   				question_number=question_number+1
		
		documnet.write('You have done'+question_number + 'words,'+ correct_answer_number+ 'are correct,'+wrong_answer_number+ 'are wrong.' );
   				 			
   		});   


/*----------------------------------------------------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------------------------------------------------------*/
		//start a new word test
		//$('#restart').click(function(){
		//		location.reload()
		//});

