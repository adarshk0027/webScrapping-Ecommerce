import React, { useState, useEffect } from 'react'
import '../components/index.css'
import SearchIcon from '@mui/icons-material/Search'
import SearchOffIcon from '@mui/icons-material/SearchOff';
function SearchBar ({ Products, DataState }) {
  const [Data, SetData] = useState([])

  const [TextData, SetText] = useState('')
  //Handle Change For Filter With Key Press On Search Bar
  const handleChange = event => {
    let TextValue = event.target.value

    const FilteredData = Products.filter(item => {
      return item.Title.toLowerCase().includes(TextValue.toLowerCase())
    })

    SetData(FilteredData)
    SetText(TextValue)
    
  }
  //Handle Changes Ends

  //handle Submit For perform Task When Clicking Search Button
  const handleSubmit = () => {
    var found = Products.find(function (element) {
      return element.Title === TextData
    })
    DataState([found])
    SetData([])
  }
  //Handle Submit Ends

  const HandleSearch = value => {
    SetText(value)
    
  }

  return (
    <div className='Search '>
      <div className='SearchInput d-flex mr-3'>
        <div className='seraching'>
          <input
            name='search'
            id=''
            placeholder='serch Here for iphone and shoes '
            type='search'
            className='form-control rounded Input'
            onChange={handleChange}
            value={TextData}
          />
        </div>
        <div className='SerachIcon' onClick={()=>{
              handleSubmit()
            }}>
          
          {Data.length !== 0 ? 
            <SearchIcon ></SearchIcon>
           : 
            <SearchOffIcon style={{ color: "red" }}></SearchOffIcon>
          }
        </div>
      </div>
      <div className='Results bg-white width-25'>
        {Data.length !== 0 &&
          Data.map((item,index) => {
            return (
              <div 
                key={index}
                className='dataItem'
                onClick={e => {
                  e.preventDefault()
                  HandleSearch(item.Title)
                }}
              >
                {item.Title}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SearchBar
