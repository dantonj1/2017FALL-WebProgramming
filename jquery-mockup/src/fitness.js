"use strict";
exports.__esModule = true;
var $ = require("jquery");
var Routine = /** @class */ (function() {
    function Routine(name) {
        this.name = name;
    }
    return Routine;
}());

exports.Routine = Routine;
var progressTracker = /** @class */ (function() {
    function progressTracker() {
        this.workoutList = [{
                name: "SHOULDER WORKOUT"
            },
            {
                name: "BICEP WORKOUT"
            },
            {
                name: "TRICEP WORKOUT"
            },
            {
                name: "LEG WORKOUT"
            },
            {
                name: "BACK WORKOUT"
            }
        ];
    }

    progressTracker.prototype.drawRoutines = function() {
        var index = 0;
        $("#routine-List").html(this.workoutList.map(function(x) {
            return "<button class=\"list-group-item\">" + x.name + "</button>";
        }).join(""));
        $("#routine-List button").each(function(index) {
            $(this).attr("id", "id" + index);
            index++;
        });
    };

    progressTracker.prototype.drawMyRoutines = function() {
        $("#my-routines").html(this.myRoutines.map(function(x) {
            return "<li class=\"list-group-item\">" + x.name + "</li>";
        }).join(""));
    };
    return progressTracker;
}());

exports.progressTracker = progressTracker;

//Controller
var tracker = new progressTracker();
tracker.drawRoutines();
$('.list-group-item').click(function(e) {
    e.preventDefault();
    var workoutName = e.target.textContent;
    document.getElementById('default-message').innerHTML = '';
    var newRoutine = new Routine(workoutName);
    tracker.myRoutines.push(newRoutine);
    console.log(JSON.stringify(tracker.workoutList));
    tracker.drawMyRoutines();
});