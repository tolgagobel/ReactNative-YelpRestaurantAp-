import axios from "axios";

export default axios.create({
  baseURL : 'https://api.yelp.com/v3/businesses',
  headers : {
    Authorization :
    'Bearer 8cKfqfdAN8D_H-wluWJWUc-T8zUJnF_5lWBL26mq7oghiv88v047QaXHqhNDb8T1VzVKkDrVj1h3m-ld_KksRXMQbrp-0fCLciIrbS1bLOEsjYZH0M45WHhsZBpqZXYx ',},
});
