import Person from "./person";

interface Lead {
    person: Person;
    facilityUuid: string;
    moveInDate?: Date;
}

export default Lead;