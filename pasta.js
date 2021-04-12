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
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// prepares code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
		
			if ((this.readyState == 4) && (this.status == 200)) {
				document.getElementById(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
				
			}
		
	} // end ajax.onreadystatechange

	// now that everything is set, initiate request
	ajax.send();

}

function Recipe(recipeName, imageURL, contributorName, ingredientFilename, equipmentFilename, directionsFilename) {
  this.name = recipeName
  this.imgsrc = imageURL;
  this.contributor = contributorName;
  this.ingFile = ingredientFilename;
  this.equipFile = equipmentFilename;
  this.dirFile = directionsFilename;
  
  
  this.displayRecipe =function() {
    document.querySelector("#title h1").innerHTML = this.name;
    
    document.querySelector("#title h3").innerHTML = "Contributed by: " + this.contributor;
    
    document.querySelector("#header").style.backgroundImage = "url(" + this.imgsrc +")";
    
    loadFileInto(this.ingFile, "ingredients");
    loadFileInto(this.equipFile, "equipment");
    loadFileInto(this.dirFile, "directions");
    
    }

}


SpaghettiAglioeOlio = new Recipe(
  "Spaghetti Aglio e Olio",
  "https://media4.s-nbcnews.com/i/newscms/2017_41/1288319/20170828_20170822_11424_pastalikeapro_scottconant_styleddishes_0030_6aa19146b263f4803e6a06c1798de5a0.jpg",
  "Bruno",
  "ingredients.html",
  "equipment.html",
  "directions.html"
  );
  
LemonChickenPiccata = new Recipe(
  "Lemon Chicken Piccata",
  "https://sdutton355.com/tp4/chicken2.jpg",
  "Sophie",
  "ingredients2.html",
  "equipment2.html",
  "directions2.html"
  );
BreadedFriedSoftlySpicedTofu = new Recipe(
"Breaded, Fried, Softly Spiced Tofu",
"https://rkolke355.com/tp4/tp4-image.jpg",
"Rae",
"ingredients3.html",
"equipment3.html",
"directions3.html",
);

  
  














