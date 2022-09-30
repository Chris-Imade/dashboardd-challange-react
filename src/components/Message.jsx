import React from 'react';
import { 
  KanbanComponent, 
  ColumnsDirective, 
  ColumnDirective
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../constants/index";
import { Header } from "./index";
 
const Message = () => {
  return (
    <div className='bg-white overflow-y-auto no-scrollbar h-[100vh] mb-[12rem] dark:bg-slate-800'>
      <Header title={"Messages"} />
      <div  className='m-12 mb-[15rem] dark:bg-slate-800'>
        <KanbanComponent
        className='dark:bg-slate-800'
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          contentField: "Summary",
          headerField: "Id"
        }}
        keyField="Status"
          width="auto"
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  )
}

export default Message