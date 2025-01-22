import SerchInput from './CoachComponents/SerchInput';

import SelfPage from './CoachComponents/SelfPage';  <SelfPage />


import CoachList from './CoachComponents/CoachList';




import './Coach.scss';







function Coach() {
  

  return (
    <div className='container mt-5'>
      <div className='d-flex flex-column align-items-center'>
        <h1 className='text-white'>教練總覽</h1>
        <SerchInput />

        <CoachList />
      </div>
    </div>
  )
}

export default Coach