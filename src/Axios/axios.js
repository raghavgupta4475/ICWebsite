import axios from 'axios';
const instance=axios.create({
    baseURL:"https://console.firebase.google.com/u/2/project/messservices-14a08/database/messservices-14a08/data/ANC/MENU/AVAILABLE"
});

export default instance;