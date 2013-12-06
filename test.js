
/*---------------------------------------------------------------------------------------------------------------------------------
calculate how many words in the words array library
-------------------------------------------------------------------------------------------------------------------------------*/
		words_count = newVocabulary.length


/*--------------------------------------------------------------------------------------------------------------------------------
Produce a word for test and the four explaination choice
--------------------------------------------------------------------------------------------------------------------------------*/

		$('.start_test').click(function(){

			//Genenrate a random number, which will be used for selceting the test word from the vocabulary array library 
			random_number1 = Math.floor(Math.random()*words_count);
			random_number2 = Math.floor(Math.random()*words_count);
			random_number3 = Math.floor(Math.random()*words_count);
			random_number4 = Math.floor(Math.random()*words_count);


    		//Check if the correct explaination is in the first three of the array. If so, delete it.
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
    		var wrong_explaination1 = vocabularyExplainations[random_number2];
	    	var wrong_explaination2 = vocabularyExplainations[random_number3];
	    	var wrong_explaination3 = vocabularyExplainations[random_number4];
    		wordChoice = new Array(
	    		wrong_explaination1,
	    		wrong_explaination2,
	    		wrong_explaination3
			);

    		//make a random order, use it as an order to insert the correct explaination in the above array
    		random_number = Math.floor(Math.random()*3);
    		correct_explaination = vocabularyExplainations[random_number1];
    		wordChoice.splice(2,0,correct_explaination);

			//print out the test word and the four explainations
			$(".start_test").hide();
			$("#subtitle").html("Please pick up the correct explaination from the four explianations listed below:");
			$("#word").html(newVocabulary[random_number1]);
			$("#choice1").after('<input type="radio" name="answer" id="answer1" value=wordChoice[0]>'+wordChoice[0]+'<br>');
			$("#choice2").after('<input type="radio" name="answer" id="answer1" value=wordChoice[1]>'+wordChoice[1]+'<br>');
			$("#choice3").after('<input type="radio" name="answer" id="answer1" value=wordChoice[2]>'+wordChoice[2]+'<br>');
			$("#choice3").after('<input type="radio" name="answer" id="answer1" value=wordChoice[3]>'+wordChoice[3]+'<br>');
			$("#submit").show();
		});


/*----------------------------------------------------------------------------------------------------------------------------
Check if the answer is correct
-----------------------------------------------------------------------------------------------------------------------------*/

   		//compare to find whether the answer is correct, if correct, say congratualtion;if not, show correct answer
   		var answer =$('input:checked').val();
		$('#submit').click(function(){
		console.log("Good");
			if (answer == correct_explaination)
				{
				document.write('Excellent!');
				$("#submit").html("Next Question");
				}
			else{
				document.write('Sorry, you gave a wrong answer.');	
				$("#correctanswer").show();		
   				}			 			
   		});   

/*----------------------------------------------------------------------------------------------------------------------------
Get the correct answer
-----------------------------------------------------------------------------------------------------------------------------*/
		//Get correst answer	
		$('#correctanswer').click(function(){
			document.write('correct answer is'+correct_answer+'<br>');
			document.write('<input type="submit" class="start_test">Next Question</div>');
		});



/*----------------------------------------------------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------------------------------------------------------*/
		//start a new word test
		//$('#restart').click(function(){
		//		location.reload()
		//});

