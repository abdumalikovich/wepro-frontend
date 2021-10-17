<template>
  <div class="body-home">
    <layoutHeader />

    <div class="screen-one padding-sides">
      <div class="wrapper def-block">
        <div class="side-left">
          <h1 class="elements-mobile">
            Учим IT-профессиям. Программирование, дизайн и маркетинг.
          </h1>
          <h1 class="elements-pc" v-html="$t('home.h1')"></h1>
          <h3 class="elements-pc corp t-corp">{{ $t("home.h2") }}</h3>
          <ul class="check">
            <li v-for="item of $t('home.li')" :key="item.key">{{ item }}</li>
          </ul>
          <div class="btns">
            <button
              @click="OpenForm(['Application'])"
              class="ga-click-openApplication"
            >
              {{ $t("buttons.course") }}
            </button>
            <button
              @click="OpenForm(['Video'])"
              class="ga-click-openVideo transparent"
            >
              {{ $t("buttons.video") }}
            </button>
          </div>
        </div>
        <!-- <div class="side-right"></div> -->
      </div>
      <img
        class="elements-mobile"
        src="../../../public/img/pages/home/m-bg.webp"
      />
    </div>

    <!-- <div class="margin elements-pc" id="courses"></div>

		<div class="screen-work def-block elements-pc">
			<div class="heading padding-sides">
				<h4>{{$t('home.screen-work.p')}}</h4>
			</div>
			<div class="wrapper padding-sides list-3">
				<img src="../../../public/img/brands/pure_milky.svg">
				<img src="../../../public/img/brands/sag.png">
				<img src="../../../public/img/brands/agro_bravo.png">
			</div>
		</div> -->

    <div class="margin" id="courses"></div>

    <layoutCourses />

    <div class="margin"></div>

    <div class="screen-get-presentation black">
      <div class="margin"></div>

      <div class="def-block-small">
        <div class="heading padding-sides">
          <span class="h2" v-html="$t('home.screen-form.h2')"></span>
          <p>{{ $t("home.screen-form.p") }}</p>
        </div>
        <div class="wrapper padding-sides">
          <form @submit="Add({ service: 'App_Presentations' })">
            <input
              type="text"
              name="time"
              hidden
              :value="new Date().toLocaleTimeString()"
            />
            <input
              type="text"
              name="date"
              hidden
              :value="new Date().toLocaleDateString()"
            />

            <input
              type="text"
              :placeholder="$t('forms.input_name')"
              name="name"
            />
            <input
              type="text"
              :placeholder="$t('forms.input_phone')"
              name="phone"
            />
            <select name="course">
              <option
                :value="item.id"
                v-for="item of AllData.Course"
                :key="item.key"
                >{{ item.title }}</option
              >
            </select>
            <button>{{ $t("buttons.ok") }}</button>
          </form>
        </div>
      </div>

      <div class="margin"></div>
    </div>

    <div class="margin" id="reviews"></div>

    <div class="screen-reviews def-block">
      <div class="heading">
        <span class="h2">{{ $t("home.screen-reviews.h2") }}</span>
      </div>
      <div class="wrapper padding-sides">
        <div class="items list-4">
          <iframe
            v-for="item of AllData.Review"
            :key="item.key"
            :src="item.video + '?autoplay=1&mute=1&loop=1'"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <!-- <div @click="ShowGallery = !ShowGallery" class="down t-20" v-if="!ShowGallery">Больше отзывов</div> -->
    </div>

    <div class="margin"></div>

    <div class="screen-office def-block screen-center def-block-small">
      <div class="heading centered elements-pc">
        <span class="h2">{{ $t("home.screen-map.h2") }}</span>
        <p>{{ $t("home.screen-map.p") }}</p>
      </div>
      <div class="wrapper elements-pc">
        <img src="../../../public/img/pages/center.webp" alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1460"
          height="821"
          viewBox="0 0 1460 821"
        >
          <g
            id="Сгруппировать_11533"
            data-name="Сгруппировать 11533"
            transform="translate(-3640 22072)"
          >
            <rect
              id="Прямоугольник_1468"
              data-name="Прямоугольник 1468"
              width="1460"
              height="821"
              transform="translate(3640 -22072)"
              fill="#fff"
              opacity="0"
            />
            <g
              id="Сгруппировать_11532"
              data-name="Сгруппировать 11532"
              transform="translate(103 -1996)"
            >
              <g id="Сгруппировать_11532-2" data-name="Сгруппировать 11532">
                <path
                  id="Контур_16400"
                  data-name="Контур 16400"
                  d="M3928.479-19989.787l-48.635,383.121H3665.456l74.441-383.121Z"
                  fill="rgba(0,77,255,0.35)"
                  stroke="#004dff"
                  stroke-width="5"
                  opacity="0.63"
                />
                <path
                  id="Контур_16401"
                  data-name="Контур 16401"
                  d="M3939.418-19989.787l40.465,209.947H3658.453l-16.8-209.947Z"
                  transform="translate(837)"
                  fill="rgba(0,77,255,0.35)"
                  stroke="#004dff"
                  stroke-width="5"
                  opacity="0.63"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <!-- <div @click="ShowGallery = !ShowGallery" class="down t-20" v-if="!ShowGallery">Посмотреть фотографии</div> -->
    </div>

    <div class="def-block">
      <carousel
        :autoplay="true"
        class="screen-gallery"
        :nav="false"
        :dots="false"
        :items="1"
      >
        <img src="../../../public/img/pages/home1.webp" />
        <img src="../../../public/img/pages/home2.webp" />
        <img src="../../../public/img/pages/home3.webp" />
        <img src="../../../public/img/pages/home4.webp" />
        <img src="../../../public/img/pages/home5.webp" />
      </carousel>
    </div>
    <!-- <div class="margin"></div>

		<div class="def-block">
			<div class="heading">
				<span class="h2">Фотографии из центра</span>
			</div>
		</div> -->

    <!-- <div class="margin"></div>

		<div class="screen-where-to-work white">
			<div class="margin"></div>

			<div class="def-block-small ">
				<div class="heading">
					<span class="h2">Где ты сможешь работать <br> после обучения</span>
				</div>
				<div class="wrapper">
					<img src="../../../public/img/vector/logo1.png">
					<img src="../../../public/img/vector/logo2.png">
					<img src="../../../public/img/vector/logo3.png">
					<img src="../../../public/img/vector/logo4.png">
				</div>
			</div>
			
			<div class="margin"></div>
		</div> -->

    <div class="margin" id="teachers"></div>

    <div class="screen-team def-block-small">
      <div class="heading">
        <span class="h2">{{ $t("home.screen-teachers.h2") }}</span>
      </div>
      <div class="wrapper list-4 no-border padding-sides">
        <div class="item" v-for="item of AllData.Teacher" :key="item.key">
          <img :src="proxy + '/' + item.files[0].path" alt="" />
          <span class="t-20">{{ item.name }}</span>
          <span class="note">{{ item.description }}</span>
        </div>
      </div>
    </div>

    <div class="margin" id="qa"></div>

    <div class="screen-faq white">
      <div class="margin"></div>

      <div class="def-block-small">
        <div class="heading">
          <span class="h2">{{ $t("home.screen-questions.h2") }}</span>
        </div>
        <div class="wrapper padding-sides">
          <div
            class="item"
            v-for="item of Questions"
            :key="item.key"
            @click="item.status = !item.status"
            :class="{ active: item.status }"
          >
            <div class="top">
              <p class="t-20">{{ item.q }}</p>
              <img src="../../../public/img/vector/close-b.svg" />
            </div>
            <div class="bottom">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="margin"></div>
    </div>

    <layoutFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import layoutHeader from "../layouts/header";
