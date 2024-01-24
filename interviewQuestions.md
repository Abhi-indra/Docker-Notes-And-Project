# Interview Question and Answers on Docker

##### Question 1 - What is Docker?
##### Answer 1 - 
- Docker is an opensource containerization platform. It enables developers to package applications into containers.

##### Question 2 - How Containers are different from Virtual Machines?
##### Answer 2 - 
- Containers are very lightweight in nature because they don't have complete OS. Whereas once you install hypervisor on top of which you have virtual machine which has a complete guest Operating System.

Containers is bascially a combination of application dependencies and some system librabries.

##### Question 3 - What is Docker Lifecycle?
##### Answer 3 - 
- Users would create a Docker file with set of instructiions or commands that defines a docker image. For exapmle, which base image to choose?
what dependencies should be installed for the application to run? etc..

- Docker image act as a set of instructions to buid a Docker Container. It can be compared to a snapshot in a VM.

##### Question 4 - What are different Docker Components?
##### Answer 4 - 
- In docker there are components like Docker client which is called as CLI. Docker host or Docker daemon which is called as a heart of docker (it responsible for receiving your actions). Docker registry which is a repository of docker images.

##### Question 5 - What is the difference between docker COPY and docker ADD?
##### Answer 5 - 
- Docker ADD can copy the files from a URL unlike Docker COPY which can only copy files from host system into the container.

##### Ques##### tion 6 - What is the difference between CMD and ENTRYPOINT in Dockerfile?
##### Answer 6 - 
- CLI arguments using the Docker run command will override the arguments specified using the CMD instruction.

- Wheras ENTRYPOINT instruction in the shell from will override additional arguments provide using CLI parameters or even through the CMD commands.

##### Question 7 - What is the types in Docker and What is the default Network?
##### Answer 7 - 
- Default network type is Bridge Network.
           However, you can changes the default and configure one of the 
           1. Bridge Network
           2. Overlay Network
           3. Host Network
           4. MacVlan Network

##### Question 8 - Can you explain how to isolate the networking between containers?
##### Answer 8 - 
- You can use the network namespace to isolate the networking between containers. You can also use the --net option to specify the network namespace to be used by the container. For obtaining isolations of network you can create own networks.

##### Question 9 - What is a multi-stage build in network?
##### Answer 9 - 
- Multi-stage build allows you to build your docker container in multiple stages allowing you to copy artifacts from one stage to another. The major advantage of multi-stage builds is to build a light weight container.

##### Question 10 - What are distroless image in Docker?
##### Answer 10 - 
- Distroless images contain your application and its runtime dependencies with a very minimum operating system libraries. They do not contain package managers, shells or any other programs you would expect to find a standard Linux distribution. They are very small and lightweight images.

##### Question 11 - What are Real time Challenges in Docker?
##### Anwer 11 - 
- Docker is a single daemon process. Which can cause a single point of failure, if the docker daemon goes down for some reason then all the application on containers are down.

- Dcoker daemon runs as a root user. Which is a security threat. Any process running as a root can have adverse effects. When it is compromised for a security reasons, it can impact other applications or containers on the host.

- Resource contraints: If you are running too many containers on a single host, you may experience issues with resource constraints. This can result in slow performance or crashes. 

##### Question 12 -What steps would you take to secure containers?
##### Answer 12 - Some of the steps are:

- Use distroless or images with not too many packages as your final image in multi-stage build, so that there is less chance of CVE or security issues.

- Ensure that the networking is configured properly. This is one of the most common reasons for security issues. If required configure bridge networks and assign them to isolate containers.

- Use utilities like sync to scan your container images.