
/**
 * Stopwatch
 * 
 * Properties:
 *  - duration
 *  - reset
 *  - start
 *      - Throw error if already started
 *  - stop
 *      - Throw error if is not started
 */

function Stopwatch() {
    const state = {
        duration: 0,
        isActive: false,
        startTime: undefined,
        endTime: undefined
    }

    const getLapsedTimeInSeconds = function (start, end) {
        return start && end && (end.getTime() - start.getTime()) / 1000 || 0;
    };

    this.start = function () {
        if (state.isActive) {
            throw new Error('Stopwatch already started!');
        }
        state.isActive = true;
        state.startTime = new Date();
    };

    this.stop = function () {
        if (!state.isActive) {
            throw new Error('Stopwatch already stopped!');
        }
        state.isActive = false;
        state.endTime = new Date();
        state.duration += getLapsedTimeInSeconds(state.startTime, state.endTime);
    }

    this.reset = function () {
        state.duration = 0;
        state.isActive = false;
        state.startTime = undefined;
        state.endTime = undefined;
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            if (state.isActive) {
                return getLapsedTimeInSeconds(state.startTime, new Date()) + state.duration;
            }
            return state.duration;
        },
        set: function () {
            return new Error('Cannot explicitly set duration.');
        }
    });
}

sw = new Stopwatch();