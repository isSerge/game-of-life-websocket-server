const patternNames = {
    TUB: 'Tub',
    BOAT: 'Boat',
    BLINKER: 'Blinker',
    GLIDER: 'Glider',
    DEFAULT: 'Default',
}

const topics = {
    INITIAL_REQUEST: 'initial-request',
    INITIAL_RESPONSE: 'initial-response',
    PLACE_CELL: 'place-cell',
    PLACE_PATTERN: 'place-pattern',
    START_TICKS: 'start-ticks',
    NEXT_TICK: 'next-tick',
    PAUSE_TICK: 'pause-tick',
    REFRESH_TICKS: 'refresh-ticks',
    WORLD_UPDATE: 'world-update',
}

module.exports = {
    patternNames,
    topics,
}