<template>
  <div>
    <header :class="{ dark }">
      <div class="side side-left">
        <router-link class="logo" v-if="dark" :to="'/'"
          ><img src="../../../public/img/vector/logo-w.svg"
        /></router-link>
        <router-link class="logo" v-else :to="'/'">
          <img src="../../../public/img/logo-orange.svg" />
        </router-link>
        <div class="links element-pc"> 
          <a :href="'/' + $i18n.locale + '#courses'">{{
            $t("links.courses")
          }}</a>
          <a :href="'/' + $i18n.locale + '#teachers'">{{
            $t("links.teachers")
          }}</a>
          <!-- <a :href="'/' + $i18n.locale + '/job'">{{$t('links.job')}}</a> -->
          <!-- <a :href="'/' + $i18n.locale + '/students'" target="_blank" class="new">{{$t('links.students_work')}}<span>Beta</span></a> -->
        </div>
      </div>
      <div class="side side-right">
        <div class="links">
          <a href="/ru" v-if="$i18n.locale == 'uz'">Русский</a>
          <a href="/uz" v-else>O`zbek</a>
          <a href="tel:+998 90 197-71-00">+998 90 197-71-00</a>
        </div>
        <a @click="OpenForm(['Menu'])" class="open-menu"></a>
      </div>
    </header>
    <div class="header elements-pc" id="header">
      <div class="wrapper">
        <div class="side side-left">
          <router-link class="logo" :to="'/'">
            <img src="../../../public/img/logo-orange.svg" />
          </router-link>
          <div class="links element-pc">
            <a :href="$i18n.locale + '#courses'">{{ $t("links.courses") }}</a>
            <a :href="$i18n.locale + '#teachers'">{{ $t("links.teachers") }}</a>
            <!-- <a :href="'/' + $i18n.locale + '/job'">{{$t('links.job')}}</a> -->
            <!-- <a :href="'/' + $i18n.locale + '/students'" target="_blank" class="new">{{$t('links.students_work')}}<span>Beta</span></a> -->
          </div>
        </div>
        <div class="side side-right">
          <div class="btns">
            <button
              @click="OpenForm(['Application'])"
              class="button-small ga-click-openApplication"
            >
              {{ $t("buttons.course") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      langs: ["ru", "uz"]
    };
  },
  methods: {
    ...mapActions(["OpenForm", "GetData", "Add"])
  },
  props: ["dark"]
};

document.body.onscroll = () => {
  let header_fixed = document.querySelector("#header");

  if (window.scrollY > 200) header_fixed.classList.add("active");
  else header_fixed.classList.remove("active");
};
</script>
