import React from 'react';
import { 
  GridComponent, 
  ColumnsDirective, 
  ColumnDirective, 
  Page, 
  Selection,
  Inject, 
  Edit, 
  Toolbar, 
  Sort, 
  Filter 
} from '@syncfusion/ej2-react-grids';
import Header from './Header';
import { customersData, customersGrid } from "../constants/index";


const Team = () => {
  return (
    <div className='mt-[11rem] bg-white rounded-3xl overflow-y-auto no-scrollbar h-[100vh] mb-[12rem]'>
      <Header title={"Team Members"} />
      <div className='m-12 mb-[15rem]'>
        <GridComponent
          dataSource={customersData}
          allowPaging
          allowSorting
          toolbar={['Delete']}
          editSettings={{
            allowDeleting: true,
            allowEditing: true
          }}
          width="auto"
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Team