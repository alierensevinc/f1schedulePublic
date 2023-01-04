import React, {useEffect, useState} from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import _schedule from "../_db/schedule.json";
import Schedule from "../components/list/Schedule";

const Home: React.FC = () => {
    const [schedule, setSchedule] = useState<any>();

    useEffect(() => {
        setSchedule(_schedule.races);
    }, []);

    return (
        <IonPage>
            <IonHeader mode="ios">
                <IonToolbar mode="ios" color="primary">
                    <IonTitle>F1 2022 Schedule</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {
                    schedule !== null && schedule !== undefined && schedule?.length > 0 &&
                    <Schedule schedule={schedule}/>
                }
            </IonContent>
        </IonPage>
    );
};

export default Home;
