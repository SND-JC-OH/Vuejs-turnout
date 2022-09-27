const template = `
<div class="row">
    <div class="col">
        <h4>Sign up</h4>
        <div class="alert alert-warning" role="alert" v-if="error.message">
        {{error.message}}
        </div>

        <form>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email"/>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="passsword" class="form-control" v-model="password"/>
            </div>
            <div class="text-end">
                <button class="btn btn-primary" v-on:click="signUp()">Sign Up</button>
            </div>
            <div class="ps-1"><router-link class="btn btn-link w-100" to="/signin">Already a user? Sign in</router-link></div>
        </form>
    </div>
</div>
`
import { auth, createUserWithEmailAndPassword } from '../firebaseApp.js'

export default {
    name: 'singup',
    template: template,
    data() {
        return {
            email: '',
            password: '',
            error: {
                code: "",
                message: ""
            }
        }
    },
    methods: {
        signUp() {
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    alert()
                    this.error.code = error.code;
                    this.error.message = error.message;
                });
        }
    }
}