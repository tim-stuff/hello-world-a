//declare variables
		var slaying = true;
		var youHit = Math.floor(Math.random() * 2);
		var damageThisRound = Math.floor(Math.random() * 5 + 1);
		
		var yourHP = 25;
		var dragonHP = 50;

		roundNumber = 1;
		
		//fighting function
		function fight() {
			document.write("<br>Your HP: " + (yourHP) + "<br>Dragon HP: " + (dragonHP));
			document.write("<br><br>Now Fight!");
			while (slaying) {
				document.write("<br><br> Round" + (roundNumber));
			    var attack = confirm("Strike the dragon?");
			    if (attack) {
				    if (youHit) {
				        document.write	("<br><br>Congrats! You hit the dragon!<br> You did " + (damageThisRound * 2) + "HP of damage this round!"); 
				        dragonHP -= (damageThisRound * 2);
				        if (dragonHP <= 0) {
				            document.write("<br><br><br><h2>You slew the dragon! Hero!</h2> <br>You get the girl! <br><br>GAME OVER<br><br>");             
				            slaying = false;         
				        } 
				        else {          
				        	youHit = Math.floor(Math.random() * 2);             
				        	damageThisRound = Math.floor(Math.random() * 5 + 1);             
				        	document.write("<br>Your HP: " + (yourHP) + "<br>Dragon HP: " + (dragonHP) + "<br> Back at it!");
				            roundNumber++;
				        }
				    } 
				    else {
				    	document.write("<br><br>You missed!!! <br>The dragon counter-strikes! Ouch! He did " + damageThisRound + "HP of damage this round!");
				        yourHP -= damageThisRound;
				        if (yourHP <= 0) {
				            document.write("<br><br>Well, he killed you. <br>You failed. <br>The damsels will be eaten. <br>What the crap, man?! <br><br>GAME OVER");             
				            slaying = false;         
				        } 
				        else {             
				        	youHit = Math.floor(Math.random() * 2);                
				        	damageThisRound = Math.floor(Math.random() * 5 + 1);             
				        	document.write("<br>Your HP: " + (yourHP) + "<br>Dragon HP: " + (dragonHP) + "<br> Back at it!");
				            roundNumber++;
				        }
				    }
			    } 
			    else {
			        document.write("<br><h2>Chicken! Quitter!</h2> <br><br>GAME OVER<br><br>");
			        break;
			    }
			}
		}