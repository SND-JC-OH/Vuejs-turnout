const template = `
<div class="row">
    <div class="col">
    <h2>Dash Board</h2>
    <button class="btn btn-danger btn-sm" v-on:click="signOut()">Sign Out</button>
    <!--<router-link class="btn btn-primary btn-sm" to="add-event">Add Event</router-link>-->
    <add-event />
    <pre>{{$store.state}}</pre>
    </div>
</div>
`

import { auth, signOut, eventRef, onValue } from '../firebaseApp.js'
import AddEvent from './AddEvent.vue.js'

export default {
    name:'dashboard',
    template: template,
    components: {
        'add-event': AddEvent
    },
    mounted() {
        onValue(eventRef, (snapshot) => {
            let events = []
            snapshot.forEach(event => {
                events.push(event.val())
            })
            console.log(events)
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