import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Add from '@mui/icons-material/Add';

export default function Faq() {
      return (
            <div>
                  <Accordion sx={{ backgroundColor: '#222', color: '#fff' }}>

                        <AccordionSummary
                              expandIcon={<Add sx={{ color: '#fff', fontSize: '1.2rem' }} />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                              sx={{ boderBottom: '1px solid #fff' }}

                        >
                              <Typography sx={{ color: '#fff', fontSize: '1.2rem' }}>  What is showrage </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                              <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                              </Typography>
                        </AccordionDetails>
                  </Accordion>


            </div>
      );
}
