# Traditional VS API Server

## Listing all resources
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|List all |GET   |/posts|false|false|200|Content-Type|html|
|API        |List all |GET   |/posts|false|false|200|Content-Type|json|

## Getting a single resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Single |GET   |/posts/:id|false|false|200|Content-Type|html|
|API        |Single |GET   |/posts/:id|false|false|200|Content-Type|json|

## Getting the form to create a resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Get form |GET   |/posts/new|false|false|200|Content-Type|html|
|API        |N/A |N/A   |N/A|N/A|N/A|N/A|N/A|N/A|

## Creating a resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Create |POST   |/posts|Content-Type|x-www-form-urlencoded|302|location|false|
|API        |Create |POST   |/posts|Content-Type|json|201|Content-Type|json|

## Getting the form to edit a resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Get form |GET   |/posts/:postId/edit|false|false|200|Content-Type|html|
|API        |N/A |N/A   |N/A|N/A|N/A|N/A|N/A|N/A|

## Editting a resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Edit resource |POST   |/posts/:postId|Content-Type|x-www-form-urlencoded|302|Location|false|
|API        |Edit resource |PUT/PATCH |/posts/:postId|Content-Type|json|200|Content-Type|json|

## Deleting a resource
|           |Operation|Method|URL|Headers|Body|Status|Headers|Body|
|-----------|---------|------|---|-------|----|------|-------|----|
|Traditional|Delete resource |POST   |/posts/:postId/delete|false|false|302|Location|false|
|API        |Delete resource |DELETE |/posts/:postId|false|false|200|Content-Type|json|