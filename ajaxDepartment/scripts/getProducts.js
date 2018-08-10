
// // create XHR objects
// const getProductData = $.ajax({"url": "./products.json"})
// const getCategoryData = $.ajax({"url": "./categories.json"})
	
// // invoke XHR objects
// let getProducts = getProductData.then(productData => {
    
// 	//products holds the "products" object and then drills down to the key on the object
// 	const products = productData.products
// 	return products
// })
// 	.then(products => {
// 		// this must be outside the scope of the product function - and the first request needs to be completed before the 2nd function can run to build up the string.
// 		let categories
// 		getCategoryData.then(categoryData => {
// 			categories = categoryData
// 			return categories
// 		})
// 		// return a promise here and then do a .then to print to page
// 		return productObject = {
// 			"product": products,
// 			"category": categories
// 		}
			
// 	})
		

// module.exports = getProducts
    

    
    





