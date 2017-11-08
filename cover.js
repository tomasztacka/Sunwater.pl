
		function checkChose() {
			var a = document.getElementById("check1").checked;
			var b = document.getElementById("check2").checked;		
			var c = document.getElementById("check3").checked;		
			var d = document.getElementById("check4").checked;
			var e = document.getElementById("check5").checked;
			var f = document.getElementById("check6").checked;
			var g = document.getElementById("check7").checked;
			var h = document.getElementById("check8").checked;
			var i = document.getElementById("check9").checked;
			var j = document.getElementById("check10").checked;
			
			var overWaterCheckedCheckbox = " ";
			if (a == true || b == true || c == true || d == true || e == true || f == true) {
				overWaterCheckedCheckbox = true;
			} else {
				overWaterCheckedCheckbox = false;
				}	
			var underWaterCheckedCheckbox = "";
				if (g == true || h == true || i == true || j == true) {
					underWaterCheckedCheckbox = true;
				} else {
					underWaterCheckedCheckbox = false;
				}
			var checkedCheckbox = "";
				if (overWaterCheckedCheckbox == false || underWaterCheckedCheckbox == false) {
					checkedCheckbox = true;
				} else {
					checkedCheckbox = false;
				}		
			return checkedCheckbox;
		}
		/* for check corect width */ 
			
		function checkWidth() {
			var a = document.getElementById("check1").checked;
			var b = document.getElementById("check2").checked;		
			var c = document.getElementById("check3").checked;		
			var d = document.getElementById("check4").checked;
			var e = document.getElementById("check5").checked;
			var f = document.getElementById("check6").checked;
			var g = document.getElementById("check7").checked;
			var h = document.getElementById("check8").checked;
			var i = document.getElementById("check9").checked;
			var j = document.getElementById("check10").checked;			
			var y = document.getElementById("width").value;
				
				document.getElementById("widthType").classList.remove("alert");
				document.getElementById("widthType").classList.remove("alert-info");				
				document.getElementById("widthType").classList.remove("alert-danger");	
				
				document.getElementById("widthView").classList.remove("alert");			
				document.getElementById("widthView").classList.remove("alert-info");		
				document.getElementById("widthView").classList.remove("alert-danger");		
				
				document.getElementById("widthAlertView").classList.remove("alert");
				document.getElementById("widthAlertView").classList.remove("alert-danger");					
		
			var box = Number(checkChose());
			var widthPool = ""; 
			var messageType = "";
			var messageWidth = "";
			var alertWidthMessage = "";
				if (a==true && y <= 5 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna ręcznie zwijana." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");					
				} else if(a==true && y <=6 && y >5) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ręcznie zwijana. Jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Roleta nadwodna ręcznie zwijana jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");					
				} else if(a==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ręczie zwijana. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");	
				} else if(a==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna ręcznie zwijana. Jest produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna ręcznie zwijana jest produkowana od 3 m szerokości.";
						document.getElementById("widthAlertView").classList.add("alert");					
						document.getElementById("widthAlertView").classList.add("alert-danger");							
				} else if (a==true && y<=0) {
					widthPool = 0;
						messageType = "Twój wybór to roleta nadwodna ręcznie zwijana." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");							
				} else if (b == true && y <= 5 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna STANDARD." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(b==true && y <=6 && y >5) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STANDARD. Jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Roleta nadwodna STANDARD jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(b==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STANDARD. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");	 
				} else if(b==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna STANDARD. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna STANDARD jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else if (b==true && y<=0) {
					widthPool = 0;
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STANDARD." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";	
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");				
				} else if (c == true && y <= 5 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(c==true && y <=6 && y >5) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Roleta nadwodna EXCLUSIVE jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else if(c==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(c==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna EXCLUSIVE jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if (c==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ręcznie zwijana." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth =  "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");	
						
				} else if (d== true && y <= 6 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna STEEL." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(d==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STEEL. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(d==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna STEEL. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna STEEL jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");										
				} else if (d==true && y<=0) {
					widthPool = 0;
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STEEL"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");					
				} else if (e== true && y <= 5 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");	
				} else if(e==true && y <=6 && y >5) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Roleta nadwodna ZABUDOWANA jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");					
				} else if(e==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(e==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna ZABUDOWANA jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else if (e==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");			
				} else if (f== true && y <= 5 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta nadwodna MOBILNA." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(f==true && y <=6 && y >5) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Roleta nadwodna MOBILNA jest produkowana do 5 m szerokości. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else if(f==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety nadwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(f==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta nadwodna MOBILNA jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if (e==true && y<=0) {
					widthPool = 0;
					widthPool = 0;
					messageType = "Twój wybór to roleta nadwodna MOBILNA"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else if (g== true && y <= 6 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta podwodna STANDARD." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(g==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD. Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(g==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta podwodna STANDARD. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta podwodna STANDARD jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");	
				} else if (g==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");				
				} else if (h== true && y <= 6 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta podwodna MONTOWANA PRZY DNIE." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(h==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna MONTOWANA PRZY DNIE. Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(h==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta podwodna MONTOWANA PRZY DNIE. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta podwodna MONTOWANA PRZY DNIE jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");	
				} else if (h==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna MONTOWNA PRZY DNIE"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");				
				} else if (i== true && y <= 6 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta podwodna MONTOWANA W DNIE." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(i==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna MONTOWANA W DNIE. Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(i==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta podwodna MONTOWANA W DNIE. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta podwodna MONTOWANA W DNIE jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");	
				} else if (i==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna MONTOWNA W DNIE"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");				
				} else if (j== true && y <= 6 && y >= 3) {
					widthPool = y;
					messageType = "Twój wybór to roleta podwodna Z SILNIKIEM ZEWNĘTRZNYM." 
						document.getElementById("widthType").classList.add("alert");						
						document.getElementById("widthType").classList.add("alert-info");					
					messageWidth = "Jej szerokość to: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-info");
				} else if(j==true &&  y > 6) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna Z SILNIKIEM ZEWNĘTRZNYM. Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageWidth = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";			
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if(j==true && y >0 && y <3) {
					widthPool = 3;
					messageType = "Twój wybór to roleta podwodna Z SILNIKIEM ZEWNĘTRZNYM. Jest ona produkowana od 3 m szerokości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: " + widthPool + " m.";		
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");	
					alertWidthMessage = "Roleta podwodna Z SILNIKIEM ZEWNĘTRZNYM jest produkowana od 3 m szerokości.";	
						document.getElementById("widthAlertView").classList.add("alert");						
						document.getElementById("widthAlertView").classList.add("alert-danger");
				} else if (j==true && y<=0) {
					widthPool = 0;
					messageType = "Twój wybór to roleta podwodna Z SILNIKIEM ZEWNĘTRZNYM"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageWidth = "Wpisz szerokość basenu!";	
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Wpisz szerokość basenu!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else	if(box!==true && y!=-123.123) {
					widthPool = 0;
					messageType = "Wybierz typ rolety!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					alertWidthMessage = "Wybierz typ rolety!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");						
				} else {
					widthPool = 0;
					messageWidth = "Coś poszło nie tak. Prosimy o kontakt!";
						document.getElementById("widthView").classList.add("alert");						
						document.getElementById("widthView").classList.add("alert-danger");						
					alertWidthMessage = "Coś poszło nie tak. Prosimy o kontakt!";
						document.getElementById("widthAlertView").classList.add("alert");
						document.getElementById("widthAlertView").classList.add("alert-danger");					
				}
				document.getElementById("widthType").innerHTML = messageType;				
				document.getElementById("widthView").innerHTML = messageWidth;
				document.getElementById("widthAlertView").innerHTML = alertWidthMessage;
					return widthPool;
			}	

		/* for check corect length */ 			
		function checkLength() {
			var a = document.getElementById("check1").checked;
			var b = document.getElementById("check2").checked;		
			var c = document.getElementById("check3").checked;		
			var d = document.getElementById("check4").checked;
			var e = document.getElementById("check5").checked;
			var f = document.getElementById("check6").checked;
			var g = document.getElementById("check7").checked;
			var h = document.getElementById("check8").checked;
			var i = document.getElementById("check9").checked;
			var j = document.getElementById("check10").checked;		
			var x = document.getElementById("length").value;
			
			var box = Number(checkChose());		
				
				document.getElementById("widthType").classList.remove("alert");				
				document.getElementById("widthType").classList.remove("alert-danger");				
				document.getElementById("widthType").classList.remove("alert-info");					
			
				document.getElementById("lengthView").classList.remove("alert");	
				document.getElementById("lengthView").classList.remove("alert-danger");					
				document.getElementById("lengthView").classList.remove("alert-info");			
					
				document.getElementById("lengthAlertView").classList.remove("alert");						
				document.getElementById("lengthAlertView").classList.remove("alert-danger");				
			
			
			var lengthPool = ""; 
			var messageType = "";			
			var messageLength = "";		
			var alertLengthMessage = "";			
			
			var widthPool = Number(checkWidth());	

				
				if(a==true && x <= 10 && x >=5 && widthPool <=6 && widthPool > 5) {	
					lengthPool = x;		
					messageType = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA. Jest ona produkowana do 5 m szerokości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					messageLength = "Jej dostępna w standardzie długość to:" + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
						
				} else if(a== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");	
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(a==true &&  x > 10 && x <= 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA. Jest ona produkowana do 10 m długości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");						
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długośc równą: " + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
					alertLengthMessage = "Roleta nadwodna RĘCZNIE ZWIJANA jest produkowana do 10 m długości rolety. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(a==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(a==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(a==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna RĘCZNIE ZWIJANA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(b==true && x <= 10 && x >=5 && widthPool <=6 && widthPool > 5) {	
					lengthPool = x;		
					messageType = "Twój wybór to roleta nadwodna STANDARD. Jest ona produkowana do 5 m szerokości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					messageLength = "Jej dostępna w standardzie długość to:" + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");			
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(b== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna  STANDARD." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");		
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(b==true &&  x > 10 && x <= 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna  STANDARD. Jest ona produkowana do 10 m długości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");						
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długośc równą: " + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
					alertLengthMessage = "Roleta nadwodna STANDARD jest produkowana do 10 m długości rolety. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(b==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STANDARD. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(b==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna STANDARD. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(b==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STANDARD." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");								
				} else if(c==true && x <= 10 && x >=5 && widthPool <=6 && widthPool > 5) {	
					lengthPool = x;		
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Jest ona produkowana do 5 m szerokości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					messageLength = "Jej dostępna w standardzie długość to:" + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");							
				} else if(c== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna  EXCLUSIVE." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");	
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(c==true &&  x > 10 && x <= 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna  EXCLUSIVE. Jest ona produkowana do 10 m długości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");						
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długośc równą: " + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
					alertLengthMessage = "Roleta nadwodna EXCLUSIVE jest produkowana do 10 m długości rolety. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(c==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(c==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(c==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna EXCLUSIVE." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(d== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna  STEEL." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");	
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(d==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STEEL. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(d==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna STEEL. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(d==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna STEEL." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");							
				} else if(e==true && x <= 10 && x >=5 && widthPool <=6 && widthPool > 5) {	
					lengthPool = x;		
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Jest ona produkowana do 5 m szerokości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					messageLength = "Jej dostępna w standardzie długość to:" + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");	
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(e== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna  ZABUDOWANA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");		
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(e==true &&  x > 10 && x <= 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna  ZABUDOWANA. Jest ona produkowana do 10 m długości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");						
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długośc równą: " + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
					alertLengthMessage = "Roleta nadwodna ZABUDOWANA jest produkowana do 10 m długości rolety. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(e==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(e==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if (e==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna ZABUDOWANA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");			
				} else if(f==true && x <= 10 && x >=5 && widthPool <=6 && widthPool > 5) {	
					lengthPool = x;		
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Jest ona produkowana do 5 m szerokości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					
					messageLength = "Jej dostępna w standardzie długość to:" + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");	
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(f== true && x <= 10 && x >= 5 ) {
					lengthPool = x;
					messageType  = "Twój wybór to roleta nadwodna  MOBILNA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");											
					messageLength = "Jej długość to: " + lengthPool + " m." ;	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");			
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(f==true &&  x > 10 && x <= 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna  MOBILNA. Jest ona produkowana do 10 m długości żaluzji. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");						
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długośc równą: " + lengthPool + " m.";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");
					alertLengthMessage = "Roleta nadwodna MOBILNA jest produkowana do 10 m długości rolety. W zamian proponujemy roletę klasy STEEL.";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");						
				} else if(f==true &&  x > 15) {
				 lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Nasze rolety nadwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");					 
					messageLength = "W obliczenaich przyjeliśmy jej długość  równą: " + widthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety nadwodne w standardzie mają do 15m długości żaluzji. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(f==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta nadwodna MOBILNA. Jest produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej długość  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta nadwodna ręczniezwijana jest produkowana od 5 m długości żaluzji.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(f==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta nadwodna MOBILNA." 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");							
					messageLength = "Wpisz długość basenu!";	
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";	
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else if(g== true && x <= 15 && x >= 5) {
					lengthPool = x;
					messageType = "Twój wybór to roleta podwodna STANDARD.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Jej długość to: " + lengthPool + " m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");				
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(g==true &&  x > 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD. Nasze rolety podwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageLength = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + lengthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				 
				} else if(g==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta podwodna STANDARD. Jest ona produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta podwodna STANDARD jest produkowana od 5 m długości.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(g==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageLength = "Wpisz długość basenu!";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");															
				} else if(h== true && x <= 15 && x >= 5) {
					lengthPool = x;
					messageType = "Twój wybór to roleta podwodna STANDARD.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Jej długość to: " + lengthPool + " m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");				
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(h==true &&  x > 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD. Nasze rolety podwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageLength = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + lengthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				 
				} else if(h==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta podwodna STANDARD. Jest ona produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta podwodna STANDARD jest produkowana od 5 m długości.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(h==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageLength = "Wpisz długość basenu!";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				
				} else if(i== true && x <= 15 && x >= 5) {
					lengthPool = x;
					messageType = "Twój wybór to roleta podwodna STANDARD.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Jej długość to: " + lengthPool + " m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");				
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(i==true &&  x > 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD. Nasze rolety podwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageLength = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + lengthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				 
				} else if(i==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta podwodna STANDARD. Jest ona produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta podwodna STANDARD jest produkowana od 5 m długości.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(i==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageLength = "Wpisz długość basenu!";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				
				} else if(j== true && x <= 15 && x >= 5) {
					lengthPool = x;
					messageType = "Twój wybór to roleta podwodna STANDARD.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Jej długość to: " + lengthPool + " m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-info");				
					alertLengthMessage = "";	
						document.getElementById("lengthAlertView").classList.remove("alert");						
						document.getElementById("lengthAlertView").classList.remove("alert-danger");							
				} else if(j==true &&  x > 15) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD. Nasze rolety podwodne w standardzie mają do 15 m długości. Dłuższe wymagają indywidualnej wyceny. Skontaktuj się z nami!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");	
					messageLength = "W obliczenaich przyjeliśmy jej szerkośc  równą: " + lengthPool + " m.";			
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Nasze rolety podwodne w standardzie mają do 6m szerkości. Szersze wymagają indywidualnej wyceny. Skontaktuj się z nami!";					
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");				 
				} else if(j==true && x >0 && x <5) {
					lengthPool = 5;
					messageType = "Twój wybór to roleta podwodna STANDARD. Jest ona produkowana od 5 m długości.";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-info");		
					messageLength = "Dlatego w obliczenaich przyjeliśmy jej szerkośc  równą: 5 m.";		
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");	
					alertLengthMessage = "Roleta podwodna STANDARD jest produkowana od 5 m długości.";	
						document.getElementById("lengthAlertView").classList.add("alert");						
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				} else if(j==true && x<=0) {
					lengthPool = 0;
					messageType = "Twój wybór to roleta podwodna STANDARD"; 
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");		
					messageLength = "Wpisz długość basenu!";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Wpisz długość basenu!";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");
				} else	if(box!==true && x!=-123.123) {
					lengthPool = 0;
					messageType = "Wybierz typ rolety!";
						document.getElementById("widthType").classList.add("alert");					
						document.getElementById("widthType").classList.add("alert-danger");																				
				} else {
					lengthPool = 0;							
					messageLength = "Coś poszło nie tak. Prosimy o kontakt!";
						document.getElementById("lengthView").classList.add("alert");						
						document.getElementById("lengthView").classList.add("alert-danger");						
					alertLengthMessage = "Coś poszło nie tak. Prosimy o kontakt!";
						document.getElementById("lengthAlertView").classList.add("alert");
						document.getElementById("lengthAlertView").classList.add("alert-danger");	
				}
				
				document.getElementById("widthType").innerHTML = messageType;					
				document.getElementById("lengthView").innerHTML = messageLength;
				document.getElementById("lengthAlertView").innerHTML = alertLengthMessage;				

								return lengthPool;
			}
			
			function coverChoseAlert() {
				var e = document.forms["panel"];
				var number = "";
				var i;
				for (i=0; i <e.length; i++)	{
					if (e[i].checked)	{
					number = number + e[i].value + " ";
					}
				}						
				var alertMessage = "";				
				if(number==0) {
					alertMessage = "Wybierz profil PCV";
						document.getElementById("coverChoseAlertView").classList.add("alert");
						document.getElementById("coverChoseAlertView").classList.add("alert-danger");	
				} else {
						document.getElementById("coverChoseAlertView").classList.remove("alert");
						document.getElementById("coverChoseAlertView").classList.remove("alert-danger");	
				}
				document.getElementById("coverChoseAlertView").innerHTML = alertMessage;				
			}
		
			function ratio() {
				var x = Number(checkWidth());
				var y = Number(checkLength());
				var e = document.forms["panel"];
				var number = "";
				var i;
				for (i=0; i <e.length; i++)	{
					if (e[i].checked)	{
					number = number + e[i].value + " ";
					}
				}									
				var f = number * x * y;
				document.getElementById("coversizeview").value = f;
				document.getElementById("coversizeview").disabled = true;
				return f = number * x * y;
			}
			
			function model() {
				var e = document.forms["Options"];
				var number2 = "";
				var i;
				for (i=0; i <e.length; i++)	{
					if (e[i].checked)	{
					number2 = number2 + e[i].value + " ";
					}
				}
				document.getElementById("view2").value = number2;
				document.getElementById("view2").disabled = true;
				return number2;
			}	
			
			function sum()	{
				var x = Number(model()) + Number(ratio());
				document.getElementById("view3").value = x;
				document.getElementById("view3").disabled = true;
				return x;
			}		
			
			
			
