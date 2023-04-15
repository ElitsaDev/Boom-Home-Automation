import Devices from "../../src/components/devices/Devices";
import devices from '../../data/devices.json';

export default function Room() {
    return (
        <Devices devices={Object.values(devices)}/>
    );
}