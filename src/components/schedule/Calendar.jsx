import React from 'react';
import {
  TimelineViews,
  TimelineMonth,
  Day,
  Week,
  WorkWeek,
  Month,
  MonthAgenda,
  Print,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
  Agenda
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../../constants/dummyData';
import Header from '../Header';

const Calendar = () => {
  return (
    <div className='m-2 md:m-1- mt-[17rem] p-2 md:p-10 bg-white rounded-3xl overflow-y-auto no-scrollbar h-[100vh] mb-[12rem]'>
      <Header />
      <div className='mt-12'>
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