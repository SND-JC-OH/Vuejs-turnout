const template = `
<div class="row">
    <div class="col">
    <h2>Dash Board</h2>
    <button class="btn btn-danger btn-sm" v-on:click="signOut()">Sign Out</button>
    <pre>{{$store.state}}</pre>
    </div>
</div>
`

import { auth, signOut } from '../firebaseApp.js'

export default {
    name:'dashboard',
    template: template,
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