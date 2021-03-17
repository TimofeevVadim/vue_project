<template>
  <div class="task2">
    <div class="container t-a-center">
      <h2 class="heading">schedule</h2>
      <button class="btn" @click="arrayToString">Get random timetable</button>
      <div class="schedule">
        <p v-for="elem in stringArray" :key="elem" class="el-p">
          {{ elem }}
        </p>
        <hr>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'task2',
  data: () => ({
    schedule: [],
    finalArray: [],
    elFinalArray: {},
    stringArray: [],
    currentDay: '',
    strForArray: '',
    currentStr: '',
    dayNameStart: '',
    dayNameEnd: '',
    orderBefore: '',
    daysBeforeOrder: '',
    randomNum: 0,
    time: ''

  }),
  mounted () {
    axios.get(
      'http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no')
      .then(res => {
        this.schedule = res.data
        console.log(res.data)
      })
  },
  methods: {
    iterating: function () {
      this.stringArray = []
      this.finalArray = []
      this.dataToArray(this.schedule[Math.floor(Math.random() * this.schedule.length)].schedule)
    },
    dataToArray: function (schedule) {
      const daysArray = [
        'monday', 'saturday', 'sunday', 'thursday', 'tuesday', 'wednesday', 'friday'
      ]
      for (let i = 0; i < daysArray.length + 1; i++) {
        this.currentDay = daysArray[0]
        this.elFinalArray[daysArray[0]] = schedule[daysArray[0]]
        daysArray.shift()
        for (let j = 0; j < daysArray.length; j++) {
          if (JSON.stringify(this.elFinalArray[this.currentDay]) === JSON.stringify(schedule[daysArray[j]])) {
            this.elFinalArray[daysArray[j]] = schedule[daysArray[j]]
            daysArray.splice(j, 1)
            j = 0
          }
        }
        i = 0
        this.finalArray.push(this.elFinalArray)
        this.elFinalArray = {}
      }
      console.log(this.finalArray)
    },
    arrayToString: function () {
      this.iterating()
      for (let i = 0; i < this.finalArray.length; i++) {
        this.dayNameStart = Object.keys(this.finalArray[i])[0]
        this.dayNameEnd = Object.keys(this.finalArray[i])[Object.keys(this.finalArray[i]).length - 1]
        this.orderBefore = this.finalArray[i][this.dayNameStart].order_before / 60
        this.daysBeforeOrder = this.finalArray[i][this.dayNameStart].days_before_order
        if ((this.orderBefore - Math.floor(this.orderBefore)) * 60 > 9) {
          this.time = `${
            Math.floor(this.orderBefore)}:${(this.orderBefore - Math.floor(this.orderBefore)) * 60
          }`
        } else {
          this.time = `${
            Math.floor(this.orderBefore)}:${(this.orderBefore - Math.floor(this.orderBefore)) * 60
          }0`
        }
        if (Object.keys(this.finalArray[i]).length > 1) {
          if (this.finalArray[i][this.dayNameStart].day_off === true) {
            this.strForArray = `${this.dayNameStart}: closed`
          } else {
            this.strForArray =
              `For ${this.dayNameStart} - ${this.dayNameEnd}: before ${this.time}, ${this.daysBeforeOrder} day(s) before`
          }
        } else {
          if (this.finalArray[i][this.dayNameStart].day_off === true) {
            this.strForArray = `${this.dayNameStart}: closed`
          } else {
            this.strForArray =
              `For ${this.dayNameStart}: before ${this.time}, ${this.daysBeforeOrder} day(s) before`
          }
        }
        this.stringArray.push(this.strForArray)
      }
      console.log(this.stringArray)
    }
  }
}
</script>

<style scoped>

.task2 {
  min-height: 500px;
}
.t-a-center {
  text-align: center;
}
.heading {
  margin-top: 35px;
}
.btn {
  margin: 35px 0;
  outline: none;
  width: 34%;
  height: 64px;
  background: #53CF76;
  color: #fff;
  border: none;
  font-size: 25px;
}
.schedule {
  margin-top: 40px;
}
.el-p {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #84868E;
  margin: 10px 10px 10px 0;
}
</style>
