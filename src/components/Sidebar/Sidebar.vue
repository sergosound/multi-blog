<template>
  <section id="sidebar">
    <!-- Intro -->
    <section id="intro">
      <router-link to="/" class="logo"
        ><img src="../../assets/images/logo.jpg" alt=""
      /></router-link>
      <header>
        <h2>Future Imperfect</h2>
        <p>
          Another fine responsive site template by
          <router-link to="/">HTML5 UP</router-link>
        </p>
      </header>
    </section>

    <!-- Mini Posts -->
    <section>
      <div class="mini-posts">
        <!-- Mini Post -->
        <article class="mini-post">
          <header>
            <h3><router-link to="/">Vitae sed condimentum</router-link></h3>
            <time class="published" datetime="2015-10-20"
              >October 20, 2015</time
            >
            <router-link to="/" class="author"
              ><img src="../../assets/images/avatar.jpg" alt=""
            /></router-link>
          </header>
          <router-link to="/" class="image"
            ><img src="../../assets/images/pic04.jpg" alt=""
          /></router-link>
        </article>

        <!-- Mini Post -->
        <article class="mini-post">
          <header>
            <h3><router-link to="/">Rutrum neque accumsan</router-link></h3>
            <time class="published" datetime="2015-10-19"
              >October 19, 2015</time
            >
            <router-link to="/" class="author"
              ><img src="../../assets/images/avatar.jpg" alt=""
            /></router-link>
          </header>
          <router-link to="/" class="image"
            ><img src="../../assets/images/pic05.jpg" alt=""
          /></router-link>
        </article>

        <!-- Mini Post -->
        <article class="mini-post">
          <header>
            <h3><router-link to="/">Odio congue mattis</router-link></h3>
            <time class="published" datetime="2015-10-18"
              >October 18, 2015</time
            >
            <router-link to="/" class="author"
              ><img src="../../assets/images/avatar.jpg" alt=""
            /></router-link>
          </header>
          <router-link to="/" class="image"
            ><img src="../../assets/images/pic06.jpg" alt=""
          /></router-link>
        </article>

        <!-- Mini Post -->
        <article class="mini-post">
          <header>
            <h3><router-link to="/">Enim nisl veroeros</router-link></h3>
            <time class="published" datetime="2015-10-17"
              >October 17, 2015</time
            >
            <router-link to="/" class="author"
              ><img src="../../assets/images/avatar.jpg" alt=""
            /></router-link>
          </header>
          <router-link to="/" class="image"
            ><img src="../../assets/images/pic07.jpg" alt=""
          /></router-link>
        </article>
      </div>
    </section>

    <!-- Posts List -->
    <section>
      <ul class="posts">
        <li>
          <article>
            <header>
              <h3>
                <router-link to="/"
                  >Lorem ipsum fermentum ut nisl vitae</router-link
                >
              </h3>
              <time class="published" datetime="2015-10-20"
                >October 20, 2015</time
              >
            </header>
            <router-link to="/" class="image"
              ><img src="../../assets/images/pic08.jpg" alt=""
            /></router-link>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <router-link to="/"
                  >Convallis maximus nisl mattis nunc id lorem</router-link
                >
              </h3>
              <time class="published" datetime="2015-10-15"
                >October 15, 2015</time
              >
            </header>
            <router-link to="/" class="image"
              ><img src="../../assets/images/pic09.jpg" alt=""
            /></router-link>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <router-link to="/"
                  >Euismod amet placerat vivamus porttitor</router-link
                >
              </h3>
              <time class="published" datetime="2015-10-10"
                >October 10, 2015</time
              >
            </header>
            <router-link to="/" class="image"
              ><img src="../../assets/images/pic10.jpg" alt=""
            /></router-link>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <router-link to="/"
                  >Magna enim accumsan tortor cursus ultricies</router-link
                >
              </h3>
              <time class="published" datetime="2015-10-08"
                >October 8, 2015</time
              >
            </header>
            <router-link to="/" class="image"
              ><img src="../../assets/images/pic11.jpg" alt=""
            /></router-link>
          </article>
        </li>
        <li>
          <article>
            <header>
              <h3>
                <router-link to="/"
                  >Congue ullam corper lorem ipsum dolor</router-link
                >
              </h3>
              <time class="published" datetime="2015-10-06"
                >October 7, 2015</time
              >
            </header>
            <router-link to="/" class="image"
              ><img src="../../assets/images/pic12.jpg" alt=""
            /></router-link>
          </article>
        </li>
      </ul>
    </section>

    <!-- About -->
    <section class="blurb">
      <h2>About</h2>
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna
        enim, ac accumsan tortor cursus at phasellus sed ultricies.
      </p>
      <ul class="actions">
        <li><router-link to="/" class="button">Learn More</router-link></li>
      </ul>
    </section>

    <!-- Footer -->
    <section id="footer">
      <ul class="icons">
        <li>
          <router-link to="/" class="fa-twitter"
            ><span class="label">Twitter</span></router-link
          >
        </li>
        <li>
          <router-link to="/" class="fa-facebook"
            ><span class="label">Facebook</span></router-link
          >
        </li>
        <li>
          <router-link to="/" class="fa-instagram"
            ><span class="label">Instagram</span></router-link
          >
        </li>
        <li>
          <router-link to="/" class="fa-rss"
            ><span class="label">RSS</span></router-link
          >
        </li>
        <li>
          <router-link to="/" class="fa-envelope"
            ><span class="label">Email</span></router-link
          >
        </li>
      </ul>
      <p class="copyright">
        &copy; Untitled. Design:
        <router-link to="http://html5up.net">HTML5 UP</router-link>. Images:
        <router-link to="http://unsplash.com">Unsplash</router-link>.
      </p>
    </section>
  </section>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>
