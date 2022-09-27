const template = `
<div class="row">
    <div class="col">
    <h2>Dash Board</h2>
    <button class="btn btn-danger btn-sm" v-on:click="signOut()">Sign Out</button>
    <!--<router-link class="btn btn-primary btn-sm" to="add-event">Add Event</router-link>-->
    <add-event />
    <pre>{{$store.state.user}}</pre>
    <!--<pre>{{$store.state.events}}</pre>-->
        <div class="row">
            <event-item 
                v-for="(event, seq) in $store.state.events" 
                v-bind:event="event"
                v-bind:key="seq"/>
        </div>
    </div>
</div>
`

import { auth, signOut, eventRef, onValue } from '../firebaseApp.js'
import AddEvent from './AddEvent.vue.js'
import EventItem from './EventItem.vue.js'

export default {
    name:'dashboard',
    template: template,
    components: {
        'add-event': AddEvent,
        'event-item': EventItem
    },
    mounted() {
        onValue(eventRef, (snapshot) => {
            let events = []
            snapshot.forEach(event => {
                events.push(event.val())
            })
            this.$store.dispatch('setEvents', events)
        })
    },
    methods: {
        signOut() {
            signOut(auth).then(() => {
                // Sign-out successful.
                this.$store.dispatch('signOut')
              }).catch((error) => {
                // An error happened.
              });
        }
    }
}