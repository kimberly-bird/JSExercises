// let getProducts = require("./getProducts")

// const outputEl = $("#department-products")
// // separate function and invoke on load + event listener and pass in discount
// let displayDOM = function () {
// 	let finalHTML = ""
// 	getProducts.then( productObject => {

// 		productObject.product.forEach(item => {
// 			// find the category for the product using a foreign key
// 			const productCategory = productObject.category.find(current => current.id === item.category_id)
			
// 			finalHTML += `
// 				<article id="product_${item.id}>
// 					<p>Name: ${item.name}</p>
// 					<p>Category: ${productCategory.name}</p>
// 					<p>Price: $${item.price}</p>
// 				</article>
// 				` 
// 		})
// 	}
// 	)
// 	// needs to be outside the scope to print full inner HTML
// 	outputEl.html(finalHTML)
// }
    
// module.exports = displayDOM
    