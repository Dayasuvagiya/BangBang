### Table of contents
- [BangBnag](#bangbnag)
  - [UX](#ux)
      - [Site Purpose](#site-purpose)
      - [Audience](#audience)
      - [Communication](#communication)
      - [User Goals](#user-goals)
      - [Future Goals](#future-goals)
  - [Design](#design)
      - [Wireframes](#wireframes)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
      - [Imagery](#imagery)
  - [Features](#features)
      - [Existing Features](#existing-features)
          - [Landing Page](#landing-page)
          - [Popup Button](#popup-button)
          - [Quiz Area](#quiz-area)
          - [Final Score Screens](#final-score-screens)
          - [404 Page](#404-page)
   - [Features Left to Implement](#features-left-to-implement)
       - [Multiple levels of difficulty](#multiple-levels-of-difficulty)
       - [Timer](#timer)
   - [Testing](#testing) 
       - [Manual Testing](#manual-testing)
       - [Validator Testing](#validator-testing)
   - [Technologies Used](#technologies-used)
       - [Main Languages Used](#main-languages-used)
       - [Programs Used](#programs-used)
   - [Deployment And Local Development](#deployment-local-development)
       - [Deployment](#deployment)
       - [Local Development](#local-development)
         - [How to Fork](#how-to-fork)
         - [How to Clone](#how-to-clone)
   - [Credits](#Credits)
       - [Images](#images)
       - [Code](#code)
       - [Others](#others)
       - [Future Improvements](#future-improvements)
       
# BangBnag

The BangBang game is a quiz, designed for individuals learning German, allowing users to expand their vocabulary through the use of visual imagery.
<div align="center">
  <img width="1034" alt="Screenshot 2023-06-07 at 12 16 51" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/0f7b1f25-4f2f-4252-a471-4ed5e2dd1016">
  </div>

The BangBang site is live, the links can be found [HERE](https://dayasuvagiya.github.io/BangBang/game.html)

## UX

### Site Purpose

The quiz is specifically crafted to present users with ten challenging questions related to learning the German language. After completion of quizz, users have the opportunity to check their answers. At the end of the quiz, a final score is provided, accompanied by a congratulatory message or an encouragement to retake the quiz.

### Audience

The German vocabulary learner is targeted towards individuals who are interested in expanding their knowledge of the German language and improving their vocabulary skills. This audience may include language learners, students studying German, individuals preparing for language exams, or anyone seeking to enhance their German language proficiency.

### Communication

The design of the quiz was deliberately kept exceptionally simple to ensure user-friendly navigation. By clicking the "Start" button, users can initiate the quiz, and they also have the option to read the instructions before beginning the game. As soon as the quiz starts, the landing page presents the first question instantly, and the visual layout of the quiz facilitates intuitive progression through the ten questions. Upon answering the final question, users are promptly notified of their ultimate score.

### User Goals

The user's primary goal for this game is to enhance their German vocabulary proficiency. By engaging in the quiz and actively participating in the learning process, the user aims to expand their knowledge of German words and their meanings. The game provides an interactive and engaging platform where users can test their understanding of vocabulary in a fun and challenging way.
If they wish to retake the quiz at the end to better their score, then a button is displayed to start the quiz again.

### Future Goals

To further enhance user engagement and cater to a broader audience, additional questions can be incorporated into the quiz, including varying levels of difficulty. Here are a few examples:

Easy level:
Which word in German translates to "hello"?
a) Guten Tag
b) Auf Wiedersehen
c) Danke

Medium level:
What is the German word for "car"?
a) Fahrrad
b) Auto
c) Haus

Difficult level:
Which verb means "to travel" in German?
a) Essen
b) Schlafen
c) Reisen

To add an extra layer of challenge and time constraint, a timer can be displayed for each question, prompting users to answer within a limited amount of time. For instance, users may have 30 seconds or 1 minute to select their answer before the timer runs out.

The inclusion of additional questions and the implementation of a timer can increase user engagement, create a sense of urgency, and add an element of excitement to the quiz, motivating users to complete it while sharpening their vocabulary skills within a given timeframe.

## Design

### Wireframes
![main-page wireframe](assets/images/images_readme/mainpage_wireframe.png)
![popup-wireframe](assets/images/images_readme/popup_wireframe.png)
![maingame-wireframe](assets/images/images_readme/gamepage_wireframe.png)


### Colour Scheme

The color scheme chosen for the quiz consists of two primary colors: RGB(0, 90, 60) and RGB(214, 251, 238), along with the classic colors white and black.

The main color, RGB(0, 90, 60), is a deep shade of green that conveys a sense of freshness and vitality. This color choice brings a visually appealing and energizing element to the quiz, creating an engaging environment for the users.

### Typography

The font selection for the quiz includes the use of "Roboto Slab" in both regular and bold variations, which are sourced from the Google Fonts library. 
"Roboto Slab" is a versatile and modern font choice that offers a balance between readability and aesthetic appeal. The regular variant provides a clean and straightforward appearance, while the bold variant adds emphasis and visual weight to text elements.

### Imagery

The quiz features a simple background image and other quiz images sourced from a reputable search engine, such as [Yandex](https://yandex.com/). The image is chosen to provide a clean and unobtrusive backdrop for the quiz interface. The simplicity of the background image ensures that the focus remains on the quiz content and enhances the overall user experience by creating a visually pleasing environment.

In the quiz, the questions are presented in the form of images. Users are shown various images depicting objects, and their task is to select the correct word that corresponds to the image. This format adds a visual component to the quiz, allowing users to connect the visual representation of the object with their knowledge of German vocabulary.

## Features

### Existing Features

#### Landing Page :

<div align="center">
  <img width="1034" alt="front_page" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/fead1a6f-0017-421d-9469-acb47d7e76f9">
  </div>

On the first page of the quiz user can find two buttons a'Start' button and 'Instruction' button, prominent "Start" button is provided, allowing users to begin the quiz with a simple click. Or before going to jump on the game user can also read some instructions. 

#### Popup Button :

<div align="center">
  <img width="1173" alt="popup_button" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/9312940c-75b0-46d2-b6af-9eb5010e82a9">
  </div>

When the user clicks on the "Instruction" button, a popup window will appear, providing instructions and guiding them on how to proceed the game. This popup window serves as a convenient and accessible way to present the instructions without navigating away from the main quiz page.

#### Quiz Area :

<div align="center">
  <img width="1180" alt="gamepage" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/b573ff21-7b08-4b4b-a993-f1fc5ae0f460">
  </div>

In the quiz, each question is accompanied by four answer options for the user to choose from. Upon selecting an answer, the button corresponding to the chosen option responds accordingly. If the chosen answer is correct, the button background turns green, indicating the user's accurate response. Conversely, if the user selects an incorrect answer, the button background turns red, signaling an incorrect choice.

The quiz comprises a total of ten questions, each designed to assess the user's knowledge of German vocabulary. While some questions and answers are created from scratch to suit the quiz's purpose, others have been sourced and adapted from reliable online quizzes. This combination ensures a diverse range of vocabulary challenges and provides an engaging experience for the user.

Upon completing all ten questions, the user is presented with a summary that displays the number of correct and incorrect answers they have provided. This feedback provides a clear overview of their performance and allows users to assess their progress and learning outcomes from the quiz.

At the end of the game, users are provided with the opportunity to review the quiz and see the correct answers along with the corresponding images. This feature aims to support users in their learning journey and aid in their further improvement.

#### Final Score Screens :

<div align="center">
  <img width="1436" alt="final_page" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/e27f4bd9-05c3-47cd-9d55-737a99db1171">
  </div>

Once the user has answered the last question and clicked the "Next One" button, the quiz concludes, and the final score is displayed. The user's performance is evaluated based on the number of correct answers provided throughout the quiz.

#### 404 Page :

<div align="center">
  <img width="1180" alt="404page" src="https://github.com/Dayasuvagiya/BangBang/assets/130157117/d180c835-362a-4f48-b3a4-1f381ff20156">
  </div>

A 404.html page notifies the user with the following message:"Ooops! Page not found., We can't find the page you'are looking for. Go back to the Homepage".
The word "homepage" is clickable and redirects the user to the main page of the BangBang Quiz.

### Features Left to Implement

#### Multiple levels of difficulty:

- Provide options for users to select different levels of difficulty.
- Each difficulty level can introduce progressively complex vocabulary or require more nuanced understanding of the language.
- Accommodate both beginners and advanced learners, catering to a broader audience.

#### Timer:

- Integrate a timer feature into the quiz.
- Users will have a limited amount of time to select their answer for each question.
- Create a sense of pressure and urgency, challenging users to think quickly and accurately.
- Add excitement and competitiveness to the quiz, enhancing user engagement.
- These additional features can enhance the user experience, cater to different skill levels, and provide an extra level of challenge. They contribute to the overall engagement and motivation of the users, encouraging continued language learning and improvement.

## Testing

### Manual Testing

| Test                                                                                                                                                             | Outcome                                                                                                                                                                                                   
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
| Open the first page.                                                                                                                                              | Two buttons working with click to start and for Instruction.
| Open landing page.                                                                                                                                               | An event listener waits for the DOM to finish loading before running the quiz. The first image and frour options are displayed. 
| Select the correct answer.                                                                                                                                       | The correct answer button turns green. The other two options are cannot be selected. The Next and Home buttons are displayed.                                                                      
| Click on the Next One button.                                                                                                                                    | The quiz area is cleared. The subsequent question is displayed together with the possible answers. The numbering of the questions increases by one. T
| Select an incorrect answer.                                                                                                                                      | The selected incorrect answer turns red. The other options cannot be selected. The Next and Home buttons are displayed.                                  
| Select a random answer to the last question and click the Next button.                                                                                           | The quiz area is cleared. The final score is displayed as well as a short message. The Next button turns into a button nudging the user to try the quiz again. All question images with correct answer displayed.                  
| Click on the Play again button.                                                                                                                         | The landing page is loaded and the first question is displayed in the quiz area along with the four options.  

### Validator Testing

- The HTML file passed through the [W3C validator](https://validator.w3.org/) with no issues found.

- The CSS file passed through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.

- The JS file passed through [JSHint](https://jshint.com/) with no issues found.

- The page has an excellent Accessibility rating in Lighthouse for both Desktop and Device.

- The site was tested in Chrome and Safari without issues.

- All links open to external pages as intended.

## Technologies Used

### Main Languages Used

- HTML5
- CSS3
- JavaScript

### Programs Used

- [Am I Responsive?](http://ami.responsivedesign.is/) - To show the website image on a range of devices.

- [Yandex](https://yandex.com/) - To download quality images for background and png images.

- [Google Developer Tools](https://developers.google.com/web/tools) - To troubleshoot and test features, solve issues with responsiveness and styling.

- [Google Fonts](https://fonts.google.com/) - To import the fonts used for the website.

- [ColorZilla](https://www.colorzilla.com/) - To pick specific shades of colour from the background image.

- [Favicon.io](https://favicon.io/) - To create the favicon.

- [Git](https://git-scm.com/) - For version control.

- [Github](https://github.com/) - To save and store the files for the website.

- [Pexels](https://www.pexels.com/) - To source the background picture.

- [TinyPNG](https://tinypng.com/) - To compress images.

## Deployment And Local Development

### Deployment

The site is deployed using GitHub Pages.

To Deploy the site using GitHub Pages:

1. Login (or signup) to Github.
2. Go to the repository for this project, [BangBang URL](https://dayasuvagiya.github.io/BangBang/).
3. Click the settings button.
4. Select pages in the left hand navigation menu.
5. From the source dropdown select main branch and press save.
6. The site has now been deployed. This process may take a few minutes before the site goes live.

### Local Development

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [BangBang URL](https://dayasuvagiya.github.io/BangBang/).
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [BangBang URL](https://dayasuvagiya.github.io/BangBang/).
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Credits

### Images

- The background image for the quiz was sourced from the website https://yandex.com/.
- PNG images were also sourced from the same website to be used as question images.

### Code

- The basic structure of the quiz code used in the project drew inspiration from various YouTube videos and W3School Tutorial.
- The YouTube videos provided valuable insights and guidance on how to structure and organize the quiz code effectively.
- Additionally, the code implementation incorporated a few tricks inspired by A. Grieves' Love Maths Walkthrough Project from Code Institute.
- The Love Maths Walkthrough Project served as a reference for implementing certain functionalities or techniques in the quiz code.

### Others

- A special acknowledgment goes to my Code Institute Mentor for their invaluable support and encouragement throughout the development of the quiz.
- The mentor provided guidance, feedback, and assistance, helping to shape the project and improve its overall quality.
- am grateful for their contributions and thankful for the guidance and support they provided during the project.

### Future Improvements
- Enhance the quality of commit messages when committing and pushing code to GitHub.
- Focus on providing clear, concise, and descriptive commit messages.
- Communicate the purpose and changes made in each commit effectively.
- Aim for a more organized and structured version history in the GitHub repository.
