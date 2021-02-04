<template>
  <div class="card" v-bg="selectedFilm.image">
    <div class="blackout"></div>
    <h1 class="title">{{ selectedFilm.title }}</h1>
    <div class="select">
      <app-films
        :films="films"
        :title="film"
        @changeFilm="changeFilm"
      ></app-films>
      <app-actors
        :actors="selectedActors"
        @changeActor="changeActor"
      ></app-actors>
    </div>
  </div>
  <app-actor-info :actor="actorInfo"></app-actor-info>
</template>

<script>

import background from './directives/background'
import AppFilms from './components/AppFilms'
import AppActors from './components/AppActors'
import AppActorInfo from './components/AppActorInfo'

export default {
  data () {
    return {
      film: 'Небоскреб',
      actorInfo: {
        film: 'Небоскреб',
        name: 'Дуэйн Джонсон',
        value: 'dnd',
        info: 'Дуэ́йн Ду́глас Джо́нсон (англ. Dwayne Douglas Johnson; род. 2 мая 1972 года, Хейвард, США) — американский рестлер, музыкант, певец[1] и киноактёр, известный также под псевдонимом Скала́ (англ. The Rock).',
        image: 'dnd.jpg'
      },
      films: [
        {
          title: 'Небоскреб',
          value: 'nbs',
          image: 'skyscraper.jpg'
        },
        {
          title: 'Властелин Колец',
          value: 'vls',
          image: 'lord-of-the-rings.png'
        }
      ],
      actors: [
        {
          film: 'Небоскреб',
          name: 'Дуэйн Джонсон',
          nameEng: 'Dwayne Douglas Johnson',
          info: 'Дуэ́йн Ду́глас Джо́нсон (англ. Dwayne Douglas Johnson; род. 2 мая 1972 года, Хейвард, США) — американский рестлер, музыкант, певец[1] и киноактёр, известный также под псевдонимом Скала́ (англ. The Rock).',
          image: 'dnd.jpg'
        },
        {
          film: 'Небоскреб',
          name: 'Нив Кэмпбелл',
          nameEng: 'Neve Adrianne Campbell',
          info: 'Нив Эдриэнн Кэмпбелл (англ. Neve Adrianne Campbell, произносится Нев[4] Кэ́мпбелл [ˈnɛv ˈkæmbəl], род. 3 октября 1973, Гуэлф, Онтарио, Канада) — канадская актриса, сценарист и продюсер. Наиболее известна по роли Сидни Прескотт в серии фильмов ужасов «Крик».',
          image: 'niv.jpg'
        },
        {
          film: 'Властелин Колец',
          name: 'Элайджа Вуд',
          nameEng: 'Elijah Jordan Wood',
          info: 'Эла́йджа Джо́рдан Вуд (англ. Elijah Jordan Wood; род. 28 января 1981, Сидар-Рапидс, Айова, США) — американский актёр. Наиболее известен по роли Фродо Бэггинса в трилогии «Властелин колец» (2001—2003).',
          image: 'elj.jpg'
        },
        {
          film: 'Властелин Колец',
          name: 'Иэн Маккеллен',
          nameEng: 'Sir Ian Murray McKellen',
          info: 'Сэр И́эн Мю́ррей Макке́ллен (англ. Sir Ian Murray McKellen; род. 25 мая 1939, Бернли, Ланкашир, Англия, Великобритания) — английский актёр. Лауреат семи английских театральных наград имени Лоуренса Оливье, американской театральной награды «Тони» и четырёх американских театральных наград «Драма Деск».',
          image: 'ien.jpg'
        }
      ]
    }
  },
  methods: {
    changeFilm (title) {
      this.film = this.films.find(film => film.title === title).title
    },
    changeActor (name) {
      this.actorInfo = this.actors.find(actor => actor.name === name)
    }
  },
  computed: {
    selectedFilm () {
      return this.films.find(film => film.title === this.film)
    },
    selectedActors () {
      return this.actors.filter(actor => actor.film === this.film)
        .map(actor => actor.name)
    },
    selectedActor () {
      return this.actors.find(actor => actor.name === this.actorInfo)
    }
  },
  directives: {
    bg: background
  },
  components: {
    AppFilms,
    AppActors,
    AppActorInfo
  }
}
</script>

<style scoped>

</style>
