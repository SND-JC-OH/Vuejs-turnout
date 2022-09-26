const template = `
<div class="row">
    <div class="col">
    <h2>Dash Board</h2>

    <pre>{{$store.state}}</pre>
    </div>
</div>
`

export default {
    name:'dashboard',
    template: template
}