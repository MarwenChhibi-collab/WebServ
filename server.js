const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
var jsonParser = bodyParser.json()

//#region user
app.get('/users', async (req, res) => {
	const users = await prisma.user.findMany({})
	res.json(users)
})

app.get('/users/:id', async (req, res) => {
	const users = await prisma.user.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(users)
})

app.post('/users', jsonParser, async (req, res) => {
	await prisma.user.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/users', jsonParser, async (req, res) => {
	await prisma.user.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/users/:id', async (req, res) => {
	await prisma.user.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion user

//#region article
app.get('/articles', async (req, res) => {
	const articles = await prisma.article.findMany({
	})
	res.json(articles)
})

app.get('/articles/:id', async (req, res) => {
	const articles = await prisma.article.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(articles)
})

app.post('/articles', jsonParser, async (req, res) => {
	await prisma.article.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/articles', jsonParser, async (req, res) => {
	await prisma.article.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/articles/:id', async (req, res) => {
	await prisma.article.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion article

//#region recipe
app.get('/recipes', async (req, res) => {
	const recipes = await prisma.recipe.findMany({
		select: {
			Steps: true,
			UserRecipe: true,
			RatingRecipe: true,
			id: true,
			createdAt: true,
			title: true,
			author: true,
			Category: true,
			preparationTime: true,
			numberPerson: true,
			body: true,
			tip: true
		}
	})
	res.json(recipes)
})

app.get('/recipes/:id', async (req, res) => {
	const recipes = await prisma.recipe.findUnique({
		select: {
			Steps: true,
			UserRecipe: true,
			RatingRecipe: true,
			id: true,
			createdAt: true,
			title: true,
			author: true,
			Category: true,
			preparationTime: true,
			numberPerson: true,
			body: true,
			tip: true
		},
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(recipes)
})


app.post('/recipes', jsonParser, async (req, res) => {
	await prisma.recipe.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/recipes', jsonParser, async (req, res) => {
	await prisma.recipe.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/recipes/:id', async (req, res) => {
	console.log(req.params);
	await prisma.recipe.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion recipe

//#region step
app.get('/steps', async (req, res) => {
	const steps = await prisma.step.findMany({
	})
	res.json(steps)
})

app.get('/steps/:id', async (req, res) => {
	const steps = await prisma.step.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(steps)
})

app.post('/steps', jsonParser, async (req, res) => {
	await prisma.step.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/steps', jsonParser, async (req, res) => {
	await prisma.step.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/steps/:id', async (req, res) => {
	console.log(req.params);
	await prisma.step.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion step

//#region savedRecipe
app.get('/savedRecipes', async (req, res) => {
	const savedRecipes = await prisma.savedRecipe.findMany({
	})
	res.json(savedRecipes)
})

app.get('/savedRecipes/:id', async (req, res) => {
	const savedRecipes = await prisma.savedRecipe.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(savedRecipes)
})

app.post('/savedRecipes', jsonParser, async (req, res) => {
	await prisma.savedRecipe.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/savedRecipes', jsonParser, async (req, res) => {
	await prisma.savedRecipe.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/savedRecipes/:id', async (req, res) => {
	await prisma.savedRecipe.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion savedRecipe

//#region ratingRecipe
app.get('/ratingRecipes', async (req, res) => {
	const ratingRecipes = await prisma.ratingRecipe.findMany({
	})
	res.json(ratingRecipes)
})

app.get('/ratingRecipes/:id', async (req, res) => {
	const ratingRecipes = await prisma.ratingRecipe.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(ratingRecipes)
})

app.post('/ratingRecipes', jsonParser, async (req, res) => {
	await prisma.ratingRecipe.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/ratingRecipes', jsonParser, async (req, res) => {
	await prisma.ratingRecipe.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/ratingRecipes/:id', async (req, res) => {
	await prisma.ratingRecipe.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion ratingRecipe

//#region adress
app.get('/adresss', async (req, res) => {
	const adresss = await prisma.adress.findMany({
	})
	res.json(adresss)
})

app.get('/adresss/:id', async (req, res) => {
	const adresss = await prisma.adress.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(adresss)
})

app.post('/adresss', jsonParser, async (req, res) => {
	await prisma.adress.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/adresss', jsonParser, async (req, res) => {
	await prisma.adress.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/adresss/:id', async (req, res) => {
	await prisma.adress.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion adress

//#region webAdress
app.get('/webAdresss', async (req, res) => {
	const webAdresss = await prisma.webAdress.findMany({
	})
	res.json(webAdresss)
})

app.get('/webAdresss/:id', async (req, res) => {
	const webAdresss = await prisma.webAdress.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(webAdresss)
})

app.post('/webAdresss', jsonParser, async (req, res) => {
	await prisma.webAdress.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/webAdresss', jsonParser, async (req, res) => {
	await prisma.webAdress.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/webAdresss/:id', async (req, res) => {
	await prisma.webAdress.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion webAdress

//#region like
app.get('/likes', async (req, res) => {
	const likes = await prisma.like.findMany({
	})
	res.json(likes)
})

app.get('/likes/:id', async (req, res) => {
	const likes = await prisma.like.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(likes)
})

app.post('/likes', jsonParser, async (req, res) => {
	await prisma.like.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/likes', jsonParser, async (req, res) => {
	await prisma.like.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/likes/:id', async (req, res) => {
	await prisma.like.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion like

//#region comment
app.get('/comments', async (req, res) => {
	const comments = await prisma.comment.findMany({
	})
	res.json(comments)
})

app.get('/comments/:id', async (req, res) => {
	const comments = await prisma.comment.findUnique({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.json(comments)
})

app.post('/comments', jsonParser, async (req, res) => {
	await prisma.comment.create({
		data: req.body
	})
	res.sendStatus(200);
})

app.put('/comments', jsonParser, async (req, res) => {
	await prisma.comment.update({
		data: req.body,
		where: {
			id: req.body.id
		}
	})
	res.sendStatus(200);
})

app.delete('/comments/:id', async (req, res) => {
	await prisma.comment.delete({
		where: {
			id: parseInt(req.params.id)
		}
	})
	res.sendStatus(200);
})
//#endregion comment

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});