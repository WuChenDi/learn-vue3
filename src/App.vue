<template>
  <div id="app-vue">
    <section class="introduceWrap">
      <div class="introduce">
        <h1>
          <span class="introduce_a">Hello.</span
          ><span>This is my Favourite Things!</span>
        </h1>
        <p class="introduceTxt">
          Do you want to know me? Below are my three favorite things. I like Van
          Gogh’s paintings. I like reading Pride and Prejudice. I am still a
          person who likes spicy food. I like to eat all kinds of spicy food. My
          favorite is Chinese spicy hot pot! What about u?
        </p>
      </div>
    </section>

    <section class="lightboxes">
      <div class="sdfsdfds">
        <button class="button">X</button>
        <h2 class="h2s">Description</h2>
        <img class="imagen" src="./assets/images/book.jpg" />
        <p class="description"></p>
      </div>
    </section>

    <main id="app" class="maintop">
      <!-- this is an HTML component -->
      <nav class="main-nav">
        <ul>
          <li class="nav-item"><a href="#">Painting</a></li>
          <li class="nav-item"><a href="#">Hotpot</a></li>
          <li class="nav-item"><a href="#">Book</a></li>
        </ul>
      </nav>
      <!-- end component -->

      <!-- add a users section here -->
      <section class="favourite-section">
        <!-- user-template copies get rendered here -->

        <div class="favouriteThings">
          <img
            src="./assets/images/Painting.jpg"
            alt="favourite-avatar"
            width="400px"
            height="300px"
            id="1"
          />
          <h2 class="favourite-name" align="center">Almond Blossom</h2>
          <p class="favourite-type">Oil on Canvas</p>
          <p class="favourite-reason">
            I love Vincent Willem van Gogh when I was young. This painting
            creates the joy of spring.
          </p>
        </div>

        <div class="favouriteThings">
          <img
            src="./assets/images/hotpot.jpg"
            alt="favourite-avatar"
            width="400px"
            height="300px"
            id="2"
          />
          <h2 class="favourite-name" align="center">Spicy Hotpot</h2>
          <p class="favourite-type">Chinese Food</p>
          <p class="favourite-reason">
            I love spicy food very much and hotpot is delicious and convenient!
          </p>
        </div>

        <div class="favouriteThings">
          <img
            src="./assets/images/book.jpg"
            alt="favourite-avatar"
            width="400px"
            height="300px"
            id="3"
          />
          <h2 class="favourite-name" align="center">Pride and Prejudice</h2>
          <p class="favourite-type">Novel of manner</p>
          <p class="favourite-reason">
            it is a classic love story and it set the pattern for a modern
            popular love story.
          </p>
        </div>
      </section>
      <!-- end users section -->
    </main>
    <div class="videWrap">
      <h1><span class="videWrap_a">VIDEO</span></h1>
      <p class="introduceTxt">
        what about your favourite? Can you share with me?
      </p>
    </div>

    <div class="videmedia">
      <video
        width="750px"
        height="350px"
        src="./assets/images/video_1.mp4"
        controls="controls"
      ></video>
    </div>

    <footer>@copyright Cindy 2020</footer>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/master.scss";
</style>
