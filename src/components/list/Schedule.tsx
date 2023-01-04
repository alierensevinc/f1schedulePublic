import React from "react";
import {IonList} from '@ionic/react';
import ScheduleItem from "./ScheduleItem";

interface ScheduleProps {
    schedule: any;
}

const Schedule: React.FC<ScheduleProps> = (props) => {
    return (
        <IonList mode="ios">
            {
                props.schedule && props.schedule.map((race, index) =>
                    <ScheduleItem race={race} key={index}/>
                )
            }
        </IonList>
    );
}

export default Schedule;
