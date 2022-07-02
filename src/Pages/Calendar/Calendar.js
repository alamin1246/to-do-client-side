import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'
const Calendar = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <DayPicker className='mx-auto' mode="single"
      selected={selected}
      onSelect={setSelected}/>
        </div>
    );
};

export default Calendar;