
/*---------------------------------------------------------------------------------------------------------------------------------
calculate how many words in the words array library
-------------------------------------------------------------------------------------------------------------------------------*/
		words_count = newVocabulary.length


/*--------------------------------------------------------------------------------------------------------------------------------
Produce a word for test and the four explaination choice
--------------------------------------------------------------------------------------------------------------------------------*/

		$('#start_test').click(function(){

			//Genenrate a random number, which will be used for selceting the test word from the vocabulary array library 
			random_number = math.floor(math.random()*words_count);

    		//Shuffle the explaination array order  		
    		randomExplainations = vocabularyExplainations.shuffle();

    		//Check if the correct explaination is in the first three of the array. If so, delete it.
    		for (var i=0; i<3; i++){
	    	if (randomExplainations[i] == vocabularyExplainations[random_number]) {
				randomExplainations.splice(i,1); 
				i=i-1;
				}
			}

    		//pick up the first three wrong explainations and the correct explaination to make a new array	
    		wordChoice = new Array(
	   	 		newVocabulary[random_number],
	    		randomExplainations[0],
	    		randomExplainations[1],
	    		randomExplainations[2]
			);

    		//make the four explainations in a random order
    		wordNewChoice = wordChoice.shuffle();

			//print out the test word and the four explainations
			$("#vocabulary_test").html(
				$("#test_form").show()
				$("#word").write(newVocabulary[words_count])
				$("#answer1").write(wordNewChoice[0])
				$("#answer2").write(wordNewChoice[1]) 
				$("#answer3").write(wordNewChoice[2]) 
				$("#answer4").write(wordNewChoice[3])  
			);
		});


/*----------------------------------------------------------------------------------------------------------------------------
Check if the answer is correct
-----------------------------------------------------------------------------------------------------------------------------*/

   		//compare to find whether the answer is correct, if correct, say congratualtion;if not, show correct answer
   		var answer =$('input[name=answer:checked']).val();
		var correct_answer == vocabularyExplainations[random_number];
		$('#submit').click(function(){
			if (answer == correct_answer)
				{
				$("submit").html('Excellent! <input type="submit" id="restart">Next Question');
				}
			else{
				$("submit").html('Sorry, you gave a wrong answer.<br>
				<input type="submit" id="correctanswer">Correct Answer');				
   				}			 			
   		});   

/*----------------------------------------------------------------------------------------------------------------------------
Get the correct answer
-----------------------------------------------------------------------------------------------------------------------------*/
		//Get correst answer	
		$('#correctanswer').click(){
			html('correct answer is'+correct_answer+'<br>
			<input type="submit" id="restart">Next Question</div>')
		};

/*----------------------------------------------------------------------------------------------------------------------------
Start a new test
-----------------------------------------------------------------------------------------------------------------------------*/
		//start a new word test
		$('#restart').click(function(){
				location.reload()
		});

	</script>