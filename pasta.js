window.onload = function () {
  document.getElementById("title").style.fontSize ="smaller";
};

title.onclick = function () {
  document.getElementById("title").style.color = "red";
};

var para= document.createElement("P");
para.innerText = "Enjoy Your Meal!";
document.getElementById("source").appendChild(para);

// generic AJAX function to load fromFile into object with ID whereTo
function loadFileInto(fromIdentifier, fromList) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  
  fromFile = "recipes.php?id=" + fromIdentifier + "&list=" + fromList;

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
        
        responseArray = JSON.parse(this.responseText);
        responseHTML = "";
        
        if (this.responseText != "0") {
          for (x = 0; x < responseArray.length; x++) {
            responseHTML += "<li>" + responseArray[x] + "</li>";
          }
        }
        
        whereTo = "#" + fromList + " ul";
        if (fromList == "directions") whereTo = "#" + fromList + " ol";
				document.querySelector(whereTo).innerHTML = responseHTML;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

function Recipe(recipeName, imageURL, contributorName, recipeIdentifier) {
  this.name = recipeName
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.identifier = recipeIdentifier;
  
  
  this.displayRecipe =function() {
    document.querySelector("#title h1").innerHTML = this.name;
    
    document.querySelector("#title h3").innerHTML = "Contributed by: " + this.contributor;
    
    document.querySelector("#header").style.backgroundImage = "url(" + this.imgsrc +")";
    
    loadFileInto(this.identifier, "ingredients");
    loadFileInto(this.identifier, "equipment");
    loadFileInto(this.identifier, "directions");
    
    }

}


SpaghettiAglioeOlio = new Recipe(
  "Spaghetti Aglio e Olio",
  "https://media4.s-nbcnews.com/i/newscms/2017_41/1288319/20170828_20170822_11424_pastalikeapro_scottconant_styleddishes_0030_6aa19146b263f4803e6a06c1798de5a0.jpg",
  "Bruno",
  "SpaghettiAglioeOlio"
 
  );
  
LemonChickenPiccata = new Recipe(
  "Lemon Chicken Piccata",
  "https://sdutton355.com/tp4/chicken2.jpg",
  "Sophie",
  "LemonChickenPiccata"
  );

BreadedFriedSoftlySpicedTofu = new Recipe(
"Breaded, Fried, Softly Spiced Tofu",
"https://rkolke355.com/tp4/tp4-image.jpg",
"Rae",
"BreadedFriedSoftlySpicedTofu",
);

  
  














