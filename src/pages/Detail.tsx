import React, {useEffect, useState} from "react";
import {
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import {useHistory} from "react-router";
import {pin, time} from "ionicons/icons";
import moment from "moment";
import momentz from "moment-timezone";

const Detail: React.FC = (props) => {

    const [race, setRace] = useState<any>();
    let history = useHistory();

    useEffect(() => {
        initRace();
    }, []);

    const initRace = () => {
        const tz = momentz.tz.guess();
        // @ts-ignore
        const _race = history.location.state.race;
        if (_race !== null && _race !== undefined) {
            _race.sessions.fp1 = moment(_race.sessions.fp1).tz(tz).format("DD-MM-YYYY | HH:mm");
            _race.sessions.fp2 = moment(_race.sessions.fp2).tz(tz).format("DD-MM-YYYY | HH:mm");
            _race.sessions.fp3 = moment(_race.sessions.fp3).tz(tz).format("DD-MM-YYYY | HH:mm");
            _race.sessions.qualifying = moment(_race.sessions.qualifying).tz(tz).format("DD-MM-YYYY | HH:mm");
            _race.sessions.gp = moment(_race.sessions.gp).tz(tz).format("DD-MM-YYYY | HH:mm");
        }
        setRace(_race);
    }

    return (
        <IonPage>
            {race !== null && race !== undefined &&
                <>
                    <IonHeader mode="ios">
                        <IonToolbar mode="ios" color="primary">
                            <IonButtons slot="start">
                                <IonBackButton defaultHref="home" mode="ios"/>
                            </IonButtons>
                            <IonTitle>Round {race.round}</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent fullscreen color="secondary">
                        <IonCard mode="ios" color="tertiary">
                            <IonCardHeader mode="ios">
                                <IonCardTitle mode="ios">{race.name}</IonCardTitle>
                            </IonCardHeader>
                            <IonItem color="tertiary">
                                <IonIcon icon={pin} slot="start" mode="ios"/>
                                <IonLabel mode="ios">{race.location}</IonLabel>
                            </IonItem>
                        </IonCard>
                        <IonCard mode="ios" color="tertiary">
                            <IonCardContent mode="ios">
                                <IonCardSubtitle mode="ios">Free Practice 1</IonCardSubtitle>
                                <IonItem mode="ios" color="tertiary">
                                    <IonIcon icon={time} slot="start" mode="ios"/>
                                    <IonLabel mode="ios">{race.sessions.fp1}</IonLabel>
                                </IonItem>
                                <IonCardSubtitle mode="ios">Free Practice 2</IonCardSubtitle>
                                <IonItem mode="ios" color="tertiary">
                                    <IonIcon icon={time} slot="start" mode="ios"/>
                                    <IonLabel mode="ios">{race.sessions.fp2}</IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                        <IonCard mode="ios" color="tertiary">
                            <IonCardContent mode="ios">
                                <IonCardSubtitle mode="ios">Free Practice 3</IonCardSubtitle>
                                <IonItem mode="ios" color="tertiary">
                                    <IonIcon icon={time} slot="start" mode="ios"/>
                                    <IonLabel mode="ios">{race.sessions.fp3}</IonLabel>
                                </IonItem>
                                <IonCardSubtitle mode="ios">Qualifying</IonCardSubtitle>
                                <IonItem mode="ios" color="tertiary">
                                    <IonIcon icon={time} slot="start" mode="ios"/>
                                    <IonLabel mode="ios">{race.sessions.qualifying}</IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                        <IonCard mode="ios" color="tertiary">
                            <IonCardContent mode="ios">
                                <IonCardSubtitle mode="ios">Race</IonCardSubtitle>
                                <IonItem mode="ios" color="tertiary">
                                    <IonIcon icon={time} slot="start" mode="ios"/>
                                    <IonLabel mode="ios">{race.sessions.gp}</IonLabel>
                                </IonItem>
                            </IonCardContent>
                        </IonCard>
                    </IonContent>
                </>
            }
        </IonPage>
    );
};

export default Detail;
