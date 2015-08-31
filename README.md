# image_transformer

This is just a test for microservice.  

Run `docker build -t image-transformer .` and then you will build a docker image width official node:latest and imagemagick:latest env.

I tried with docker 1.7, and there is no more test for other version.  

Then run some code like this:  

`docker run -d -p 8081:8081 --name image-transformer -w /app -v "$(pwd)":/app -v  image-transformer npm start`  

and you will get some image service from the server.js, if you want to get more about node with imagemagick, click [here](https://github.com/aheckmann/gm)  

The server.js and test folder are just tmp files for a test of the docker image