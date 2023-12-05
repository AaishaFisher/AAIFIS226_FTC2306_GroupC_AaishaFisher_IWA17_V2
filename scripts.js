
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
        week.push({week: weekIndex, days: week};)
    }
    return weeks;
}
     
const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const { week,  } of ) {
        let inner = ""
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
         (const { dayOfWeek, value } of days) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek ===  | dayOfWeek === 
            const isAlternate = week % 2 === 0
            
						let classString = 'table__cell'

            if () classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            if () classString = `${} table__cell_`
            inner = addCell()
        }

        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)

 