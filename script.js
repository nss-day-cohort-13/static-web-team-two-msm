
var products = [
	{ name: "X Wing",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "15,000",
	url: "img/X-Wing-02-icon.png",
	},{ name: "Imperial Shuttle",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "17,000",
	url: "img/Imperial-Shuttle-01-icon.png",
	},{ name: "B Wing",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "12,000",
	url: "img/B-Wing-icon.png",
	},{ name: "Tie Fighter",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "15,000",
	url: "img/Tie-Fighter-01-icon.png",
	},{ name: "Star Destroyer",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "15,000,000",
	url: "img/Imperial-Star-Destroyer-icon.png",
	},{ name: "Death Star",
	description: "Dragée I love halvah lollipop croissant marzipan. Wafer fruitcake oat cake ice cream marshmallow",
	price: "Call for a quote.",
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

