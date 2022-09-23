const template = `
<div class="row">
    <div class="col">
    <h2>Sign-in</h2>
    <form>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input 
                    type="email" 
                    placeholder="email"
                    class="form-control"
                    v-model="email"
                >
            </div>
        </div>
        <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input 
                    type="password" 
                    placeholder="password"
                    class="form-control"
                    v-model="password"
                >
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
            <pre>{{error.message}}</pre>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
            <button class="btn btn-primary w-100" v-on:click="signIn()">Sign in</button>
            </div>
        </div>
    </form>
    </div>
</div>
`

import { auth } from '../firebaseApp.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

export default {
    name: 'signin',
    template: template,
    data() {
        return {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signIn() {
            signInWithEmailAndPassword(auth, this.email, this.password)
                .catch(error => {
                    this.error = error
                })
        }
    }
}