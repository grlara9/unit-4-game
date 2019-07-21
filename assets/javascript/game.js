//display crystal images
//The player will be shown a random number at the start of the game
//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$(document).ready(function() {

    var wins = 0; 
	var losses = 0; 
	var score = 0; 
		
//computer will generate a random number between 19 and 120
//You need to know the range of the random.
//EXAMPLE
// Between 50 and 80, the range is 30 (80 - 50 = 30), then you add 1.
//Therefor, the random would look like this : -->
//Math.floor(Math.random() * 31) + 50


	var computerNum = Math.floor(Math.random() * 101) + 19; 
		console.log(computerNum); 
		$("#number-to-guess").html(computerNum); 


	var crytal1 = Math.floor(Math.random() * 12) + 1; 
		console.log(crytal1); 
		$("#img1").html("<img src=" + "assets/images/green.png" + " value=" + crytal1 + ">"); 

	var crystal2= Math.floor(Math.random() * 12) + 1; 
		console.log(crystal2); 
		$("#img2").html("<img src=" + "assets/images/blue.png" + " value=" + crystal2 + ">"); 

	var crystal3 = Math.floor(Math.random() * 12) + 1; 
		console.log(crystal3); 
		$("#img3").html("<img src=" + "assets/images/red.png" + " value=" + crystal3 + ">");
	
	var crystal4 = Math.floor(Math.random() * 12) + 1; 
		console.log(crystal4); 
		$("#img4").html("<img src=" + "assets/images/yellow.png" + " value=" + crystal4 + ">");
    //Function to reset al numbers wihtout refresing page
    //good way to not repeat code	
    
	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			$(".scoreDisplay").html(newScore); 

		if(newScore === computerNum ){ 
			wins++ ; 
			$("#wins").html("Wins: " + wins);  
				reset(); 
		} 

		else if(newScore > computerNum) {
			losses++ ; 
			$("#losses").html("Losses: " + losses); 
				reset(); 
		}

	}); 
    function reset () {
		score = 0; 
        
        var computerNum = Math.floor(Math.random() * 101) + 19; 
        console.log(computerNum); 
        $("#number-to-guess").html(computerNum); 

		$(".scoreDisplay").html(score); 

		var crytal1 = Math.floor(Math.random() * 12) + 1; 
		$("#img1").html("<img src=" + "assets/images/green.png" + " value=" + crytal1 + ">"); 

	var crystal2= Math.floor(Math.random() * 12) + 1; 
		$("#img2").html("<img src=" + "assets/images/blue.png" + " value=" + crystal2 + ">"); 

	var crystal3 = Math.floor(Math.random() * 12) + 1;  
		$("#img3").html("<img src=" + "assets/images/red.png" + " value=" + crystal3 + ">");
	
	var crystal4 = Math.floor(Math.random() * 12) + 1; 
		$("#img4").html("<img src=" + "assets/images/yellow.png" + " value=" + crystal4 + ">");

		}

}); 
    
  