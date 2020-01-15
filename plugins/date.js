import moment from 'moment'
import Vue from 'vue'

Vue.filter('relativeDate', function (value) {
    if (value) {
        return moment(String(value)).fromNow();
    }
})

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format("DD MMM YYYY");;
    }
})