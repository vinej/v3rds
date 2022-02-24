import { defineComponent } from "vue";
import Task from "../../models/Task";
import { tasks } from "../../store/task"

export default defineComponent({
	name: "AddTask",
	data() {
		return {
			taskName: ""
		};
	},
	methods: {
		addTask(): void {
			if (this.taskName !== "") {
				const newTask = new Task(this.taskName);
				this.$store.commit(tasks.setTask, newTask);
				//this.$store.dispatch(tasks.echo)
				this.taskName = "";
				this.$router.push("/");
			}
		}
	}
});
