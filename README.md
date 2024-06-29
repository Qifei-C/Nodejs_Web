# Portfolio React Webpage 

*powered by Nodejs on AWS*

This repository contains the source code for my personal website, which I have re-deployed on AWS EC2 from a VPC provider. The website showcases my portfolio, blog, and contact information. It is built using node_js and follows AWS Cloud practices for deployment and maintenance. All sensitive data has been erased for a usage of demo.

You may see the deployed website on [qifei-c.com](https://qifei-c.com)



## Updates

### 2024-06-30
Animated Background for Home Section:
-	Added an animated gradient background that is confined to the “Home” section.
-	New CSS keyframes to create sliding animation.

CSS Updates:
-    Home component and background elements is now wrapped in `.home-container` class.
-	Ensured the background does not cause horizontal scrolling by setting `overflow-x: hidden` on the body and html.

Styling Adjustments:
-    Applied custom styles to the scroll down link to prevent it from appearing as a default hyperlink.
-    Enhanced the visual appeal of the “About” section by increasing the size of the first letter of each paragraph without affecting line spacing.

### 2024-06-29

- Added detailed deployment instructions, including troubleshooting tips for security group and port settings.
- Included credits for the video tutorial and open resources used in the website.

### 2024-06-26

- Added dynamic full-windowed homepage background based on CSS Styles.
- Added windows size listening function, including a jumpping trigger to a warning page for accessing from device with viewport width of 980 pixels.

### 2024-02-24

- Added a pop-up windows for people complete specific tasks.

### 2024-02-19

- Add tracking pages based on json database.




## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)



## Features

- **Responsive Design**: Optimized for all devices, providing a great user experience on mobile, tablet, and desktop.
- **Contact Form**: Allows visitors to get in touch directly through the website.
- **SEO Optimization**: Improved search engine visibility to reach a wider audience.



## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/personal-website.git
    cd personal-website/qifei
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

The website should now be running on the experimental environment at `http://localhost:3000`.



## Usage

The website is organized into the following main sections:

- **Home**: An introduction and overview of who I am.
- **Portfolio**: A detailed view of my projects, including descriptions, images, and links.
- **Blog**: A collection of articles and posts.
- **Contact**: A form for visitors to send messages directly through Amazon SNS.



## Deployment on AWS

The website is deployed on an AWS EC2 instance. Follow these steps to deploy instance:

1. **Set up AWS EC2**:

   - Launch an EC2 instance with the desired configuration.
   - SSH into the instance and set up environment (Node.js, npm).

2. **Transfer files to EC2**:

   - Use `scp` or any other file transfer method to upload the project files to your EC2 instance.

3. **Install dependencies and build the project**:

   ```sh
   cd /path/to/project/qifei
   npm install
   npm run build
   ```

4. **Run the application**:

   ```sh
   npm start
   ```

5. **Configure Nginx (optional)**:

   - Install and configure Nginx as a reverse proxy to manage requests and improve security and performance.

   - Create an Nginx configuration file for site:

     ```sh
     sudo nano /etc/nginx/sites-available/default
     ```

     Example configuration:

     ```sh
     server {
         listen 80;
         server_name your_domain_or_IP;
     
         location / {
             proxy_pass http://localhost:3000;
             proxy_http_version 1.1;
             proxy_set_header Upgrade $http_upgrade;
             proxy_set_header Connection 'upgrade';
             proxy_set_header Host $host;
             proxy_cache_bypass $http_upgrade;
         }
     }
     ```

6. **Security Group and Port Settings**:

   - Ensure your EC2 instance's security group allows traffic on the necessary ports.

     - Port 22 for SSH access.
     - Port 80 for HTTP traffic.
     - Port 443 for HTTPS traffic (if SSL is configured).

   - Troubleshooting tips:

     - If you cannot access your site, check the security group settings in the AWS EC2 Management Console to ensure the correct ports are open.

     - Verify your instance's IP address or domain name is correctly pointing to your EC2 instance.

     - If you're using Nginx, ensure the configuration is correct and that the Nginx service is running:

       ```sh
       sudo systemctl status nginx
       ```

     - Check the firewall settings on your EC2 instance to ensure they are not blocking necessary traffic:

       ```sh
       sudo ufw status
       ```



## Credits

The structure and some of the CSS formatting for this website were inspired by the video tutorial series by [Traversy Media](https://www.youtube.com/watch?v=o3IP5HeFRO0&list=PLrKudo5h_b8DNVrsMdvR0G-ckA9o2m_13).

### Open Resources

The website utilizes the following open resources:

- **Logos**: Icons and logos from [Font Awesome](https://fontawesome.com/).
- **Icons**: Various icons from [Font Awesome](https://fontawesome.com/).
- **Fonts**: Google Fonts, specifically using [Roboto](https://fonts.google.com/specimen/Roboto) and [Open Sans](https://fonts.google.com/specimen/Open+Sans).



## License

Distributed under the MIT License. See `LICENSE` for more information.
