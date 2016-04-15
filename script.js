var products = [
	{ name: "X-wing",
	description: "The Incom T-65 X-wing is the fighter that killed the Death Star. An almost perfect balance of speed, maneuverability, and defensive shielding make it the fighter of choice for Rogue Squadron",
	price: "15,000",
	url: "img/X-Wing-02-icon.png",
	},{ name: "Imperial Shuttle",
	description: "'No, I don't think the Empire had Wookiees in mind when they designed her, Chewie.' ―Han Solo to Chewbacca",
	price: "17,000",
	url: "img/Imperial-Shuttle-01-icon.png",
	},{ name: "B-wing",
	description: "'You're among the best pilots in the galaxy. You'll have to be if you want to control this starship.' ―Admiral Ackbar briefing B-wing pilots prior to the Battle of Endor",
	price: "12,000",
	url: "img/B-Wing-icon.png",
	},{ name: "Tie Fighter",
	description: "'…Seinar System's basic TIE fighter—a commodity which, after hydrogen and stupidity, was the most plentiful in the galaxy' ―Corran Horn",
	price: "15,000",
	url: "img/Tie-Fighter-01-icon.png",
	},{ name: "Star Destroyer",
	description: "'When citizens look at a Star Destroyer and then compare it to the craft which might be mustered to attack it, they have a tendency to dismiss such a notion as suicidal rather than approach the problem tactically.' ―Grand Moff Wilhuff Tarkin",
	price: "15,000,000",
	url: "img/Imperial-Star-Destroyer-icon.png",
	},{ name: "Death Star",
	description: "'This station is now the ultimate power in the universe. I suggest we use it.' ―Admiral Motti",
	price: "Call for a quote!",
	url: "img/Death-Star-1st-icon.png",
	}] ;

// console.log("products", products );

var productElements = document.getElementById("products");
console.log("productElements", productElements );


// Use Javascript to add products

var productSelection = productElements[0];

for (var i = 0; i < products.length; i++) {
	var currentProduct = products[i];
	var img = "<div class='product'><div class='productimg'><img src='" + currentProduct.url + "' alt='" + currentProduct.name + "'></div>";
	var name = "<div class='carddescription'><div class='productName'><h2>" + currentProduct.name + "</h2></div>";
	var description = "<div class='productDescription'><p>" + currentProduct.description + "</p></div>";
	var price = "<div class='productPrice'><h4>" + currentProduct.price + "</h4></div>";
	var button = "<div class='button'><input type='button' value='Read More'></div></div><div>";


	productElements.innerHTML += img + name + description + price + button;
}

// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.



// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.