import layoutCourses from "../layouts/courses";
import layoutFooter from "../layouts/footer";
import carousel from "vue-owl-carousel";
import config from "../../../vue.config";

export default {
  metaInfo: {
    title: "WEPRO — Школа актуальных профессий в Самарканде",
    titleTemplate: "WEPRO — Школа актуальных профессий в Самарканде",
    htmlAttrs: {
      lang: "ru"
    },
    meta: [
      {
        name: "description",
        content:
          "Мы - IT-школа в Самарканде, где мы обучаем наших актуальным профессиям XXI-века. Программирование, дизайн и онлайн-маркетинг, выберите свой курс, а мы поможем в его обучении. Быстро, доступно, в современном и удобном учебном центре."
      }
    ]
  },
  data() {
    return {
      ShowGallery: false,
      proxy: config.devServer.proxy,
      Questions: [
        {
          q: "Все курсы есть в интернете. Зачем идти к вам?",
          a:
            "В большинстве интенсивах/вебинарах в интернете выложена лишь малая часть полезной информации, а для полноценного изучения профессии приходится убивать гораздо больше времени и сил. Наша школа готова полностью и с гарантией взяться за студента.",
          status: false
        },
        {
          q: "С какого возраста принимаются студенты?",
          a: "Мы принимаем заявки от лиц старше 14 лет.",
          status: false
        },
        {
          q: "Какие документы мне нужно принести для регистрации?",
          a:
            "Для начала обучения студенту нужен свой паспорт или паспорт родителя.",
          status: false
        },
        {
          q: "Что мне выбрать?",
          a:
            "Выбирать направление стоит внимательно. Если вы пока не уверены в выборе - свяжитесь с нами по номеру +998 90 197-71-00, а мы поможем вам в выборе направления.",
          status: false
        },
        {
          q: "Когда, во сколько и где проходят занятия?",
          a:
            "Занятия проходят в нашем современном и уютном учебном центре. Мы подберем для Вас график обучения, уроки проходят 2 раза в неделю по 2 часа в будние дни с 9:00 до 22:00",
          status: false
        },
        {
          q: "Нужна ли особая подготовка для начала обучения?",
          a:
            "Мы набираем новичков. Поэтому особая подготовка не нужна, но вам будет гораздо комфортнее учиться, если вы более-менее опытный пользователь ПК.",
          status: false
        },
        {
          q:
            "Что если у меня нет личного компьютера или мой компьютер очень «слабый»?",
          a:
            "Для выполнения домашних, контрольных и дипломных работ дома Вам понабодится компьютер. А во время занятий у вас будет современный компьютер с большим экраном для комфортной работы, поэтому личный компьютер с собой приносить не нужно.",
          status: false
        },
        {
          q: "Как проходит процесс оплаты?",
          a:
            "После прохождения входного теста студент вносит депозит, месячную или полную оплату и занимает место в группе.",
          status: false
        },
        {
          q: "Что за входной тест?",
          a:
            "Это простой тест из 10-ти элементарных вопросов на знание компьютера. Что такое Excel?",
          status: false
        },
        {
          q: "Получу ли я сертификат?",
          a:
            "Для получения сертификата студенты сдают дипломную работу, доказывая свой уровень владения профессией. Также мы опираемся на таблицу успеваемости учащегося.",
          status: false
        },
        {
          q: "Где я могу работать после обучения?",
          a:
            "Лучшие студенты могут трудоустроиться в компании-партнеры или к нам в школу. Digital-специалисты очень востребованны, независимо от того, какой курс вы окончили - вы можете рассчитывать на спрос или найти себя во фрилансе.",
          status: false
        }
      ]
    };
  },
  created() {
    this.GetData(["Teacher", "Review"]);
  },
  computed: {
    ...mapGetters(["AllData"])
  },
  methods: {
    ...mapActions(["OpenForm", "GetData", "Add"])
  },
  components: {
    layoutHeader,
    layoutCourses,
    layoutFooter,
    carousel
  }
};
</script>
