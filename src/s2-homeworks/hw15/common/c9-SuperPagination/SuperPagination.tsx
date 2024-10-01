import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
  {
    page, itemsCountForPage, totalCount, onChange, id = 'hw15',
  }
) => {
  // const lastPage = 10 // пишет студент // вычислить количество страниц
  const lastPage = Math.ceil(totalCount / itemsCountForPage)

  const onChangeCallback = (event: any, page: number) => {
    // пишет студент
    onChange(page, itemsCountForPage)
  }

  // const onChangeSelect = (event: any) => {
  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    // пишет студент
    console.log(event.currentTarget.value)
    onChange(page, +event.currentTarget.value)
  }

  return (
    <div className={s.pagination}>
      <Pagination id={id + '-pagination'}
                  sx={{ height: '24px',  marginRight: '12px', display: 'flex',
                    alignItems: 'center',
                    // стили для Pagination // пишет студент
                  }}
                  page={page}
                  count={lastPage}
                  onChange={onChangeCallback}
                  hideNextButton
                  hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect id={id + '-pagination-select'}
                   value={itemsCountForPage}
                   options={[{id: 4, value: 4}, {id: 7, value: 7}, {id: 10, value: 10},]}
                   onChange={onChangeSelect}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  )
}

export default SuperPagination