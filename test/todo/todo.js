var tasksItem = Vue.component('tasks-item', {
    props: ['item'],
    template: '<td>{{item.id}}: {{item.name}}</td>'
})

var vm = new Vue({
    el: '#tasks-index',
    data: {
        tasks: [
            {id: 1, name: 'hoge'},
            {id: 2, name: 'fuga'},
            {id: 3, name: 'hogefuga'}
        ],
        newTask: ''
    },
    component: {
        // componentをローカル登録する
        'tasks-item': tasksItem
    },
    methods: {
        createTask: function(){
            // TODO： コメントが空の場合はボタンをdisabledにする
            var id = this.tasks.length + 1;
            this.tasks.push({
                id: id,
                name: this.newTask
            });
            this.newTask = '';
        },
        doneTask: function(task_id){
            this.$delete(this.tasks, task_id - 1)
        }
    }
})
