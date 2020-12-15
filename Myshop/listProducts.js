var faker=require("faker");
console.log("====================");
console.log("WELCOME");
console.log("====================");
faker.seed(123);
for(var i=0;i<10;i++){
	console.log(faker.fake("{{commerce.productMaterial}}- ${{commerce.price}} "));	
}
