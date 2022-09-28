import React from 'react'
import { Outlet } from 'react-router-dom';
import { Aside } from './components';
import { useAppContext } from './contexts/AppContext';
import styles from "./Root.module.css";

const Root = () => {
  
  const { layout } = useAppContext();
  const { colapseAside } = useAppContext();
  console.log(colapseAside);

  return (
    <>
        <div className={`flex ${styles.transit}`}>
            <div className={`${styles.transit} ${colapseAside && styles.asideAnimatedClose} ${!colapseAside && styles.openAside} ${colapseAside && `w-0`}`}>
              {/* <ContextProvider /> */}
              <Aside />
            </div> 
            <div className={`${colapseAside && styles.mainAnimatedClose} ${colapseAside != false && `w-[100vw]`}`}>
                <Outlet />
            </div>  
        </div>
    </>
  )
}

export default Root;