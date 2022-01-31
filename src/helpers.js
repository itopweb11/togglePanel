import LearningActivities from "./components/LearningActivities";
import Coursework from "./components/Coursework";
import Practice from "./components/Practice";

const panelData = [
    {id: 0, toggleBtnTitle: 'Учебная деятельность', component: LearningActivities},
    {id: 1, toggleBtnTitle: 'Курсовые', component: Coursework},
    {id: 2, toggleBtnTitle: 'Практика', component: Practice},
]

const todoList = [
    {id: 0, toggleBtnTitle: 'Понедельник', component: () => <span><strong>Понедельник</strong></span>},
    {id: 1, toggleBtnTitle: 'Вторник', component: () => <span><strong>Вторник</strong></span>},
    {id: 2, toggleBtnTitle: 'Среда', component: () => <span><strong>Среда</strong></span>},
    {id: 3, toggleBtnTitle: 'Четверг', component: () => <span><strong>Четверг</strong></span>},
    {id: 4, toggleBtnTitle: 'Пятница', component: () => <span><strong>Пятница</strong></span>},
    {id: 5, toggleBtnTitle: 'Суббота', component: () => <span><strong>Суббота</strong></span>},
    {id: 6, toggleBtnTitle: 'Воскресенье', component: () => <span><strong>Воскресенье</strong></span>},
]

export {panelData, todoList}