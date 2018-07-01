var tasksItem = Vue.component('tasks-item', {
    props: ['item', 'index'],
    template: '<td>{{index}}: {{item.name}}</td>'
})

var vm = new Vue({
    el: '#tasks-index',
    data: {
        tasks: [
            {name: 'hoge'},
            {name: 'fuga'},
            {name: 'hogefuga'}
        ],
        newTask: '',
        presence: 0
    },
    component: {
        // componentをローカル登録する
        'tasks-item': tasksItem
    },
    methods: {
        createTask: function(){
            this.tasks.push({
                name: this.newTask
            });

            // reset data
            this.newTask = '';
            this.presence = 0;
        },
        doneTask: function(task_id){
            this.$delete(this.tasks, task_id);
        },
        validatePresence: function(){
            if (this.newTask == '') {
                this.presence = 0;
            } else {
                this.presence = 1;
            }
        }
    }
})
