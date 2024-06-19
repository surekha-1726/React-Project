import React from 'react';

import { useEffect, useState } from 'react';
import './Displaypage.css';





function Displaypage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://panorbit.in/api/users.json')
            .then(response => response.json())
            .then(parsedData => setData(parsedData.users))
            .catch(error => console.error('error fetching data:', error));
    }, []);

    console.log(data);





    return (
        <div className="Displaypage">

            <div className='page-container'>

                <div className='middle-content'>
                    Select an account
                </div>
                <div >
                    {data.map((obj,index)=>{
                        return(
                            <>
                            <div className='content'>
                            <img src={obj.profilepicture}
                                // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" 
                                alt='circle' className='image' />
        
                            <div className='field'>
                                <p>{obj.name}</p>
        
                            </div>

                        </div>
                        <hr className='line' />

                        </>

                        )
                    })}

                </div>


                    {/* <img src={data[0].profilepicture}
                        //  src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg" 
                        alt='circle' className='image' />
                    <div className='field'>
                        <p>{data[0].name}</p>

                    </div>



                    

                </div>
                <hr className='line' />


                <div className='content'>
                    <img src={data[1].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1002.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>
                        <p>{data[1].name}</p>

                    </div>
                </div>
                <hr className='line' />

                <div className='content'>
                    <img src={data[2].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1003.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>
                        <p>{data[2].name}</p>
                    </div>
                </div>
                <hr className='line' />

                <div className='content'>
                    <img src={data[3].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>
                        <p>{data[3].name}</p>
                    </div>
                </div>
                <hr className='line' />

                <div className='content'>
                    <img src={data[4].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>

                        <p>{data[4].name}</p>
                    </div>

                </div>
                <hr className='line' />


                <div className='content'>
                    <img src={data[5].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg"
                        alt='circle' className='image' />

                    <div className='field'>

                        <p>{data[5].name}</p>


                    </div>
                </div>
                <hr className='line' />

                <div className='content'>
                    <img src={data[6].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>

                        <p>{data[6].name}</p>


                    </div>
                </div>
                <hr className='line' />

                <div className='content'>
                    <img src={data[7].profilepicture}
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg" 
                        alt='circle' className='image' />

                    <div className='field'>

                        <p>{data[7].name}</p>


                    </div>
                </div>
                <hr className='line' />*/}
        
            </div>


        </div>
    );
}

export default Displaypage;
