import { INCREMENTDASHBOARD, DECREMENTDASHBOARD, RESETDASHBOARD } from "./types";

export function increment() {
    return { type: INCREMENTDASHBOARD };
}

export function decrement() {
    return { type: DECREMENTDASHBOARD };
}

export function reset() {
    return { type: RESETDASHBOARD };
}