import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, { payload }) => {
            const total_tasks = state.tasks.length
            const last_task = state.tasks.at(-1)

            if (total_tasks === 0) {
                state.tasks.push({ id: 1, status: "pending", ...payload })
            }
            else {
                state.tasks.push({ id: last_task.id + 1, status: "pending", ...payload })
            }

        }
    }
})

export const { addTask } = taskSlice.actions

export default taskSlice.reducer