const template = `
<div class="col-3">
    <div class="card">
        <div class="card-header"><strong>{{event.title}}</strong></div>
        <div class="card-body">{{event.description}}</div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Date: {{event.date}}</li>
            <li class="list-group-item">Location: {{event.location}}</li>
            <li class="list-group-item">Host: {{event.email}}</li>
        </ul>
    </div>
</div>
`

export default {
    name: 'event-item',
    template: template,
    props: ['event']
}