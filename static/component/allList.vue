<template lang="html">
    <div class="">
        <section>
            <div class="container">
                <h1 class="text-main">모두보기 <span class="text-en">All Works</span></h1>
                <router-link to="/" class="router-link">
                     <button class="moveBtn return"  v-on:click="sendEvent">돌아가기 <span class="text-en">Return</span></button>
                </router-link>
            </div>
                <ul class="all__box">
                        <li class="all__list" v-for="a in all">
                                <a :href="a.link" target="_blank" class="all__link">
                                    <img :src="'static/img/all/' + a.imgurl + '.jpg'" alt="" class="all__img">
                                    <div class="all__box__title">
                                        <p class="all__text__title">{{ a.title }}</p>
                                        <p class="all__text__subtitle">{{ a.subtitle }}</p>
                                    </div>
                                </a>
                        </li>
                </ul>
        </section>
    </div>
</template>

<script>
import AllList from './allList.json'
export default {
    data() {
        return {
            all: AllList
        }
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
