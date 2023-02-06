
                   {
                    tenderDetails.map(element=>{
                      const path = '/user/showtenders?tenderid='+element._id+'&enddate='+element.enddate;
          
                      return(
                        <Link to={path}>
                          <button type="button" class="btn btn-info btn-sm">Apply Tender</button>
                        </Link>
                      )
                    })
                  }