import { reducerFunction } from "./reducerFunction"
import uuid from 'react-uuid';
jest.mock('react-uuid');
// testing the function in order the the action.type of reducer function
// state variable for manipulation
const stateVariables = {
    name: "",
    description: "",
    time: "",
    task: JSON.parse(localStorage.getItem("taskItem")) || [],
    archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
    showButton: false,
    formInValid: true,
    numberOfCycles: "",
    darkMode: false
}
describe("pomodoro reducers", () => {
    test("it should set the name of pomodoro", () => {
        const action = {
            type: "name",
            payload: "new timer"
        }
        const state = reducerFunction(stateVariables, action)
        // chage in name of timer
        const expectedState = {
            name: "new timer",
            description: "",
            time: "",
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        expect(state).toEqual(expectedState)
    })
    test("it should set description of pomodoro", () => {
        const action = {
            type: "description",
            payload: "Official lyric video by Taylor Swift performing “All Too Well (10 Minute Version) (Taylor’s Version) (From The Vault)” – off her Red (Taylors Version) album. Listen to the album here:"
        }
        // change in description
        const state = reducerFunction(stateVariables, action)
        const expectedState = {
            name: "",
            description: "Official lyric video by Taylor Swift performing “All Too Well (10 Minute Version) (Taylor’s Version) (From The Vault)” – off her Red (Taylors Version) album. Listen to the album here:",
            time: "",
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        expect(state).toEqual(expectedState)
    })
    test("it should set time of pomodor", () => {
        const action = {
            type: "time",
            payload: 10
        }
        // change in time
        const expectedState = {
            name: "",
            description: "",
            time: 10,
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        const state = reducerFunction(stateVariables, action)
        expect(state).toEqual(expectedState)
    })
    test("it set set the number of cycle of pomodoro", () => {
        const action = {
            type: "cycleNumber",
            payload: 10
        }
        // change in number of cycles
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: 10,
            darkMode: false
        }
        const state = reducerFunction(stateVariables, action)
        expect(state).toEqual(expectedState)
    })
    test("show form on show button click", () => {
        const action = {
            type: "addTaskButton"
        }
        // change in show button
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: true,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        const state = reducerFunction(stateVariables, action)
        expect(state).toEqual(expectedState)
    })
    test("it should enable/disable darkmode", () => {
        const action = {
            type: "darkThemeHandler"
        }
        //  change in darkmode
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: !stateVariables.darkMode
        }
        const state = reducerFunction(stateVariables, action)
        expect(state).toEqual(expectedState)
    })
    test("it should add the task to the task array", () => {

        const stateVariables = {
            name: "defenceless- louis tomlinson",
            description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
            time: 238,
            task: JSON.parse(localStorage.getItem("taskItem")) || [],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: true,
            formInValid: true,
            numberOfCycles: 5,
            darkMode: false
        }
        const action = {
            type: "submit"
        }
        // adds name, desc, time and cycle number from respective state and id to task array and clears their own respective state.
        // show button changes to false once form is dismissed
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: [{
                id: uuid(),
                name: "defenceless- louis tomlinson",
                description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                time: 238,
                numberOfCycles: 5,
            }],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        const state = reducerFunction(stateVariables, action)
        expect(state).toEqual(expectedState)
    })
    it("should edit the task", () => {
        // item to edit
        const item = {
            id: uuid(),
            name: "defenceless- louis tomlinson",
            description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
            time: 238,
            numberOfCycles: 5,
        }

        const initialState = {
            name: "",
            description: "",
            time: "",
            task: [{
                id: uuid(),
                name: "defenceless- louis tomlinson",
                description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                time: 238,
                numberOfCycles: 5,
            },
            {
                id: uuid(),
                name: "defenceless- tomlinson",
                description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                time: 2328,
                numberOfCycles: 532,
            }
            ],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        // payload passes an object remainingItems and item, remainingItems is the filtered item after deleting the item to edit, and item is the pomodoro to edit.
        const action = {
            type: "editTask",
            payload: {
                remainingItems: [{
                    id: uuid(),
                    name: "defenceless- tomlinson",
                    description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                    time: 2328,
                    numberOfCycles: 532,
                }], item
            }
        }
        // here showbutton (showfrom) becomes true
        //the task has the remainingItems[remaining items after deletion] only.
        // name, description, time, number of cycles get the value of the items to edit
        const expectedState = {
            name: "defenceless- louis tomlinson",
            description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
            time: 238,
            task: [{
                id: uuid(),
                name: "defenceless- tomlinson",
                description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                time: 2328,
                numberOfCycles: 532,
            }],
            archivedTask: JSON.parse(localStorage.getItem("archivedTask")) || [],
            showButton: true,
            formInValid: true,
            numberOfCycles: 5,
            darkMode: false
        }
        const state = reducerFunction(initialState, action)
        expect(state).toEqual(expectedState)
    })
    it("should archive an task", () => {

        const stateVariables = {
            name: "",
            description: "",
            time: "",
            task: [
                {
                    id: uuid(),
                    name: "defenceless- tomlinson",
                    description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                    time: 2328,
                    numberOfCycles: 532,
                },
                {
                    id: uuid(),
                    name: "os lab",
                    description: "refactor code and test code",
                    time: 60,
                    numberOfCycles: 2,
                }
            ],
            archivedTask: [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        const item = {
            id: uuid(),
            name: "defenceless- tomlinson",
            description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
            time: 2328,
            numberOfCycles: 532
        }
        const remainingItems = [{
            id: uuid(),
            name: "os lab",
            description: "refactor code and test code",
            time: 60,
            numberOfCycles: 2,
        }]
        const action = {
            type: "archiveTask",
            payload: { item, remainingItems }
        }
        const state = reducerFunction(stateVariables, action)
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: [
                {
                    id: uuid(),
                    name: "os lab",
                    description: "refactor code and test code",
                    time: 60,
                    numberOfCycles: 2,
                }
            ],
            archivedTask: [
                {
                    id: uuid(),
                    name: "defenceless- tomlinson",
                    description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                    time: 2328,
                    numberOfCycles: 532
                }
            ],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        expect(state).toEqual(expectedState)
    })
    it("should delete a pomodoro", () => {

        const stateVariables = {
            name: "",
            description: "",
            time: "",
            task: [{
                id: uuid(),
                name: "defenceless- tomlinson",
                description: "Been up all night All night running all my lines But it’s only the truthBeen up all night",
                time: 2328,
                numberOfCycles: 532,
            }],
            archivedTask: [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        const remainingItems = []
        const action = {
            type: "deleteTask",
            payload: remainingItems
        }
        const state = reducerFunction(stateVariables, action)
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: [],
            archivedTask: [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        expect(state).toEqual(expectedState)
    })
    it("show/hide form", () => {
        const action = {
            type: "hideForm"
        }
        const state = reducerFunction(stateVariables, action)
        const expectedState = {
            name: "",
            description: "",
            time: "",
            task: [],
            archivedTask: [],
            showButton: false,
            formInValid: true,
            numberOfCycles: "",
            darkMode: false
        }
        expect(state).toEqual(expectedState)
    })

})