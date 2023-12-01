import { Event } from "../../../../shared/interfaces/event.interface";

export default function useGetEventsInViewableMonths(date: Date, events: Event[]): Array<Event[]> {
    const eventsInViewableMonthsArray: Array<Event[]> = Array.from({length: 3}, () => []);
    for (const event of events) {
        const eventDate = new Date(`${event.dateVenue}, ${event.timeVenueUTC}`);
        const offSet = date.getMonth() - eventDate.getMonth();
        switch(offSet) {
            case 1:
            case -11:
                eventsInViewableMonthsArray[0].push(event);
              break;
            case 0:
                eventsInViewableMonthsArray[1].push(event);
              break;
            case -1:
            case 11:
                eventsInViewableMonthsArray[2].push(event);
              break;
          }
    };
    return eventsInViewableMonthsArray;
};