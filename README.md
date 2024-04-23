Vercel like application you can just give your github repository URL and this application can automatically build and deploy the app. later you can open the builded application.
Frontend : React, Shadcn 
Backend: Typescript, Redis for PubSub, AWS S3 or R2 Cloudflare for storaging uploaded data.

This Application has 3 modules 
1. Uploadservice were you can upload the file. uploaded file is stored in local dist/output as well as in R2(output) folder.
2. Deployservice were it automatically takes the uploaded file from R2 and build the project and it will once again upload into local dist/output as well as in R2(dist) folder.
3. RequestHandler here link to builded project is created and you can take the link and browse to open the applicatioon like http://{filename generated in R2 dist folder}.{domain name}:{port}/index.html
4. example http://vawfag.vercel.com:3001/index.html.

Thanks
