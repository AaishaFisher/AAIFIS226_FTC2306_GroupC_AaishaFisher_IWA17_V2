
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

/* const createArray = (length) => {
    const result = []

    for (let  = ; i < length; i) {
        result.push()
    }

    return result
}
 */
const createData = () => {
    const current = new Date();
    current.setDate(1)
    const month = current.getMonth();
    const year = current.getFullYear();

    const weeks = [];
    const week = [];
    const weekIndex = 1;

    while (current.getMonth() === month) {
        const dayOfWeek = current.getDay();
        if (dayOfWeek === 0 && week.length > 0) {
            weeks.push({ week: weekIndex ++, days: week})
        }
        
        week.push({ dayOfWeek, value: current.getDate() });
        current.setDate(current.getDate() + 1);
    }

    if (week.length > 0) {
        week.push({week: weekIndex, days: week});
    }
    return weeks;
}
  
const createCell = (classString, value) => {
    return `
      <td class="${classString}">
        ${value}
      </td>
    `;
  };

const createHtml = (data) => {
    let result = '<td class="table__cell table__cell_sidebar">Week ${week}</td>'

    for (const { daysOfWeek, value  } of days) {
        const isToday = (new Date().getDate() === value) && (new Date().getMonth() === new Date().getMonth());
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      let classString = 'table__cell';

      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;

      inner += createCell(classString, value !== undefined ? value : '');
    }

    result += `<tr>${inner}</tr>`;
  }

  result += '</tbody>';
  return result;
};

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

 