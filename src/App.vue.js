const template = `
<div class="container">
    <div class="row">
        <div class="col">
        <h1>Turnout</h1>
        <router-view></router-view>
        </div>
    </div>
</div>
`

export default {
    name: 'app',
    template: template,
}