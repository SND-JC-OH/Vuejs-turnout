const template = `
<div class="row">
    <div class="col-6">
        <h4>Add an Event <input type="checkbox" v-model="showForm"></h4>
        <div class="form" v-if="showForm">
            <form>
                <div class="form-group mb-2">
                    <label>Title</label>
                    <input type="text" class="form-control" name="title" v-model="event.title">
                </div>
                <div class="form-group mb-2">
                    <label>Description</label>
                    <input type="text" class="form-control" name="title" v-model="event.description">
                </div>
                <div class="form-group mb-2">
                    <label>Date</label>
                    <input type="date" class="form-control" name="title" v-model="event.date">
                </div>
                <div class="form-group mb-2">
                    <label>Location</label>
                    <input type="text" class="form-control" name="title" v-model="event.location">
                </div>
                <div class="text-end">
                    <button class="btn btn-primary btn-sm" v-on:click="addEvent">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
`
import { eventRef, push, set } from '../firebaseApp.js'

export default {
    name: 'add-event',
    template: template,
    data() {
        return {
            event: {
                title: '',
                description: '',
                date: '',
                location: '',
                email: ''
            },
            error: {

            },
            showForm: false
        }
    },
    methods: {
        addEvent(event) {
            event.preventDefault()
            this.event.email = this.$store.state.user.email
            push(eventRef, this.event)
                .then((response) => {
                    this.event = {
                        title: '',
                        description: '',
                        date: '',
                        location: '',
                        email: ''
                    }
                })
                .catch(function(error) {
                    this.error = error
                })

            /*
            set(eventRef, this.event)
                .then(() => {
                    console.log()
                })
                .catch(function(error) {
                    this.error = error
                    console.log(error)
                })
            */
        }
    }
}