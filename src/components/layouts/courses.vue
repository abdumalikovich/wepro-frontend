<template>
  <div class="screen-courses def-block">
    <div class="heading heading-only-left">
      <span class="h2">{{ $t("home.screen-courses.h2") }}</span>
      <!-- <div class="sorting">
        <button @click="changeCoursesList(false)" class="active">
          Все курсы
        </button>
        <button @click="changeCoursesList('programming')">
          Программирование
        </button>
        <button @click="changeCoursesList('design')">Дизайн</button>
        <button @click="changeCoursesList('marketing')">Маркетинг</button>
      </div> -->
    </div>
    <div class="wrapper list-3 padding-sides" v-if="AllData.Course.length">
      <router-link
        target="_blank"
        :to="`${$i18n.locale}` + `/course/` + item.link"
        v-for="item of AllData.Course"
        :key="item.id"
      >
        <div class="item">
          <div class="inside">
            <div class="title">
              <p class="h3">{{ item.title }}</p>
              <span class="h4"
                >Месяцев: {{ item.number_month }}, занятий:
                {{ item.number_lessons }}</span
              >
            </div>
            <ul class="check">
              <li
                class="note"
                v-for="el of item.unique_data.array_what_can"
                :key="el.key"
              >
                {{ el.name }}
              </li>
            </ul>

            <span class="h3"
              >{{ item.price.slice(0, 3)
              }}<sup>{{ item.price.slice(3) }}</sup></span
            >
            <span class="note">сум/месяц</span>
          </div>
        </div>
      </router-link>
    </div>
    <loading v-if="!AllData.Course.length" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import loading from "./loading.vue";

export default {
  data() {
    return {
      // data_changeCoursesList: []
    };
  },
  computed: {
    ...mapGetters(["AllData"])
  },
  methods: {
    ...mapActions(["GetData"])
    // changeCoursesList(data) {
    //   if (!data) {
    //     this.data_changeCoursesList = this.AllData.Course;
    //   } else {
    //     this.data_changeCoursesList = this.AllData.Course.filter(
    //       item => item.category == data
    //     );
    //   }

    //   this.data_changeCoursesList = this.AllData.Course;
    // }
  },
  created() {
    this.GetData(["Course"]);
  },
  components: {
    loading
  }
};
</script>
