<template lang="html">
  <div class="">
      <section>
          <div class="container">
              <h1 class="text-main">주요작 <span class="text-en">Selected Works</span></h1>
          </div>
          <div class="glide">
              <div class="glide__track" data-glide-el="track">
                  <ul class="glide__slides">
                      <a :href="l.link" v-for="l in list" target="_blank">
                          <li class="glide__slide" :style="'background-color:' + l.color +';'">
                              <img :src="'static/img/' + l.imgurl + '.png'" alt="" class="glide__slide__image">
                              <div class="glide__slide__title">
                                  <p class="glide__text__title">{{ l.title }}</p>
                                  <p class="glide__text__keyword">{{ l.keyword }}</p>
                              </div>
                          </li>
                      </a>
                  </ul>
              </div>
              <div class="glide__bullets" data-glide-el="controls[nav]">
                  <button class="glide__bullet" v-for="(l, i) in list" :data-glide-dir="'='+ i"></button>
              </div>
              <router-link to="/all" class="router-link">
                   <button class="moveBtn allshow"  v-on:click="sendEvent">모두 보기 <span class="text-en">All Works</span></button>
              </router-link>
          </div>

      </section>

      <section>
          <div class="container">
              <div class="box">
                  <h1 class="text-main">보유 기술 <span class="text-en">Skills</span></h1>
                  <p class="text-bold">Front-end</p>
                  <p class="text-mini">HTML / CSS / SCSS / JavaScript / Vue.js</p>
                  <p class="text-bold">Design</p>
                  <p class="text-mini">Infographic / Web Design</p>
                  <p class="text-bold">Etc</p>
                  <p class="text-mini">Python</p>
              </div>
              <div class="box">
                  <h1 class="text-main">제가 더 궁금하시다면 <span class="text-en">Contact</span></h1>
                  <p class="text-bold">Mail</p>
                  <p class="text-mini">attrs.data@gmail.com</p>
                  <p class="text-bold">Brunch</p>
                  <p class="text-mini"><a href="https://brunch.co.kr/@attrs">https://brunch.co.kr/@attrs</a></p>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
import MainList from './mainList.json'

const header = document.getElementById("header");


function add_class_on_scroll() {
    header.classList.remove("logo-before");
    header.classList.add("logo-fixed");
}

function remove_class_on_scroll() {
    header.classList.remove("logo-fixed");
    header.classList.add("logo-before");
}

window.addEventListener('scroll', function(){
    //Here you forgot to update the value
    let scrollpos = window.scrollY;

    if(scrollpos > 150){
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
});



export default {
    data() {
        return {
            list: MainList
        }
    },
    mounted() {
        const glide = new Glide('.glide', {
            type: 'slider',
            startAt: 0,
            perView: 1
        });


        glide.mount();
    },
    methods: {
        sendEvent: function() {
            this.$emit('update');
        }
    }
}
</script>

<style lang="css">
</style>
