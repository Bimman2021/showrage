import React, { useState } from 'react'
import Navbar from '../../COMPONENTS/Nav/Navbar'
import Box from '@mui/material/Box';
import img from '../../IMG/wc.jpg'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '../../COMPONENTS/footer/footer';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const Mylist = () => {
      const [value, setValue] = useState('1');



      //function that truncates description to just 150 characters
      function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
      }

      const handleChange = (event, newValue) => {
            setValue(newValue);
      };

      return (
            <div className=''>
                  <Navbar />


                  <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: '1em' }}>
                              <TabList className='tabs' onChange={handleChange} aria-label="lab API tabs">
                                    <Tab style={{ fontFamily: 'inherit' }} label="My List" value="1" />
                                    <Tab style={{ fontFamily: 'inherit' }} label="Watchlist" value="2" />
                                    <Tab style={{ fontFamily: 'inherit' }} label="Downloads" value="3" />
                              </TabList>
                        </Box>
                        <TabPanel value="1">
                              <h3 className='mg__btm'>season 1</h3>

                              <div className='movie__listCont'>
                                    <div className="container__fluid">
                                          <div className='flex single' >
                                                <div className='flex basis80'>
                                                      <div className='overlay'>
                                                            <img className='img' src={img} alt='' />
                                                      </div>
                                                      <div className='text__words' >
                                                            <h3>1. The return of jenifa</h3>
                                                            <p>{truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora molestias deserunt commodi exercitationem cum dolorem eligendi! Odio, saepe iure debitis id sed suscipit adipisci praesentium. Architecto itaque magni ullam quis amet nostrum. Quibusdam deserunt, quod distinctio itaque error repellat nostrum? Maxime quos velit nesciunt at repellendus, vero distinctio ex, a necessitatibus sit unde iusto nostrum cum laboriosam pariatur, autem voluptatibus. Vitae quam similique ducimus nobis, deleniti quo fugiat saepe minima. Vitae praesentium est, debitis, rem quam exercitationem repudiandae vero deleniti sint laboriosam rerum animi ipsum cupiditate a illum quia adipisci quod et, repellendus maiores. Possimus numquam pariatur ipsa. Quasi!', 201)}</p>
                                                      </div>
                                                </div>
                                                <div className='center basis20'>
                                                      <FontAwesomeIcon className='mg__1em' icon={faDownload} />
                                                </div>
                                          </div> <div className='flex single' >
                                                <div className='flex basis80'>
                                                      <div className='overlay'>
                                                            <img className='img' src={img} alt='' />
                                                      </div>
                                                      <div className='text__words' >
                                                            <h3>1. The return of jenifa</h3>
                                                            <p>{truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora molestias deserunt commodi exercitationem cum dolorem eligendi! Odio, saepe iure debitis id sed suscipit adipisci praesentium. Architecto itaque magni ullam quis amet nostrum. Quibusdam deserunt, quod distinctio itaque error repellat nostrum? Maxime quos velit nesciunt at repellendus, vero distinctio ex, a necessitatibus sit unde iusto nostrum cum laboriosam pariatur, autem voluptatibus. Vitae quam similique ducimus nobis, deleniti quo fugiat saepe minima. Vitae praesentium est, debitis, rem quam exercitationem repudiandae vero deleniti sint laboriosam rerum animi ipsum cupiditate a illum quia adipisci quod et, repellendus maiores. Possimus numquam pariatur ipsa. Quasi!', 201)}</p>
                                                      </div>
                                                </div>
                                                <div className='center basis20'>
                                                      <FontAwesomeIcon className='mg__1em' icon={faDownload} />
                                                </div>
                                          </div> <div className='flex single' >
                                                <div className='flex basis80'>
                                                      <div className='overlay'>
                                                            <img className='img' src={img} alt='' />
                                                      </div>
                                                      <div className='text__words' >
                                                            <h3>1. The return of jenifa</h3>
                                                            <p>{truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora molestias deserunt commodi exercitationem cum dolorem eligendi! Odio, saepe iure debitis id sed suscipit adipisci praesentium. Architecto itaque magni ullam quis amet nostrum. Quibusdam deserunt, quod distinctio itaque error repellat nostrum? Maxime quos velit nesciunt at repellendus, vero distinctio ex, a necessitatibus sit unde iusto nostrum cum laboriosam pariatur, autem voluptatibus. Vitae quam similique ducimus nobis, deleniti quo fugiat saepe minima. Vitae praesentium est, debitis, rem quam exercitationem repudiandae vero deleniti sint laboriosam rerum animi ipsum cupiditate a illum quia adipisci quod et, repellendus maiores. Possimus numquam pariatur ipsa. Quasi!', 201)}</p>
                                                      </div>
                                                </div>
                                                <div className='center basis20'>
                                                      <FontAwesomeIcon className='mg__1em' icon={faDownload} />
                                                </div>
                                          </div> <div className='flex single' >
                                                <div className='flex basis80'>
                                                      <div className='overlay'>
                                                            <img className='img' src={img} alt='' />
                                                      </div>
                                                      <div className='text__words' >
                                                            <h3>1. The return of jenifa</h3>
                                                            <p>{truncate('Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tempora molestias deserunt commodi exercitationem cum dolorem eligendi! Odio, saepe iure debitis id sed suscipit adipisci praesentium. Architecto itaque magni ullam quis amet nostrum. Quibusdam deserunt, quod distinctio itaque error repellat nostrum? Maxime quos velit nesciunt at repellendus, vero distinctio ex, a necessitatibus sit unde iusto nostrum cum laboriosam pariatur, autem voluptatibus. Vitae quam similique ducimus nobis, deleniti quo fugiat saepe minima. Vitae praesentium est, debitis, rem quam exercitationem repudiandae vero deleniti sint laboriosam rerum animi ipsum cupiditate a illum quia adipisci quod et, repellendus maiores. Possimus numquam pariatur ipsa. Quasi!', 201)}</p>
                                                      </div>
                                                </div>
                                                <div className='center basis20'>
                                                      <FontAwesomeIcon className='mg__1em' icon={faDownload} />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                        <TabPanel value="3">Item Three</TabPanel>
                  </TabContext>

                  <Footer />

            </div>
      )
}

export default Mylist