<template>

  <!-- if logged in -->
  <div class="container" v-if="this.$store.state.user.displayName">
    <h5>Welcome {{this.$store.state.user.displayName}}! What's happening?</h5>
    <div class="row">

              <!-- <div class="col-sm-6">

              </div> -->

              <div class=" col-sm-6">
                    <!-- <h4>Welcome {{this.$store.state.user.displayName}}! What's happening?</h4> -->
                    <br>
                        <div class="form-group">
                          <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
                        </div>
                          <div class="form-group">
                            <textarea class="form-control" id="body" rows="this.textareaHeight" style="overflow:hidden"  placeholder="Write your thoughts here..." v-on:click="expandTextarea()" v-model="body">
                            </textarea>
                            <!-- <p>WARNING...{{body}}...</p> -->
                          </div>
                        <button class="btn btn-primary" @click="addPost()">Post!</button>
                    <hr>
              </div>

            <div class=" col-sm-6">
                  <!-- <div class="sidebar-nav-fixed affix">
                    <div class="demo-content bg-alt">Tree</div>

                  </div> -->
                  <!-- <h1>TREEEEEEE</h1> -->
                  <tree ref="tree"></tree>
            </div>
    </div>

</div>

  <!-- if not logged in -->
  <div class="container" v-else>

    <!-- navbar loaded -->
      <nav-bar> </nav-bar>

      <!--Home page content loaded  -->
      <hp-content> </hp-content>

      <hr>

      <!-- footer loaded  -->
      <footer-area> </footer-area>

  </div>
</template>

<style>
 .info_section{

    width: 600;
    height: 400;
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
 }
</style>

<script>
import tree from './Tree.vue';

export default {
  name: 'Home',
  components: {
    tree,
  },

  data() {
    return {
      // date: Date.now(),
      // username: this.$store.user.username,
      // email: this.$store.user.email,
      // displayName: this.$store.user.displayName,
      // Are the above data to be included here?
      // I think not, since the data would be passed around more times
      // than is probably necessary... $store is accessible globally
      // throughout the app after all.
      title: '',
      body: '',

    };
  },
  methods: {
    addPost() {
      this.$store.dispatch('addPost', this.$store.state.posts)
    }
  },
  mounted() {
    this.$store.dispatch('getPosts')
    this.$store.dispatch('getUser')
  },

  // expandTextarea('body')
}
</script>



 <style>
@media (min-width: 992px) {
  .container-scroll {
    overflow-x: auto;
  }
  .container-scroll .columns-16 {
    width: 133.33333333vw;  /* = 100vw * 16/12 */
  }
  .container-scroll .columns-24 {
    width: 200vw;  /* = 100vw * 24/12 */
  }
  .container-scroll .col-md-2 {
    width: 16.66666667vw !important;
  }
}
.container-scroll > .row {
  margin-top: 24px;
}
.container-scroll > .row > .col-md-2 {
  font-weight: bold;
  text-align: center;
}
.demo-content{
       padding: 15px;
       font-size: 18px;
       min-height: 400px;
       min-width: 350px;
       background: #dbdfe5
;
       margin-bottom: 10px;
   }
   .demo-content.bg-alt{
       background: #778899

;
   }
</style>
