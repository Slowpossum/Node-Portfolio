const aboutHTML = `
<p>My name is Thomas, I'm an artist and future web dev from RVA.</p>
<p>This is just a simple page I built to kill some time and act as a host/portfolio of sorts for
current and future projects.</p>
 `;

const portfolioHTML = `
<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/fieldPET.png">
        
    <div class="hidden desc" style="height: 174px">
        <p><b>June 2019</b></p>
        <p>FieldPET aimed to provide a simple and functional interface
        for those doing water quality tests on streams in Virginia.</p>
        <p>I was in charge of designing the interface and setting up forms
        to be used by the mySQL server backend. I also had the very important 
        role of drawing the tiny mayfly next to the logo.</p>
        <p><b>Credits:</b> Thomas Smith, Kensey Barker, Molly Levine, and Austin Kim</p>
        <a href="https://github.com/kenzrad/fieldPET" target="_blank"><b>Github Link</b></a>
        <a href="https://salty-savannah-46210.herokuapp.com/" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>

<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/hebrewCalendar.png">
        
    <div class="hidden desc" style="height: 167px">
        <p><b>April 2019</b></p>
        <p>Hebrew Calendar was a project aimed around providing an easy to use
        interface for converting between hebrew and gregorian calendar dates.</p>
        <p>My duties included designing and coding the front-end interface
        using HTML, CSS, javascript, and jquery, as well as setting up user
        registration, authentication, and data management using Google 
        Firebase.</p>
        <p>The account I used to test functionality is:</p>
        <p><b>Username:</b> test@test.test</p>
        <p><b>Password:</b> 123456</p>
        <p><b>Credits:</b> Thomas Smith, Austin Kim, and Travis Henson</p>
        <a href="https://github.com/Slowpossum/HebrewCalendar" target="_blank"><b>Github Link</b></a>
        <a href="https://slowpossum.github.io/HebrewCalendar/" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>

<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/subwayGame.png">
        
    <div class="hidden desc" style="height: 164px">
        <p><b>March 2019</b></p>
        <p>This was originally intended to be a simple game to practice
        javascript logic and timers, but I expanded the scope to include
        HTML5 canvas and some simple game design concepts.</p>
        <p>The idea behind the game was that subways exist in their own
        bizzare pocket dimension that doesn't follow the world's rules
        of normalcy. Some things happen on subways that can only happen
        on subways... Or something.</p>
        <p>All code and assets were written/drawn by me. Assets were
        drawn using PaintTool SAI.</p>
        <a href="https://github.com/Slowpossum/Subway-Trivia" target="_blank"><b>Github Link</b></a>
        <a href="https://slowpossum.github.io/Subway-Trivia/" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>

<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/gifsGalore.png">
        
    <div class="hidden desc" style="height: 168px">
        <p><b>March 2019</b></p>
        <p>Gifs Galore was my first step into making ajax calls using jquery, 
        using APIs, and local storage. I also wanted to try more interactive design
        techniques with the interface, which resulted in the interesting manner of 
        scrolling the tag holders.</p>
        <p>The UI was built using a mix of my own code and jqueryUI for the 
        animated transitions.</p>
        <a href="https://github.com/Slowpossum/Gifs-Galore" target="_blank"><b>Github Link</b></a>
        <a href="https://slowpossum.github.io/Gifs-Galore/" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>

<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/hangman.png">
        
    <div class="hidden desc" style="height: 164px">
        <p><b>March 2019</b></p>
        <p>This was my first foray into HTML5 canvas. It's a very
        simple hangman clone without too many bells and whistles.
        Hit a key, hang a man. Simple."</p>
        <p>All assets and code were written and drawn by me. A
        combination of PaintTool SAI and Photoshop was used for 
        the assets.</p>
        <a href="https://github.com/Slowpossum/Javascript-Game" target="_blank"><b>Github Link</b></a>
        <a href="https://slowpossum.github.io/Javascript-Game/" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>

<div class="portfolioItem">
    <img src="./assets/images/portfolioImages/fanpage.png">
        
    <div class="hidden desc" style="height: 185px">
        <p><b>January 2019</b></p>
        <p>Despite being one of the first websites I made, I
        still really enjoy the layout of this one; it's clean
        and effective. Originally it was meant to just show off
        very basic HTML knowledge, but I knew a bit of CSS at the
        time, so I included that using the style tags. Were I to
        refactor the code at any point I'd include the CSS in its 
        own file, but it's a nice throwback.</p>
        <a href="/fanpage" target="_blank"><b>Deployed Link</b></a>
    </div>
</div>
`;