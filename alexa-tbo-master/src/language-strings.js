'use strict';

var skillTask = 'Ich helfe dir einen Termin bei deinem Autohändler zu vereinbaren. Sage dazu: Vereinbare einen Termin.';

var languageStrings = {
    'de-DE': {
        'translation': {
            'MSG_START' : 'Hallo. ' + skillTask,
            'MSG_END' : 'Vielen Dank und bis zum nächsten Mal.',
            'MSG_PREPARE_START': 'Bitte nenne mir das Fahrzeug, den Kilometerstand, den Zeitpunkt sowie den Grund für deinen Termin.',
            'MSG_PREPARE_HELP' : skillTask,
            'MSG_PREPARE_SLOT_VEHICLE' : 'Mit welchem Fahrzeug möchtest du in die Werkstatt?',
            'MSG_PREPARE_SLOT_MILEAGE' : 'Welchen Kilometerstand hat dein Fahrzeug?',
            'MSG_PREPARE_SLOT_PERIOD' : 'Wann möchtest du den Termin vereinbaren?',
            'MSG_PREPARE_SLOT_REASON' : 'Warum muss dein Fahrzeug in die Werkstatt?',
            'MSG_PREPARE_CONFIRM' : '<say-as interpret-as="interjection">okey dokey.</say-as>. Folgende Eingaben habe ich erfasst: Fahrzeug: ${vehicle}, Kilometerstand: ${mileage}, Zeitraum: ${period}, Grund: ${reason}. Sind die Eingaben korrekt?',
            'MSG_APPOINT_NEXT_APPOINTMENT' : 'Der nächste freie Termin deiner Werkstatt, der auch mit deinem Kalender übereinstimmt, ist der <say-as interpret-as="date">${date}</say-as> um ${time} Uhr. Aufgrund deiner Angabe zum Grund des Werkstattbesuchs, habe ich eine Aufenthaltsdauer von mindestens einer Stunde berechnet. Aus diesem Grund reserviere ich dir ein Ersatzfahrzeug. Möchtest du diesen Termin buchen? Dann antworte mit Buchung durchführen.',
            'MSG_APPOINT_BOOKING_SUCCESS' : '<say-as interpret-as="interjection">abrakadabra.</say-as> Ich habe dir den Termin gebucht. Du erhälst eine Bestätigung von der Werkstatt per E-Mail. Den <say-as interpret-as="date">${date}</say-as> um ${time} Uhr habe ich direkt in deinen Kalender eingetragen. Bitte beachte, dass du laut durchschnittlicher Verkehrslage zu diesem Zeitpunkt circa 34 Minuten zu deinem Händler benötigst. Ich werde dich rechtzeitig an die Abfahrt erinnern.',
            'MSG_NOT_IMPLEMENTED_YET' : 'Damit kann ich aktuell noch nicht umgehen. Aber mein großer Meister wird es mir bald beibringen.',
        }
    }
};

module.exports = languageStrings;