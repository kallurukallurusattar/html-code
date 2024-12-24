const days = ['SUN', 'MON', 'TUE', 'WDE', 'THU', 'FRI', 'SAT'];
const dates = [
    ['1', '2', '3', '4', '5', '6', '7',],
    ['8', '9', '10', '11', '12', '13', '14',],
    ['15', '16', '17', '18', '19', '20', '21',],
    [ '22', '23', '24', '25', '26', '27', '28',],
    [ '29', '30', '31',],
    
    ];

const table = 
document.getElementById('calender-table');
let tableHTML = '<tr>';


days.forEach(day => tableHTML += `<th>${day}</th>`);


tableHTML += '</tr>';

dates.forEach(week => {
    tableHTML += '<tr>';
    week.forEach(date => {
        tableHTML += `<td>${date}</td>`;
        });
        tableHTML += '</tr>';
        });
        table.innerHTML = tableHTML;


