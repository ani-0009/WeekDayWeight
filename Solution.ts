function solution(D: { [index: string]: number }) {

    var weekday: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var output: { [index: string]: number } = {};

    Object.entries(D).forEach(function ([key, value]) {
        var date: Date = new Date(key);
        var dayNum: number = date.getDay();
        dayNum = dayNum > 0 ? dayNum - 1 : 6;
        var day: string = weekday[dayNum];
        if (output.hasOwnProperty(day)) {
            output[day] = output[day] + value;
        } else {
            output[day] = value;
        }
    });
    weekday.forEach(function (day: string, index: number): void {
        var isDayInOutput: boolean = output.hasOwnProperty(day);
        if (!isDayInOutput) {
            output[day] = (output[index-1] + output[index+1]) / 2;
        }
    });
    return output;
}

// Input
var D = { '2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4 };

// function call
var output = solution(D);
console.log(output);