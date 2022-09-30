import React from 'react';
import {
  TimelineViews,
  TimelineMonth,
  Day,
  Week,
  WorkWeek,
  Month,
  MonthAgenda,
  ScheduleComponent,
  Inject,
  DragAndDrop,
  Agenda
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../../constants/dummyData';
import Header from '../Header';

const Calendar = () => {
  return (
    <div className='bg-white overflow-y-auto no-scrollbar h-[100vh] mb-[12rem] dark:bg-slate-800'>
      <Header title={"Calendar"} />
      <div className='m-12 mb-[15rem]'>
        <ScheduleComponent
          height="550px"
          eventSettings={{
            dataSource: scheduleData
          }}
          selectedDate={new Date(2021, 0, 10)}
        >
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, MonthAgenda, TimelineViews, TimelineMonth, DragAndDrop ]} />
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Calendar;