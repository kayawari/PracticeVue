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
    methods: {
        createTask: function(){
            // TODO： コメントが空の場合はボタンをdisabledにする
            var id = this.tasks.length + 1;
            this.tasks.push({
                id: id,
                name: this.newTask
            });
            this.newTask = '';
        }
    }
})