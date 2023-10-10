# cloud-portfolio-azure
My cloud portfolio running on azure cloud services.

## Initial Setup
- Frontend folder contains the main website.
- ``` id="counter" ``` in index.html calls the function in main.js, which holds the visitor counter code.
- Backend folder contains the Azure api function.

## Front-end resources

The front-end is a static site with HTML, CSS, and JavaScript. It's static and has a visitor counter. The visitor counter data fetched via an API call to an Azure Function.

- This [article](https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data) explains how to make an API call with JavaScript and in a simple way how to use it to make an API call.
- [Azure storage explorer](https://azure.microsoft.com/en-us/features/storage-explorer/) is a handy tool to use when working with Storage Accounts
- This is how you can [deploy static site to blob storage.](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website-host)
  
## Back-end resources

The back-end is an [HTTP triggered](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook-trigger?tabs=csharp) Azure Functions with Cosmos DB input and output binding. The Function is triggered, it retrieves the CosmosDB item, add +1 to it, and saves it and returns its value to the caller.

- [Prerequisites for developing functions with visual code locally.](https://docs.microsoft.com/en-us/azure/azure-functions/create-first-function-vs-code-csharp)
- [Create a Cosmos DB account via command line](https://azure.microsoft.com/en-us/resources/templates/101-cosmosdb-free/) or [from the portal](https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal).
- [Create an HTTP triggered Azure Function in Visual Studio Code.](https://docs.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=csharp)
- [Azure Functions Cosmos DB bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2)
- [Retrieve a Cosmos DB item with Functions binding.](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-input?tabs=csharp)
- [Write to a Cosmos DB item with Functions binding.](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-cosmosdb-v2-output?tabs=csharp)
- You'll have to [enable CORS with Azure Functions](https://github.com/Azure/azure-functions-host/issues/1012) locally and once it's [deployed to Azure](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings?tabs=portal#cors) for you website to be able to call it.

## Testing Resources

- [Testing is important.](https://dev.to/flippedcoding/its-important-to-test-your-code-3lid)
- [Getting Started with xUnit.net.](https://xunit.net/docs/getting-started/netcore/cmdline)
- [How to setup Xunit with Azure Functions.](https://madebygps.com/how-to-use-xunit-with-azure-functions/)
- [Testing Azure Functions.](https://docs.microsoft.com/en-us/azure/azure-functions/functions-test-a-function)
  
## CI/CD Resources

- This is how you can deploy a blob storage static site with [GitHub actions.](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-static-site-github-actions) Used in frontend.main.yml.
- This is how you can deploy an [Azure Function to Azure with GitHub Actions.](https://github.com/madebygps/cgc-azure-resume/blob/main) Used in backend.main.yml
- [Implement .NET testing in GitHub Actions.](https://docs.github.com/en/actions/guides/building-and-testing-net)