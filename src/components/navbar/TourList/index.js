import React from "react";
import Tour from "../Tour/Tour";
import "./TourList.scss";
import {tourData} from "../../../TourData"

export default class TourList extends React.Component{
    state ={
        tours:tourData
    }
    render(){
        console.log(this.state.tours)
     const {tours} = this.state;
        return(
            <section className="tour-list">
                {tours.map(tour=>  <Tour key = {tour.id} tour={tour} /> )}
                
            </section>
        )
    }
}