function createArticle() {
	
	const articleTitle = document.getElementById("createTitle");
	const content = document.getElementById("createContent");

	const articles = document.getElementById("articles")
	
	
	const h3 = document.createElement("h3");
	const p = document.createElement("p");
	const article = document.createElement("article")

	if(articleTitle.value !=="" && content.value!==""){
		h3.innerHTML = articleTitle.value;
		p.innerHTML = content.value;
		articles.appendChild(article);
		article.appendChild(h3);
		article.appendChild(p);
		
	}
	articleTitle.value = ""
	content.value = "";
	
	//TODO...
}