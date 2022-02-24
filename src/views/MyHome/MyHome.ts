import { defineComponent } from "vue";
import Task from "../../models/Task";
import { tasks } from "../../store/task"

export default defineComponent({
	name: "MyHome",
	computed: {
		tasks() {
			return this.$store.state.taskStore.tasks
		}
	},
	methods: {
		setTaskComplete(task: Task): void {
			this.$store.commit(tasks.completeTask, task)
		},
		deleteTask(task: Task) {
			this.$store.commit(tasks.deleteTask, task);
		}
	},
	mounted() {
		//this.tasks = this.$store.state.taskStore.tasks;
	}
});
