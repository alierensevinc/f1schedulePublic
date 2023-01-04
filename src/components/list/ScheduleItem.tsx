import React from "react";
import {IonItem} from '@ionic/react';
import {useHistory} from "react-router";

interface ScheduleItemProps {
    race: any;
}

const ScheduleItem: React.FC<ScheduleItemProps> = (props, key) => {

    let history = useHistory();

    const navigate = () => {
        history.push({
            pathname: '/detail',
            state: {race: props.race}
        })
    }

    return (
        <IonItem key={key} onClick={navigate} mode="ios" color="secondary">
            {props.race.name}
        </IonItem>
    );
}

export default ScheduleItem;
