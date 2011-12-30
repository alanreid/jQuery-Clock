(function($) {
    $.fn.Clock = function() {

        var container = $(this);

        var clockItems = [
          "It is", "half", "ten", "quarter", "twenty", "five", "minutes", "to", 
          "past", "one", "two", "three", "four", "five", "six", "seven",
          "eight", "nine", "ten", "eleven", "twelve", "o'clock"
        ];

        var hourMap = [];
        hourMap[0]  = 20;
        hourMap[1]  = 9;
        hourMap[2]  = 10;
        hourMap[3]  = 11;
        hourMap[4]  = 12;
        hourMap[5]  = 13;
        hourMap[6]  = 14;
        hourMap[7]  = 15;
        hourMap[8]  = 16;
        hourMap[9]  = 17;
        hourMap[10] = 18;
        hourMap[11] = 19;

        var minuteMap = [];
        minuteMap[0]  = [21];
        minuteMap[5]  = [5, 8];
        minuteMap[10] = [2, 8];
        minuteMap[15] = [3, 8];
        minuteMap[20] = [4, 8];
        minuteMap[25] = [4, 5, 8];
        minuteMap[30] = [1, 8];
        minuteMap[35] = [4, 5, 6, 7];
        minuteMap[40] = [4, 6, 7];
        minuteMap[45] = [3, 7];
        minuteMap[50] = [2, 6, 7];
        minuteMap[55] = [5, 6, 7];

        var html = "";
        for(i in clockItems) {
            html += '<span id="e_' + i + '">' + clockItems[i] + '</span>';
        }
        container.html(html);

        container.update = function() {
            var date = new Date();
            var hours = date.getHours();
            var minutes = Math.floor(date.getMinutes() / 5) * 5;

            if(hours >= 12) {
                hours = hours - 12;
            }

            if(minutes > 30) {
                hours++;
            }

            $('span', container).removeClass('selected');
            $('#e_0').addClass('selected');
            $('#e_' + hourMap[hours]).addClass('selected');

            if(minutes > 0) {
                for(i in minuteMap[minutes]) {
                    $('#e_' + minuteMap[minutes][i]).addClass('selected');
                }
            } else {
                $('#e_' + minuteMap[minutes][0]).addClass('selected');
            }
        };

        container.update();
        setInterval(container.update, 1000);
  }
})(jQuery);