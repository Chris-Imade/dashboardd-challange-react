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
    <div className='mt-[11rem] bg-white rounded-3xl overflow-y-auto no-scrollbar h-[100vh] mb-[12rem]'>
      <Header title={"Messages"} />
      <div  className='m-12 mb-[15rem]'>
        <KanbanComponent
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