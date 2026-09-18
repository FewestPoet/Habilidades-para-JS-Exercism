// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = new Date()) {
now = new Date(now)
  now.setDate(now.getDate() + days );
    return now
  
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
return  appointmentDate.toISOString()
  
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  timestamp = new Date(timestamp)
  
return { year:timestamp.getFullYear(),
month:timestamp.getMonth(),
date: timestamp.getDate(),
hour: timestamp.getHours(),
minute: timestamp.getMinutes() }}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
    timestamp = new Date(timestamp)

for (const option of Object.keys(options)) {

    if (option === "month") {
        // aquí modificar el mes usando options[option]
      timestamp.setMonth(options[option])
    }else if(option ==="year"){
      timestamp.setFullYear(options[option])
    } else if(option ==="date"){
      timestamp.setDate(options[option])
}else if (option ==="hour"){
      timestamp.setHours(options[option])
    }else if (option ==="minute"){
      timestamp.setMinutes(options[option])
    }
}
  
return { year:timestamp.getFullYear(),
month: timestamp.getMonth(),
date: timestamp.getDate(),
hour: timestamp.getHours(),
minute: timestamp.getMinutes() }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
const dateA  = new Date(timestampA)
 const dateB = new Date(timestampB)

  
  const difference =  dateB - dateA
 return Math.round(difference/1000)
  
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
 const dateA = new Date(appointmentTimestamp)
  const dateB = new Date(currentTimestamp)

  return dateA > dateB
}
